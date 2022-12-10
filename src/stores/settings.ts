import { defineStore } from 'pinia'
import { SettingKey, type SettingValue } from '@/constants/model'

const useSettingsStore = defineStore({
  id: 'settings',

  state: () =>
    Object.values(SettingKey).reduce((o, key) => {
      return { ...o, [key]: null as SettingValue }
    }, {} as { [key in SettingKey]: SettingValue }),
})

export default useSettingsStore
