import type { Field, Severity } from '@/constants/model'

export interface IDBLogObject {
  [Field.ID]: string
  [Field.CREATED_TIMESTAMP]: string
  [Field.SEVERITY]: Severity
  [Field.LABEL]: string
  [Field.LOCATION]?: string
  [Field.MESSAGE]?: string
  [Field.STACK]?: string
}
