import { defineStore, type StoreDefinition } from 'pinia'
import type { DatabaseObject } from '@/constants/types-interfaces'
import type { LocalDatabase } from '@/services/LocalDatabase'
import { AppTable, Field } from '@/constants/core/data-enums'
import type { Workout } from '@/models/Workout'
import type { WorkoutRecord } from '@/models/WorkoutRecord'

const useBeginWorkoutsStore: StoreDefinition = defineStore({
  id: 'begin-workouts',

  state: () => ({
    beginWorkoutCards: [] as DatabaseObject[],
  }),

  actions: {
    async updateBeginWorkoutCards(database: LocalDatabase): Promise<void> {
      // Workouts
      const workouts = (await database.getAll(AppTable.WORKOUTS)).sort((a: any, b: any) => {
        return a.name.localeCompare(b.name)
      }) as Workout[]

      // Workout Card Objects
      this.beginWorkoutCards = await Promise.all(
        // Recent Workout Records
        workouts.map(async (workout: Workout) => {
          // Get most recent Workout Record (if any)
          const workoutRecord = (await database.getNewestByField(
            AppTable.WORKOUT_RECORDS,
            Field.PARENT_ID,
            workout.id
          )) as WorkoutRecord

          return {
            id: workout.id,
            name: workout.name,
            previousCreatedDate: workoutRecord?.createdDate,
            previousFinishedDate: workoutRecord?.finishedDate,
          }
        })
      )
    },
  },
})

export default useBeginWorkoutsStore
