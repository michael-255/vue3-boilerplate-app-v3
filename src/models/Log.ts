import type { AppObject } from '@/constants/app'
import type { Field, Severity } from '@/constants/model'

export interface IDBLog {
  [Field.ID]?: string // Optional - Gets auto generated and incremented by the table
  [Field.CREATED_TIMESTAMP]: number
  [Field.SEVERITY]: Severity
  [Field.LABEL]: string
  [Field.LOCATION]?: string
  [Field.ERROR]?: AppObject
}
