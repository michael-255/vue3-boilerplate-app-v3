import type { IndexableType } from 'dexie'
import type { AppObject } from '@/constants/app'
import { AppTable } from '@/constants/table'
import { Field, SettingKey, type SettingValue, type Severity } from '@/constants/model'
import type { IDBLog } from '@/models/Log'
import { dexieWrapper } from '@/services/DexieWrapper'
import { uuid } from '@/utils/common'
import type { IDBSetting } from '@/models/Setting'
import type { IDBResponse } from '@/models/Response'

/*
function get_by_id(table: AppTable, id: string);
function get_by_type(table: AppTable, type: CoreType);
function get_by_status(table: AppTable, status: CoreStatus);
function bulk_get_by_ids(table: AppTable, ids: string[]);
function clear_by_type(table: AppTable, type: CoreType);
function clear_by_status(table: AppTable, status: CoreStatus);
function delete_by_id(table: AppTable, id: string);
*/

export default function useDBCommon(): AppObject {
  /**
   * Get all items from table.
   * @param table
   * @returns IDBResponse
   */
  async function getTable(table: AppTable): Promise<IDBResponse> {
    const data = await dexieWrapper.table(table).toArray()
    return {
      data: data || [],
      count: data?.length,
      message: 'TODO',
      error: 'TODO',
    }
  }

  /**
   * Clears all items from table.
   * @param table
   * @returns undefined
   */
  async function clearTable(table: AppTable): Promise<void> {
    return await dexieWrapper.table(table).clear()
  }

  /**
   * Completely deletes the database and all of its data (must reload the app after).
   * @returns undefined
   */
  async function deleteDatabase(): Promise<void> {
    return await dexieWrapper.delete()
  }

  /**
   * Sets the Settings to their database or default values.
   */
  async function initializeSettings(): Promise<void> {
    const settings: IDBSetting[] = await dexieWrapper.table(AppTable.SETTINGS).toArray()

    const findSetting = (key: SettingKey): SettingValue | undefined => {
      return settings.find((s: IDBSetting) => s[Field.KEY] === key)?.value
    }

    let darkMode = findSetting(SettingKey.DARK_MODE)
    let showConsoleLogs = findSetting(SettingKey.SHOW_CONSOLE_LOGS)
    let showDebugMessages = findSetting(SettingKey.SHOW_DEBUG_MESSAGES)
    let saveInfoMessages = findSetting(SettingKey.SAVE_INFO_MESSAGES)

    // Create the Setting records with a default value if it doesn't exist
    if (darkMode === undefined) {
      darkMode = true // default
      await addSetting(SettingKey.DARK_MODE, darkMode)
    }

    if (showConsoleLogs === undefined) {
      showConsoleLogs = false // default
      await addSetting(SettingKey.SHOW_CONSOLE_LOGS, showConsoleLogs)
    }

    if (showDebugMessages === undefined) {
      showDebugMessages = false // default
      await addSetting(SettingKey.SHOW_DEBUG_MESSAGES, showDebugMessages)
    }

    if (saveInfoMessages === undefined) {
      saveInfoMessages = false // default
      await addSetting(SettingKey.SAVE_INFO_MESSAGES, saveInfoMessages)
    }

    // TODO
    // Set the store state values
    // settingStore.darkMode = darkMode
    // settingStore.showConsoleLogs = showConsoleLogs
    // settingStore.showDebugMessages = showDebugMessages
    // settingStore.saveInfoMessages = saveInfoMessages
  }

  /**
   * Adds a Setting to the database.
   * @param key
   * @param value
   * @returns Key of new Setting
   */
  async function addSetting(key: SettingKey, value: SettingValue): Promise<IndexableType> {
    const setting: IDBSetting = { key, value }
    return await dexieWrapper.table(AppTable.SETTINGS).add(setting)
  }

  /**
   * Update a Setting value by its key.
   * @param key
   * @param value
   * @returns 1 on a successful update
   */
  async function updateSettingByKey(key: SettingKey, value: SettingValue): Promise<IndexableType> {
    return await dexieWrapper.table(AppTable.SETTINGS).update(key, { value })
  }

  /**
   * Adds a Log to the database.
   * @param severity
   * @param label
   * @param error
   * @param location
   * @returns Id of new Log
   */
  async function addLog(
    severity: Severity,
    label: string,
    error?: Error | any,
    location?: string
  ): Promise<IndexableType> {
    const log: IDBLog = {
      id: uuid(),
      created_timestamp: new Date().getTime(),
      severity,
      label,
      location,
      error,
    }

    return await dexieWrapper.table(AppTable.LOGS).add(log)
  }

  return {
    // Misc
    getTable,
    clearTable,
    deleteDatabase,
    // Settings
    initializeSettings,
    addSetting,
    updateSettingByKey,
    // Logs
    addLog,
  }
}
