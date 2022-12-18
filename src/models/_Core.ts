import type { Field } from '@/constants/model'

export interface IDBCore {
  [Field.ID]: string
  [Field.CREATED_TIMESTAMP]: number
}
