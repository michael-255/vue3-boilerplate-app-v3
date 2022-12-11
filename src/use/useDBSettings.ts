import type { IndexableType } from 'dexie'
import { AppTable } from '@/constants/table'
import { Field, SettingKey, type SettingValue } from '@/constants/model'
import { dexieWrapper } from '@/services/DexieWrapper'
import type { IDBSetting } from '@/models/Setting'
import useSettingsStore from '@/stores/settings'

export default function useDBSettings() {
  const settingsStore = useSettingsStore()

  /**
   * Gets all data from Settings table.
   * @returns IDBSetting[]
   */
  async function getSettingsTable(): Promise<IDBSetting[]> {
    return await dexieWrapper.table(AppTable.SETTINGS).toArray()
  }

  /**
   * Gets the setting value by key.
   * @param key
   * @returns SettingValue or undefined
   */
  async function getSettingValue(key: SettingKey): Promise<SettingValue | undefined> {
    return (
      await dexieWrapper.table(AppTable.SETTINGS).where(Field.KEY).equalsIgnoreCase(key).first()
    )?.value
  }

  /**
   * Sets the Settings to their database or default values.
   */
  async function initializeSettings(): Promise<void> {
    const settings: IDBSetting[] = await getSettingsTable()

    // Function that returns the Setting value field or undefined
    const findSettingValue = (key: SettingKey): SettingValue | undefined => {
      return settings.find((s: IDBSetting) => s[Field.KEY] === key)?.value
    }

    // Defaults are set after the nullish coalescing operator, which means no setting data was found
    const darkMode = findSettingValue(SettingKey.DARK_MODE) ?? true
    const showConsoleLogs = findSettingValue(SettingKey.SHOW_CONSOLE_LOGS) ?? false
    const showDebugMessages = findSettingValue(SettingKey.SHOW_DEBUG_MESSAGES) ?? false
    const saveInfoMessages = findSettingValue(SettingKey.SAVE_INFO_MESSAGES) ?? false
    const favoriteParentIds = findSettingValue(SettingKey.FAVORITE_PARENT_IDS) ?? []
    const orphanedRecordIds = findSettingValue(SettingKey.ORPHANED_RECORD_IDS) ?? []
    const activeRecordIds = findSettingValue(SettingKey.ACTIVE_RECORD_IDS) ?? []
    const parentsTableVisibleColumns = findSettingValue(
      SettingKey.PARENTS_TABLE_VISIBLE_COLUMNS
    ) ?? [Field.NAME]
    const recordsTableVisibleColumns = findSettingValue(
      SettingKey.RECORDS_TABLE_VISIBLE_COLUMNS
    ) ?? [Field.PARENT_ID]

    // Set all settings before continuing
    await Promise.all([
      setSetting(SettingKey.DARK_MODE, darkMode),
      setSetting(SettingKey.SHOW_CONSOLE_LOGS, showConsoleLogs),
      setSetting(SettingKey.SHOW_DEBUG_MESSAGES, showDebugMessages),
      setSetting(SettingKey.SAVE_INFO_MESSAGES, saveInfoMessages),
      setSetting(SettingKey.FAVORITE_PARENT_IDS, favoriteParentIds),
      setSetting(SettingKey.ORPHANED_RECORD_IDS, orphanedRecordIds),
      setSetting(SettingKey.ACTIVE_RECORD_IDS, activeRecordIds),
      setSetting(SettingKey.PARENTS_TABLE_VISIBLE_COLUMNS, parentsTableVisibleColumns),
      setSetting(SettingKey.RECORDS_TABLE_VISIBLE_COLUMNS, recordsTableVisibleColumns),
    ])

    // Set store state values
    settingsStore[SettingKey.DARK_MODE] = darkMode
    settingsStore[SettingKey.SHOW_CONSOLE_LOGS] = showConsoleLogs
    settingsStore[SettingKey.SHOW_DEBUG_MESSAGES] = showDebugMessages
    settingsStore[SettingKey.SAVE_INFO_MESSAGES] = saveInfoMessages
    settingsStore[SettingKey.FAVORITE_PARENT_IDS] = favoriteParentIds
    settingsStore[SettingKey.ORPHANED_RECORD_IDS] = orphanedRecordIds
    settingsStore[SettingKey.ACTIVE_RECORD_IDS] = activeRecordIds
    settingsStore[SettingKey.PARENTS_TABLE_VISIBLE_COLUMNS] = parentsTableVisibleColumns
    settingsStore[SettingKey.RECORDS_TABLE_VISIBLE_COLUMNS] = recordsTableVisibleColumns
  }

  /**
   * Sets the Setting with the provided key to the provided value in the database.
   * @param key
   * @param value
   * @returns Added Setting key, or 1 on successful update
   */
  async function setSetting(key: SettingKey, value: SettingValue): Promise<IndexableType> {
    const existingSetting = await dexieWrapper
      .table(AppTable.SETTINGS)
      .where(Field.KEY)
      .equalsIgnoreCase(key)
      .first()

    // Add or Update depending on if the Setting already exists
    if (!existingSetting) {
      return await dexieWrapper.table(AppTable.SETTINGS).add({ key, value } as IDBSetting)
    } else {
      return await dexieWrapper.table(AppTable.SETTINGS).update(key, { value })
    }
  }

  return {
    getSettingsTable,
    getSettingValue,
    initializeSettings,
    setSetting,
  }
}
