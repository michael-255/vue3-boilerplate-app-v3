import { AppTable } from '@/constants/table'
import type { IDBParent } from '@/models/Parent'
import { dexieWrapper } from '@/services/DexieWrapper'

export default function useDBParents() {
  /**
   * Gets all data from the Parents table.
   * @returns IDBParent[]
   */
  async function getParentsTable(): Promise<IDBParent[]> {
    return await dexieWrapper.table(AppTable.PARENTS).toArray()
  }

  return { getParentsTable }
}
