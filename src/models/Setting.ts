import type { Field, SettingKey, SettingValue } from '@/constants/model'

export interface IDBSetting {
  [Field.KEY]: SettingKey
  [Field.VALUE]: SettingValue
}
