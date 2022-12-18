import type { Field, RecordStatus } from '@/constants/model'
import type { IDBCore } from '@/models/_Core'

export interface IDBRecord extends IDBCore {
  [Field.RECORD_STATUS]: RecordStatus
  [Field.PARENT_ID]: string
  [Field.NOTE]: string
}
