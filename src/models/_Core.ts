import type { Field, CoreType, CoreStatus } from '@/constants/model'

export interface IDBCoreObject {
  [Field.TYPE]: CoreType
  [Field.ID]: string
  [Field.CREATED_TIMESTAMP]: string
  [Field.STATUS]: CoreStatus
}
