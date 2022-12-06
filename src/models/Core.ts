import type { Field, CoreType, CoreStatus } from '@/constants/model'

export interface IDBCore {
  [Field.TYPE]: CoreType
  [Field.ID]: string
  [Field.CREATED_TIMESTAMP]: number
  [Field.STATUS]: CoreStatus
}
