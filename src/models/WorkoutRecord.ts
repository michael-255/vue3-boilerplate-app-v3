import { Record, type IRecord } from '@/models/__Record'
import { AppTable, Field, Operation } from '@/constants/core/data-enums'
import type { DatabaseObject, DataTableProps } from '@/constants/types-interfaces'
import type { LocalDatabase } from '@/services/LocalDatabase'
import { isoToDisplayDate } from '@/utils/common'
import { defineAsyncComponent } from 'vue'

export interface IWorkoutRecord extends IRecord {
  finishedDate: string
  exerciseRecordIds: string[]
}

/**
 * WorkoutRecord Class
 * @param params IWorkoutRecord
 */
export class WorkoutRecord extends Record {
  finishedDate: string
  exerciseRecordIds: string[]

  constructor(params: IWorkoutRecord) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      parentId: params.parentId,
    })
    this.finishedDate = params.finishedDate
    this.exerciseRecordIds = params.exerciseRecordIds
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
    const { id, createdDate, parentId, finishedDate } = props
    let { exerciseRecordIds } = props
    exerciseRecordIds = [...exerciseRecordIds] // Required to bypass Dexie cloning issue
    await database.updateById(
      AppTable.WORKOUT_RECORDS,
      originalId,
      new WorkoutRecord({ id, createdDate, parentId, finishedDate, exerciseRecordIds })
    )
  }

  static async create(database: LocalDatabase, data: DatabaseObject): Promise<void> {
    const { id, createdDate, parentId, finishedDate } = data
    let { exerciseRecordIds } = data
    exerciseRecordIds = [...exerciseRecordIds] // Required to bypass Dexie cloning issue
    await database.add(
      AppTable.WORKOUT_RECORDS,
      new WorkoutRecord({ id, createdDate, parentId, finishedDate, exerciseRecordIds })
    )
  }

  static async getAll(database: LocalDatabase): Promise<WorkoutRecord[]> {
    return await database.getAll(AppTable.WORKOUT_RECORDS)
  }

  static getLabelSingular(): string {
    return 'Workout Record'
  }

  static getLabelPlural(): string {
    return 'Workout Records'
  }

  static getParentTable(): AppTable | null {
    return AppTable.WORKOUTS
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
    return [Field.FINISHED_DATE]
  }

  static getFields() {
    return [...Record.getFields(), Field.FINISHED_DATE, Field.EXERCISE_RECORD_IDS]
  }

  static getFieldComponents(): any {
    return [
      ...Record.getFieldComponents(),
      defineAsyncComponent(
        () => import('@/components/shared/operation-dialog/inputs/FinishedDateInput.vue')
      ),
      defineAsyncComponent(
        () => import('@/components/shared/operation-dialog/inputs/ExerciseRecordIdsSelect.vue')
      ),
    ]
  }

  static getColumns(): DataTableProps[] {
    return [
      ...Record.getColumns(),
      {
        name: Field.FINISHED_DATE,
        label: 'Finished Date',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.FINISHED_DATE],
        format: (val: string) => isoToDisplayDate(val) || '-',
      },
      {
        name: Field.EXERCISE_RECORD_IDS,
        label: 'Record Ids',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.EXERCISE_RECORD_IDS],
        format: (val: string[]) => val,
      },
    ]
  }
}
