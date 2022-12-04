import type { Field } from '@/constants/table-types/field'

export enum SettingKey {
  DARK_MODE = 'dark-mode',
  SHOW_CONSOLE_LOGS = 'show-console-logs',
  SHOW_DEBUG_MESSAGES = 'show-debug-messages',
  SAVE_INFO_MESSAGES = 'save-info-messages',
}

export type SettingValue = boolean | string[]

export interface IDBSettingObject {
  [Field.KEY]: SettingKey
  [Field.VALUE]?: SettingValue
}
