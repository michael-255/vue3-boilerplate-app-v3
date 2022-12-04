import { AppTable, Field, Operation, ExerciseTracks } from '@/constants/core/data-enums'
import type { DatabaseObject, DataTableProps, GeneratedReport } from '@/constants/types-interfaces'
import { Activity, type IActivity } from '@/models/__Activity'
import type { LocalDatabase } from '@/services/LocalDatabase'
import { isoToDisplayDate } from '@/utils/common'
import { defineAsyncComponent } from 'vue'
import type { ExerciseRecord } from './ExerciseRecord'

export interface IExercise extends IActivity {
  exerciseTracks: ExerciseTracks
}

/**
 * Exercise Class
 * @param params IExercise
 */
export class Exercise extends Activity {
  exerciseTracks: ExerciseTracks

  constructor(params: IExercise) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      name: params.name,
    })
    this.exerciseTracks = params.exerciseTracks
  }

  /**
   * Creates the chart data and settings for the reports.
   * @param database
   * @param id
   */
  static async report(database: LocalDatabase, id: string): Promise<any> {
    const records = (await database.getAllByField(
      AppTable.EXERCISE_RECORDS,
      Field.PARENT_ID,
      id
    )) as ExerciseRecord[]

    const parent = (await database.getFirstByField(AppTable.EXERCISES, Field.ID, id)) as Exercise

    // For each record
    const totalReps = [] as number[]
    const totalWeight = [] as number[]
    const heaviestWeight = [] as number[]

    records.forEach((record: ExerciseRecord) => {
      // Ensure weight and reps exists
      const recordReps = record?.reps ? record.reps : []
      const recordWeight = record?.weight ? record.weight : []

      let totalRepsForRecord = 0
      let totalWeightForRecord = 0
      let heaviestWeightForRecord = 0

      // Get totals and heaviest for each record
      for (let i = 0; i < recordReps.length; i++) {
        const indexReps = recordReps[i] ? recordReps[i] : 0
        const indexWeight = recordWeight[i] ? recordWeight[i] : 0

        // Find the hightest weight lifted
        if (indexWeight > heaviestWeightForRecord) {
          heaviestWeightForRecord = indexWeight
        }

        totalWeightForRecord += indexWeight * indexReps // Example: 135x5
        totalRepsForRecord += indexReps
      }

      totalReps.push(totalRepsForRecord)
      totalWeight.push(totalWeightForRecord)
      heaviestWeight.push(heaviestWeightForRecord)
    })

    const heaviestWeightDataset = [
      {
        label: 'Heaviest Weight Rep Lifted (lbs)',
        borderColor: '#F44336',
        data: heaviestWeight,
      },
    ]

    const totalWeightDataset = [
      {
        label: 'Total Weight Lifted (lbs)',
        borderColor: '#FF9800',
        data: totalWeight,
      },
    ]

    const totalRepsDataset = [
      {
        label: 'Total Reps Completed',
        borderColor: '#4CAF50',
        data: totalReps,
      },
    ]

    const generatedReports = [] as GeneratedReport[]

    generatedReports.push({
      title: parent?.name,
      firstRecordDate: isoToDisplayDate(records[0]?.createdDate) || '-',
      lastRecordDate: isoToDisplayDate(records[records.length - 1]?.createdDate) || '-',
      chartLabels: records.map(() => ''),
      chartDatasets: heaviestWeightDataset,
    })

    generatedReports.push({
      title: parent?.name,
      firstRecordDate: isoToDisplayDate(records[0]?.createdDate) || '-',
      lastRecordDate: isoToDisplayDate(records[records.length - 1]?.createdDate) || '-',
      chartLabels: records.map(() => ''),
      chartDatasets: totalWeightDataset,
    })

    generatedReports.push({
      title: parent?.name,
      firstRecordDate: isoToDisplayDate(records[0]?.createdDate) || '-',
      lastRecordDate: isoToDisplayDate(records[records.length - 1]?.createdDate) || '-',
      chartLabels: records.map(() => ''),
      chartDatasets: totalRepsDataset,
    })

    return generatedReports
  }

  static async update(
    database: LocalDatabase,
    originalId: string,
    props: DatabaseObject
  ): Promise<void> {
    const { id, createdDate, name, exerciseTracks } = props
    await database.updateById(
      AppTable.EXERCISES,
      originalId,
      new Exercise({ id, createdDate, name, exerciseTracks })
    )
  }

  static async create(database: LocalDatabase, data: DatabaseObject): Promise<void> {
    const { id, createdDate, name, exerciseTracks } = data
    await database.add(AppTable.EXERCISES, new Exercise({ id, createdDate, name, exerciseTracks }))
  }

  static async getAll(database: LocalDatabase): Promise<Exercise[]> {
    return await database.getAll(AppTable.EXERCISES)
  }

  static getLabelSingular(): string {
    return 'Exercise'
  }

  static getLabelPlural(): string {
    return 'Exercises'
  }

  static getParentTable(): AppTable | null {
    return null
  }

  static getOperations(): Operation[] {
    return [
      Operation.CREATE,
      Operation.UPDATE,
      Operation.REPORT,
      Operation.DELETE,
      Operation.CLEAR,
      Operation.INSPECT,
    ]
  }

  static getVisibleColumns(): Field[] {
    return [Field.NAME, Field.EXERCISE_TRACKS]
  }

  static getFields(): Field[] {
    return [...Activity.getFields(), Field.EXERCISE_TRACKS]
  }

  static getFieldComponents(): any {
    return [
      ...Activity.getFieldComponents(),
      defineAsyncComponent(
        () => import('@/components/shared/operation-dialog/inputs/ExerciseTracksSelect.vue')
      ),
    ]
  }

  static getColumns(): DataTableProps[] {
    return [
      ...Activity.getColumns(),
      {
        name: Field.EXERCISE_TRACKS,
        label: 'Tracks',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.EXERCISE_TRACKS],
        format: (val: string) => val,
      },
    ]
  }
}
