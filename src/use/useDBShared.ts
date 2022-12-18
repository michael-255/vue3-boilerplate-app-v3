import type { IndexableType } from 'dexie'
import type { IDBLog } from '@/models/Log'
import type { IDBParent } from '@/models/Parent'
import type { IDBRecord } from '@/models/Record'
import type { IDBSetting } from '@/models/Setting'
import type { AppTable } from '@/constants/table'
import type { SettingKey } from '@/constants/model'
import { dexieWrapper } from '@/services/DexieWrapper'

type AnyModel = IDBParent | IDBRecord | IDBSetting | IDBLog

export default function useDBShared() {
  /**
   * Gets all data from a table.
   * @returns Database table data as an array
   */
  async function getTable(table: AppTable): Promise<AnyModel[]> {
    return await dexieWrapper.table(table).toArray()
  }

  /**
   * Import items into the defined table. Do NOT mismatch tables and item types!
   * @param table (AppTable)
   * @param items (Matching table model type)
   * @returns Array of imported item ids
   */
  async function importItems(table: AppTable, items: AnyModel[]): Promise<IndexableType[]> {
    return await dexieWrapper.table(table).bulkAdd(items, { allKeys: true })
  }

  /**
   * Delete item in table by id or key.
   * @param table
   * @param id id string, log number, or setting key
   * @returns undefined, even if nothing was deleted
   */
  async function deleteItem(table: AppTable, id: string | number | SettingKey): Promise<void> {
    return await dexieWrapper.table(table).delete(id)
  }

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

  return { getTable, importItems, deleteItem, clearTable, deleteDatabase }
}
