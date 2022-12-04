<script setup lang="ts">
import { AppTable } from '@/constants/core/data-enums'
import { RouteName } from '@/constants/ui/routing-enums'
import type { ExerciseRecord } from '@/models/ExerciseRecord'
import type { WorkoutRecord } from '@/models/WorkoutRecord'
import { DB } from '@/services/LocalDatabase'
import { QPage } from 'quasar'
import { useLogger } from '@/use/useLogger'
import { useRouter } from 'vue-router'
import { useSimpleDialogs } from '@/use/useSimpleDialogs'
import { Icon } from '@/constants/ui/icon-enums'
import { NotifyColor } from '@/constants/ui/color-enums'
import ActiveExercisesList from '@/components/active-workout/ActiveExercisesList.vue'

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()
const router = useRouter()

async function finishWorkout(): Promise<void> {
  confirmDialog(
    'Finish Current Workout',
    'You you ready to finish and save this workout?',
    Icon.SAVE,
    NotifyColor.INFO,
    async (): Promise<void> => {
      try {
        const activeWorkoutRecord = (
          (await DB.getAll(AppTable.ACTIVE_WORKOUTS)) as WorkoutRecord[]
        )[0]
        const activeExerciseRecords = (await DB.getAll(
          AppTable.ACTIVE_EXERCISES
        )) as ExerciseRecord[]

        activeWorkoutRecord.finishedDate = new Date().toISOString() // DateTime NOW

        await DB.bulkAdd(AppTable.EXERCISE_RECORDS, activeExerciseRecords)
        await DB.add(AppTable.WORKOUT_RECORDS, activeWorkoutRecord)

        await DB.clear(AppTable.ACTIVE_EXERCISES)
        await DB.clear(AppTable.ACTIVE_WORKOUTS)

        router.push({ name: RouteName.DASHBOARD })
      } catch (error) {
        log.error('ActiveWorkoutPage:finishWorkout', error)
      }
    }
  )
}
</script>

<template>
  <QPage padding>
    <div class="row justify-center">
      <div class="col-12">
        <ActiveExercisesList />
      </div>
    </div>

    <div class="row justify-center q-mt-lg">
      <QBtn label="Finish Workout" color="positive" @click="finishWorkout()" />
    </div>
  </QPage>
</template>
