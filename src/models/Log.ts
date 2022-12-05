import type { Field, Severity } from '@/constants/model'

export interface IDBLog {
  [Field.ID]: string
  [Field.CREATED_TIMESTAMP]: string
  [Field.SEVERITY]: Severity
  [Field.LABEL]: string
  [Field.LOCATION]?: string
  [Field.MESSAGE]?: string
  [Field.STACK]?: string
}
