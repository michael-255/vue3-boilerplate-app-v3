import type { IDBSetting } from '@/models/Setting'
import type { IDBLog } from '@/models/Log'
import type { IDBParent } from '@/models/Parent'
import type { IDBRecord } from '@/models/Record'

export interface IDBResponse {
  data: (IDBSetting | IDBLog | IDBParent | IDBRecord)[]
  count: number
  message?: string
  error?: string
}
