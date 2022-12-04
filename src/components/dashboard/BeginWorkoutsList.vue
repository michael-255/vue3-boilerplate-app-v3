<script setup lang="ts">
import { onMounted } from 'vue'
import { DB } from '@/services/LocalDatabase'
import { useLogger } from '@/use/useLogger'
import useBeginWorkouts from '@/stores/begin-workouts'
import BeginWorkoutCard from '@/components/dashboard/BeginWorkoutCard.vue'

const { log } = useLogger()
const beginWorkoutsStore = useBeginWorkouts()

onMounted(async () => {
  try {
    await beginWorkoutsStore.updateBeginWorkoutCards(DB)
  } catch (error) {
    log.error('BeginWorkoutsList:onMounted', error)
  }
})
</script>

<template>
  <div
    v-for="beginWorkoutCard in beginWorkoutsStore.beginWorkoutCards"
    :key="beginWorkoutCard.id"
    class="col-sm-6 col-xs-12"
  >
    <BeginWorkoutCard :beginWorkoutCard="beginWorkoutCard" />
  </div>
</template>
