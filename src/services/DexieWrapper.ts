import Dexie, { type Table } from 'dexie'
import type { IDBParent } from '@/models/Parent'
import type { IDBRecord } from '@/models/Record'
import type { IDBSetting } from '@/models/Setting'
import type { IDBLog } from '@/models/Log'
import { AppTable } from '@/constants/table'
import { Field } from '@/constants/model'

export class DexieWrapper extends Dexie {
  [AppTable.PARENTS]!: Table<IDBParent>;
  [AppTable.RECORDS]!: Table<IDBRecord>;
  [AppTable.SETTINGS]!: Table<IDBSetting>;
  [AppTable.LOGS]!: Table<IDBLog>

  constructor(name: string) {
    super(name)

    this.version(1).stores({
      [AppTable.PARENTS]: `&${Field.ID}, ${Field.TYPE}, ${Field.STATUS}`,
      [AppTable.RECORDS]: `&${Field.ID}, ${Field.TYPE}, ${Field.STATUS}, ${Field.PARENT_ID}`,
      [AppTable.SETTINGS]: `&${Field.KEY}`,
      [AppTable.LOGS]: `++${Field.ID}`,
    })
  }
}
