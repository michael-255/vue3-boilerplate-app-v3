import type { Field } from '@/constants/table-types/field'

export enum Severity {
  DEBUG = 'Debug',
  INFO = 'Info',
  WARN = 'Warning',
  ERROR = 'Error',
  CRITICAL = 'Critical',
}

export interface IDBLogObject {
  [Field.ID]: string
  [Field.CREATED_TIMESTAMP]: string
  [Field.SEVERITY]: Severity
  [Field.LABEL]: string
  [Field.LOCATION]?: string
  [Field.MESSAGE]?: string
  [Field.STACK]?: string
}
