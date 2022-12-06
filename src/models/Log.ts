import type { Field, Severity } from '@/constants/model'

export interface IDBLog {
  [Field.ID]: string
  [Field.CREATED_TIMESTAMP]: number
  [Field.SEVERITY]: Severity
  [Field.LABEL]: string
  [Field.LOCATION]?: string
  [Field.ERROR]?: { [x: string]: any }
}
