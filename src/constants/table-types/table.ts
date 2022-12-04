import type { Field } from '@/constants/table-types/field'

/**
 * Dexie table names used by the DexieWrapper service.
 */
export enum AppTable {
  PARENTS = 'Parents-Table',
  RECORDS = 'Records-Table',
  SETTINGS = 'Settings-Table',
  LOGS = 'Logs-Table',
}

/**
 * Operations that are available for tables.
 */
export enum Operation {
  NONE = 'None',
  CREATE = 'Create',
  UPDATE = 'Update',
  DELETE = 'Delete',
  CLEAR = 'Clear',
  REPORT = 'Report',
}

/**
 * Properties used to display data items in a QTable.
 */
export type DataTableProps = {
  name: Field | 'hidden_id'
  label: string
  align: string
  sortable: boolean
  required: boolean
  field: (val: any) => any
  format: (val: any) => any
}
