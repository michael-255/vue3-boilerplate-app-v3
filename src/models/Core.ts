import type { Field, CoreType } from '@/constants/model'

export interface IDBCore {
  [Field.TYPE]: CoreType
  [Field.ID]: string
  [Field.CREATED_TIMESTAMP]: number
}
