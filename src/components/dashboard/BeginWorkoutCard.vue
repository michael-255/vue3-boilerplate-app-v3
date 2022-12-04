<script setup lang="ts">
import type { DatabaseObject } from '@/constants/types-interfaces'
import { QBadge, QCard, QCardSection, QBtn, QIcon } from 'quasar'
import { Icon } from '@/constants/ui/icon-enums'
import { getDurationFromMilliseconds, isoToDisplayDate, uuid } from '@/utils/common'
import { useTimeAgo } from '@vueuse/core'
import { onUpdated, ref, type Ref } from 'vue'
import { AppTable, Field, Operation } from '@/constants/core/data-enums'
import { useLogger } from '@/use/useLogger'
import { DB } from '@/services/LocalDatabase'
import { RouteName } from '@/constants/ui/routing-enums'
import { useRouter } from 'vue-router'
import { WorkoutRecord } from '@/models/WorkoutRecord'
import type { Workout } from '@/models/Workout'
import { ExerciseRecord } from '@/models/ExerciseRecord'
import { useSimpleDialogs } from '@/use/useSimpleDialogs'
import { NotifyColor } from '@/constants/ui/color-enums'
import useOperationDialogStore from '@/stores/operation-dialog'

// Props & Emits
const props = defineProps<{
  beginWorkoutCard: DatabaseObject
}>()

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()
const router = useRouter()
const operationDialogStore = useOperationDialogStore()

// These ensure a live update of the time since the last record
const previousCreatedDateRef = ref(new Date(props.beginWorkoutCard?.previousCreatedDate || '')) // Ref of the date
const timeAgo = useTimeAgo(previousCreatedDateRef) // Tracks the ref
const workoutDuration: Ref<string> = ref('-')

onUpdated(() => {
  previousCreatedDateRef.value = new Date(props.beginWorkoutCard?.previousCreatedDate || '')
  workoutDuration.value = calculateDuration()
})

async function onReportDialog(): Promise<void> {
  try {
    const selectedItem = await DB.getFirstByField(
      AppTable.WORKOUTS,
      Field.ID,
      props.beginWorkoutCard?.id
    )
    operationDialogStore.openDialog(AppTable.WORKOUTS, Operation.REPORT, selectedItem)
  } catch (error) {
    log.error('BeginWorkoutCard:onReportDialog', error)
  }
}

function calculateDuration(): string {
  const started = new Date(props.beginWorkoutCard?.previousCreatedDate || '').getTime()
  const finished = new Date(props.beginWorkoutCard?.previousFinishedDate || '').getTime()

  const milliseconds = finished - started
  const duration = getDurationFromMilliseconds(milliseconds)

  return duration
}

async function beginWorkout(): Promise<void> {
  // Check if an active workout already exists
  const activeWorkout = await DB.getAll(AppTable.ACTIVE_WORKOUTS)

  if (activeWorkout && activeWorkout[0]) {
    // Replace the current active workout
    confirmDialog(
      'Replace Current Workout',
      'You have a workout that is currently in progress. Do you want to replace it?',
      Icon.RENEW,
      NotifyColor.WARN,
      async (): Promise<void> => {
        try {
          await createActiveWorkout()
          router.push({ name: RouteName.ACTIVE_WORKOUT })
        } catch (error) {
          log.error('BeginWorkoutCard:beginWorkout', error)
        }
      }
    )
  } else {
    // Create an active workout
    await createActiveWorkout()
    router.push({ name: RouteName.ACTIVE_WORKOUT })
  }
}

async function createActiveWorkout(): Promise<void> {
  await DB.clear(AppTable.ACTIVE_WORKOUTS)
  await DB.clear(AppTable.ACTIVE_EXERCISES)

  const parentWorkout = (await DB.getFirstByField(
    AppTable.WORKOUTS,
    Field.ID,
    props.beginWorkoutCard?.id
  )) as Workout

  const parentExercises = await Promise.all(
    parentWorkout.exerciseIds.map(async (id: string) => {
      return await DB.getFirstByField(AppTable.EXERCISES, Field.ID, id)
    })
  )

  const activeExercises = parentExercises.map((exercise: any) => {
    return new ExerciseRecord({
      id: uuid(),
      createdDate: new Date().toISOString(),
      parentId: exercise.id,
      weight: [],
      reps: [],
    })
  })

  const activeWorkout = new WorkoutRecord({
    id: uuid(),
    createdDate: new Date().toISOString(),
    parentId: parentWorkout.id,
    finishedDate: '',
    exerciseRecordIds: activeExercises.map((e: any) => e.id),
  })

  await DB.add(AppTable.ACTIVE_WORKOUTS, activeWorkout)
  await DB.bulkAdd(AppTable.ACTIVE_EXERCISES, activeExercises)
}
</script>

<template>
  <QCard>
    <QCardSection class="q-pt-sm">
      <div class="text-h6 q-mb-sm">{{ beginWorkoutCard?.name }}</div>

      <QBtn
        round
        flat
        :icon="Icon.REPORT"
        class="absolute-top-right q-ma-sm"
        @click="onReportDialog()"
      />

      <div>
        <QBadge class="q-py-xs q-mb-xs" rounded color="grey-9" :label="timeAgo || 'never'" />
      </div>

      <div>
        <QIcon :name="Icon.CALENDAR_CHECK" />
        <span class="text-caption q-ml-xs">
          {{ isoToDisplayDate(beginWorkoutCard?.previousCreatedDate) || '-' }}
        </span>
      </div>

      <div>
        <QIcon :name="Icon.TIMER" />
        <span class="text-caption q-ml-xs"> {{ workoutDuration || '-' }} </span>
      </div>

      <QBtn color="primary" class="full-width q-mt-md" label="Begin" @click="beginWorkout()" />
    </QCardSection>
  </QCard>
</template>
