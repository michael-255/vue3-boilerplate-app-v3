import { defineStore } from 'pinia'
import type { SettingValue } from '@/constants/model'

const useSettingsStore = defineStore({
  id: 'settings',

  state: () => ({
    // The real defaults for these are set in initializeSettings
    darkMode: false as SettingValue,
    showConsoleLogs: false as SettingValue,
    showDebugMessages: false as SettingValue,
    saveInfoMessages: false as SettingValue,
  }),
})

export default useSettingsStore
