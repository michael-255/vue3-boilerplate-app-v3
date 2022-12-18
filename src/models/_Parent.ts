import type { Field, ParentStatus } from '@/constants/model'
import type { IDBCore } from '@/models/_Core'

export interface IDBParent extends IDBCore {
  [Field.PARENT_STATUS]: ParentStatus
  [Field.NAME]: string
  [Field.DESCRIPTION]: string
}
