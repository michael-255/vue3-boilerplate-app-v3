import type { IDBSettingObject } from '@/models/_Setting'
import type { IDBLogObject } from '@/models/_Log'
import type { IDBParentObject } from '@/models/_Parent'
import type { IDBRecordObject } from '@/models/_Record'

export interface IDBResponse {
  data: (IDBSettingObject | IDBLogObject | IDBParentObject | IDBRecordObject)[]
  count: number
  message: string | undefined
  error: string | undefined
}
