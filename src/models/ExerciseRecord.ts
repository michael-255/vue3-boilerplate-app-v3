import { Record, type IRecord } from '@/models/__Record'
import type { DatabaseObject, DataTableProps } from '@/constants/types-interfaces'
import type { LocalDatabase } from '@/services/LocalDatabase'
import { AppTable, Field, Operation } from '@/constants/core/data-enums'
import { defineAsyncComponent } from 'vue'

export interface IExerciseRecord extends IRecord {
  weight?: number[]
  reps?: number[]
}

/**
 * ExerciseRecord Class
 * @param obj IExerciseRecord
 */
export class ExerciseRecord extends Record {
  weight?: number[]
  reps?: number[]

  constructor(params: IExerciseRecord) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      parentId: params.parentId,
    })
    this.weight = params.weight
    this.reps = params.reps
  }

  static async report(...params: any): Promise<void> {
    console.error('params:', params)
    throw new Error('Not Supported')
  }

  static async update(
    database: LocalDatabase,
    originalId: string,
    props: DatabaseObject
  ): Promise<void> {
    const { id, createdDate, parentId } = props
    let { weight, reps } = props

    // Needed to bypass Dexie add issue
    weight = [...weight]
    reps = [...reps]

    await database.updateById(
      AppTable.EXERCISE_RECORDS,
      originalId,
      new ExerciseRecord({ id, createdDate, parentId, weight, reps })
    )
  }

  static async create(database: LocalDatabase, data: DatabaseObject): Promise<void> {
    const { id, createdDate, parentId } = data
    let { weight, reps } = data

    // Needed to bypass Dexie add issue
    weight = [...weight]
    reps = [...reps]

    await database.add(
      AppTable.EXERCISE_RECORDS,
      new ExerciseRecord({ id, createdDate, parentId, weight, reps })
    )
  }

  static async getAll(database: LocalDatabase): Promise<ExerciseRecord[]> {
    return await database.getAll(AppTable.EXERCISE_RECORDS)
  }

  static getLabelSingular(): string {
    return 'Exercise Record'
  }

  static getLabelPlural(): string {
    return 'Exercise Records'
  }

  static getParentTable(): AppTable | null {
    return AppTable.EXERCISES
  }

  static getOperations(): Operation[] {
    return [
      Operation.CREATE,
      Operation.UPDATE,
      Operation.DELETE,
      Operation.CLEAR,
      Operation.INSPECT,
    ]
  }

  static getVisibleColumns(): Field[] {
    return [Field.WEIGHT, Field.REPS]
  }

  static getFields() {
    return [...Record.getFields(), Field.WEIGHT, Field.REPS]
  }

  static getFieldComponents(): any {
    return [
      ...Record.getFieldComponents(),
      defineAsyncComponent(
        () => import('@/components/shared/operation-dialog/inputs/SetInput.vue')
      ),
    ]
  }

  static getColumns(): DataTableProps[] {
    return [
      ...Record.getColumns(),
      {
        name: Field.WEIGHT,
        label: 'Weight (lbs)',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.WEIGHT],
        format: (val: number[]) => val,
      },
      {
        name: Field.REPS,
        label: 'Reps',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.REPS],
        format: (val: number[]) => val,
      },
    ]
  }
}
