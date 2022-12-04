import type { DataTableProps } from '@/constants/types-interfaces'
import { AppTable, Field, Operation } from '@/constants/core/data-enums'
import { Measurement } from '@/models/Measurement'
import { MeasurementRecord } from '@/models/MeasurementRecord'
import { Log } from '@/models/__Log'
import { Setting } from '@/models/__Setting'
import { Workout } from '@/models/Workout'
import { WorkoutRecord } from '@/models/WorkoutRecord'
import { Exercise } from '@/models/Exercise'
import { ExerciseRecord } from '@/models/ExerciseRecord'

export const TableHelper = {
  getFields(table: AppTable): Field[] {
    return {
      [AppTable.ACTIVE_WORKOUTS]: [],
      [AppTable.ACTIVE_EXERCISES]: [],
      [AppTable.EXERCISES]: Exercise.getFields(),
      [AppTable.EXERCISE_RECORDS]: ExerciseRecord.getFields(),
      [AppTable.WORKOUTS]: Workout.getFields(),
      [AppTable.WORKOUT_RECORDS]: WorkoutRecord.getFields(),
      [AppTable.MEASUREMENTS]: Measurement.getFields(),
      [AppTable.MEASUREMENT_RECORDS]: MeasurementRecord.getFields(),
      [AppTable.LOGS]: Log.getFields(),
      [AppTable.SETTINGS]: Setting.getFields(),
    }[table]
  },

  getComponents(table: AppTable): any[] {
    return {
      [AppTable.ACTIVE_WORKOUTS]: [],
      [AppTable.ACTIVE_EXERCISES]: [],
      [AppTable.EXERCISES]: Exercise.getFieldComponents(),
      [AppTable.EXERCISE_RECORDS]: ExerciseRecord.getFieldComponents(),
      [AppTable.WORKOUTS]: Workout.getFieldComponents(),
      [AppTable.WORKOUT_RECORDS]: WorkoutRecord.getFieldComponents(),
      [AppTable.MEASUREMENTS]: Measurement.getFieldComponents(),
      [AppTable.MEASUREMENT_RECORDS]: MeasurementRecord.getFieldComponents(),
      [AppTable.LOGS]: Log.getFieldComponents(),
      [AppTable.SETTINGS]: Setting.getFieldComponents(),
    }[table]
  },

  getColumns(table: AppTable): DataTableProps[] {
    return {
      [AppTable.ACTIVE_WORKOUTS]: [],
      [AppTable.ACTIVE_EXERCISES]: [],
      [AppTable.EXERCISES]: Exercise.getColumns(),
      [AppTable.EXERCISE_RECORDS]: ExerciseRecord.getColumns(),
      [AppTable.WORKOUTS]: Workout.getColumns(),
      [AppTable.WORKOUT_RECORDS]: WorkoutRecord.getColumns(),
      [AppTable.MEASUREMENTS]: Measurement.getColumns(),
      [AppTable.MEASUREMENT_RECORDS]: MeasurementRecord.getColumns(),
      [AppTable.LOGS]: Log.getColumns(),
      [AppTable.SETTINGS]: Setting.getColumns(),
    }[table]
  },

  getVisibleColumns(table: AppTable): Field[] {
    return {
      [AppTable.ACTIVE_WORKOUTS]: [],
      [AppTable.ACTIVE_EXERCISES]: [],
      [AppTable.EXERCISES]: Exercise.getVisibleColumns(),
      [AppTable.EXERCISE_RECORDS]: ExerciseRecord.getVisibleColumns(),
      [AppTable.WORKOUTS]: Workout.getVisibleColumns(),
      [AppTable.WORKOUT_RECORDS]: WorkoutRecord.getVisibleColumns(),
      [AppTable.MEASUREMENTS]: Measurement.getVisibleColumns(),
      [AppTable.MEASUREMENT_RECORDS]: MeasurementRecord.getVisibleColumns(),
      [AppTable.LOGS]: Log.getVisibleColumns(),
      [AppTable.SETTINGS]: Setting.getVisibleColumns(),
    }[table]
  },

  getOperations(table: AppTable): Operation[] {
    return {
      [AppTable.ACTIVE_WORKOUTS]: [],
      [AppTable.ACTIVE_EXERCISES]: [],
      [AppTable.EXERCISES]: Exercise.getOperations(),
      [AppTable.EXERCISE_RECORDS]: ExerciseRecord.getOperations(),
      [AppTable.WORKOUTS]: Workout.getOperations(),
      [AppTable.WORKOUT_RECORDS]: WorkoutRecord.getOperations(),
      [AppTable.MEASUREMENTS]: Measurement.getOperations(),
      [AppTable.MEASUREMENT_RECORDS]: MeasurementRecord.getOperations(),
      [AppTable.LOGS]: Log.getOperations(),
      [AppTable.SETTINGS]: Setting.getOperations(),
    }[table]
  },

  getParentTable(table: AppTable): AppTable | null {
    return {
      [AppTable.ACTIVE_WORKOUTS]: null,
      [AppTable.ACTIVE_EXERCISES]: null,
      [AppTable.EXERCISES]: Exercise.getParentTable(),
      [AppTable.EXERCISE_RECORDS]: ExerciseRecord.getParentTable(),
      [AppTable.WORKOUTS]: Workout.getParentTable(),
      [AppTable.WORKOUT_RECORDS]: WorkoutRecord.getParentTable(),
      [AppTable.MEASUREMENTS]: Measurement.getParentTable(),
      [AppTable.MEASUREMENT_RECORDS]: MeasurementRecord.getParentTable(),
      [AppTable.LOGS]: Log.getParentTable(),
      [AppTable.SETTINGS]: Setting.getParentTable(),
    }[table]
  },

  getLabelPlural(table: AppTable): string {
    return {
      [AppTable.ACTIVE_WORKOUTS]: '',
      [AppTable.ACTIVE_EXERCISES]: '',
      [AppTable.EXERCISES]: Exercise.getLabelPlural(),
      [AppTable.EXERCISE_RECORDS]: ExerciseRecord.getLabelPlural(),
      [AppTable.WORKOUTS]: Workout.getLabelPlural(),
      [AppTable.WORKOUT_RECORDS]: WorkoutRecord.getLabelPlural(),
      [AppTable.MEASUREMENTS]: Measurement.getLabelPlural(),
      [AppTable.MEASUREMENT_RECORDS]: MeasurementRecord.getLabelPlural(),
      [AppTable.LOGS]: Log.getLabelPlural(),
      [AppTable.SETTINGS]: Setting.getLabelPlural(),
    }[table]
  },

  getLabelSingular(table: AppTable): string {
    return {
      [AppTable.ACTIVE_WORKOUTS]: '',
      [AppTable.ACTIVE_EXERCISES]: '',
      [AppTable.EXERCISES]: Exercise.getLabelSingular(),
      [AppTable.EXERCISE_RECORDS]: ExerciseRecord.getLabelSingular(),
      [AppTable.WORKOUTS]: Workout.getLabelSingular(),
      [AppTable.WORKOUT_RECORDS]: WorkoutRecord.getLabelSingular(),
      [AppTable.MEASUREMENTS]: Measurement.getLabelSingular(),
      [AppTable.MEASUREMENT_RECORDS]: MeasurementRecord.getLabelSingular(),
      [AppTable.LOGS]: Log.getLabelSingular(),
      [AppTable.SETTINGS]: Setting.getLabelSingular(),
    }[table]
  },
}
