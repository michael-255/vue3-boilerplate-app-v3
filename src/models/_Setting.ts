import type { Field, SettingKey, SettingValue } from '@/constants/model'

export interface IDBSettingObject {
  [Field.KEY]: SettingKey
  [Field.VALUE]?: SettingValue
}
