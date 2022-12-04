import Dexie, { type Table } from 'dexie'
import { Log, type ILog } from '@/models/__Log'
import { Setting, type ISetting } from '@/models/__Setting'
import { Measurement, type IMeasurement } from '@/models/Measurement'
import { MeasurementRecord, type IMeasurementRecord } from '@/models/MeasurementRecord'
import { AppTable, Field } from '@/constants/core/data-enums'
import { Exercise, type IExercise } from '@/models/Exercise'
import { ExerciseRecord, type IExerciseRecord } from '@/models/ExerciseRecord'
import { Workout, type IWorkout } from '@/models/Workout'
import { WorkoutRecord, type IWorkoutRecord } from '@/models/WorkoutRecord'

/**
 * Wrapper for Dexie IndexedDB
 * @param name Database name
 */
export class DexieWrapper extends Dexie {
  // Information for the typing system to help Dexie out
  // REQUIRED
  [AppTable.ACTIVE_WORKOUTS]!: Table<IWorkoutRecord>;
  [AppTable.ACTIVE_EXERCISES]!: Table<IExerciseRecord>;
  [AppTable.EXERCISES]!: Table<IExercise>;
  [AppTable.EXERCISE_RECORDS]!: Table<IExerciseRecord>;
  [AppTable.WORKOUTS]!: Table<IWorkout>;
  [AppTable.WORKOUT_RECORDS]!: Table<IWorkoutRecord>;
  [AppTable.MEASUREMENTS]!: Table<IMeasurement>;
  [AppTable.MEASUREMENT_RECORDS]!: Table<IMeasurementRecord>;
  [AppTable.LOGS]!: Table<ILog>;
  [AppTable.SETTINGS]!: Table<ISetting>

  constructor(name: string) {
    super(name)

    this.version(1).stores({
      // REQUIRED
      [AppTable.ACTIVE_WORKOUTS]: `&${Field.ID}, ${Field.PARENT_ID}`,
      [AppTable.ACTIVE_EXERCISES]: `&${Field.ID}, ${Field.PARENT_ID}`,
      [AppTable.EXERCISES]: `&${Field.ID}`,
      [AppTable.EXERCISE_RECORDS]: `&${Field.ID}, ${Field.PARENT_ID}`,
      [AppTable.WORKOUTS]: `&${Field.ID}`,
      [AppTable.WORKOUT_RECORDS]: `&${Field.ID}, ${Field.PARENT_ID}`,
      [AppTable.MEASUREMENTS]: `&${Field.ID}`,
      [AppTable.MEASUREMENT_RECORDS]: `&${Field.ID}, ${Field.PARENT_ID}`,
      [AppTable.LOGS]: `&${Field.ID}`,
      [AppTable.SETTINGS]: `&${Field.ID}`,
    })

    // REQUIRED
    this[AppTable.ACTIVE_WORKOUTS].mapToClass(WorkoutRecord)
    this[AppTable.ACTIVE_EXERCISES].mapToClass(ExerciseRecord)
    this[AppTable.EXERCISES].mapToClass(Exercise)
    this[AppTable.EXERCISE_RECORDS].mapToClass(ExerciseRecord)
    this[AppTable.WORKOUTS].mapToClass(Workout)
    this[AppTable.WORKOUT_RECORDS].mapToClass(WorkoutRecord)
    this[AppTable.MEASUREMENTS].mapToClass(Measurement)
    this[AppTable.MEASUREMENT_RECORDS].mapToClass(MeasurementRecord)
    this[AppTable.LOGS].mapToClass(Log)
    this[AppTable.SETTINGS].mapToClass(Setting)
  }
}
