import type { IndexableType } from 'dexie'
import { AppTable } from '@/constants/table'
import { dexieWrapper } from '@/services/DexieWrapper'

export default function useDBParents() {
  async function addParent(): Promise<IndexableType> {
    return await dexieWrapper.table(AppTable.PARENTS).add({})
  }

  return { addParent }
}
