<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { DB } from '@/services/LocalDatabase'
import { useLogger } from '@/use/useLogger'
import type { ExerciseRecord } from '@/models/ExerciseRecord'
import { AppTable, ExerciseTracks, Field } from '@/constants/core/data-enums'
import type { Exercise } from '@/models/Exercise'
import type { WorkoutRecord } from '@/models/WorkoutRecord'
import ActiveExerciseCard from './ActiveExerciseCard.vue'

const { log } = useLogger()
const activeExerciseRecords: Ref<ExerciseRecord[]> = ref([])
const activeExercises: Ref<Exercise[]> = ref([])

onMounted(async () => {
  try {
    const activeWorkoutRecord = (await DB.getAll(AppTable.ACTIVE_WORKOUTS))[0] as WorkoutRecord

    activeExerciseRecords.value = await Promise.all(
      activeWorkoutRecord?.exerciseRecordIds.map(async (id: string) => {
        return (await DB.getFirstByField(AppTable.ACTIVE_EXERCISES, Field.ID, id)) as ExerciseRecord
      })
    )

    const exercises = await Promise.all(
      activeExerciseRecords.value.map(async (r: any) => {
        return (await DB.getFirstByField(AppTable.EXERCISES, Field.ID, r.parentId)) as Exercise
      })
    )
    activeExercises.value = exercises
  } catch (error) {
    log.error('ActiveExercisesList:onMounted', error)
  }
})

function getExerciseName(parentId: string): string | undefined {
  return activeExercises.value.find((e: any) => e.id === parentId)?.name
}

function getExerciseTracks(parentId: string): ExerciseTracks | undefined {
  return activeExercises.value.find((e: any) => e.id === parentId)?.exerciseTracks
}
</script>

<template>
  <div v-for="record in activeExerciseRecords" :key="record.id" class="col-sm-6 col-xs-12">
    <ActiveExerciseCard
      :name="getExerciseName(record.parentId)"
      :tracks="getExerciseTracks(record.parentId)"
      :id="record.id"
      :parentId="record.parentId"
    />
  </div>
</template>
