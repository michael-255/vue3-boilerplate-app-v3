import { AppTable } from '@/constants/table'
import type { IDBRecord } from '@/models/Record'
import { dexieWrapper } from '@/services/DexieWrapper'

export default function useDBRecords() {
  /**
   * Gets all data from the Records table.
   * @returns IDBRecord[]
   */
  async function getRecordsTable(): Promise<IDBRecord[]> {
    return await dexieWrapper.table(AppTable.RECORDS).toArray()
  }

  return { getRecordsTable }
}
