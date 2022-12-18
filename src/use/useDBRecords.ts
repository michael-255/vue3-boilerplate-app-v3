import type { IndexableType } from 'dexie'
import { AppTable } from '@/constants/table'
import { dexieWrapper } from '@/services/DexieWrapper'

export default function useDBRecords() {
  async function addRecord(): Promise<IndexableType> {
    return await dexieWrapper.table(AppTable.RECORDS).add({})
  }

  return { addRecord }
}
