import type { AppTable } from '@/constants/table'
import { dexieWrapper } from '@/services/DexieWrapper'

export default function useDBClear() {
  /**
   * Clears all items from table.
   * @param table
   * @returns undefined
   */
  async function clearTable(table: AppTable): Promise<void> {
    return await dexieWrapper.table(table).clear()
  }

  /**
   * Completely deletes the database and all of its data (must reload the app after).
   * @returns undefined
   */
  async function deleteDatabase(): Promise<void> {
    return await dexieWrapper.delete()
  }

  return {
    clearTable,
    deleteDatabase,
  }
}
