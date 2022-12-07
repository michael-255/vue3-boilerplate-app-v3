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
   * Sets the Settings to their database or default values.
   */
  async function initializeSettings(): Promise<void> {
    const settings: IDBSetting[] = await getSettingsTable()

    // Function that returns the Setting value field or undefined
    const findSettingValue = (key: SettingKey): SettingValue | undefined => {
      return settings.find((s: IDBSetting) => s[Field.KEY] === key)?.value
    }

    // Defaults are set after the nullish coalescing operator (works off of undefined)
    const darkMode = findSettingValue(SettingKey.DARK_MODE) ?? true
    const showConsoleLogs = findSettingValue(SettingKey.SHOW_CONSOLE_LOGS) ?? false
    const showDebugMessages = findSettingValue(SettingKey.SHOW_DEBUG_MESSAGES) ?? false
    const saveInfoMessages = findSettingValue(SettingKey.SAVE_INFO_MESSAGES) ?? false

    // Set all settings before continuing
    await Promise.all([
      setSetting(SettingKey.DARK_MODE, darkMode),
      setSetting(SettingKey.SHOW_CONSOLE_LOGS, showConsoleLogs),
      setSetting(SettingKey.SHOW_DEBUG_MESSAGES, showDebugMessages),
      setSetting(SettingKey.SAVE_INFO_MESSAGES, saveInfoMessages),
    ])

    // Set store state values
    settingsStore.darkMode = darkMode
    settingsStore.showConsoleLogs = showConsoleLogs
    settingsStore.showDebugMessages = showDebugMessages
    settingsStore.saveInfoMessages = saveInfoMessages
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

    if (!existingSetting) {
      return await dexieWrapper.table(AppTable.SETTINGS).add({ key, value } as IDBSetting)
    } else {
      return await dexieWrapper.table(AppTable.SETTINGS).update(key, { value })
    }
  }

  return {
    getSettingsTable,
    initializeSettings,
    setSetting,
  }
}
