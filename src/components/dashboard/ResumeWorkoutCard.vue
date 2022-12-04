<script setup lang="ts">
import { QBadge, QCard, QCardSection, QBtn, QIcon } from 'quasar'
import { isoToDisplayDate } from '@/utils/common'
import { useTimeAgo } from '@vueuse/core'
import { onMounted, onUpdated, ref, type Ref } from 'vue'
import { AppTable, Field } from '@/constants/core/data-enums'
import { DB } from '@/services/LocalDatabase'
import type { WorkoutRecord } from '@/models/WorkoutRecord'
import { Icon } from '@/constants/ui/icon-enums'
import { NotifyColor } from '@/constants/ui/color-enums'
import type { Workout } from '@/models/Workout'
import { useLogger } from '@/use/useLogger'
import { useRouter } from 'vue-router'
import { useSimpleDialogs } from '@/use/useSimpleDialogs'
import { RouteName } from '@/constants/ui/routing-enums'

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()
const router = useRouter()

// These ensure a live update of the time since the last record
const previousCreatedDateRef = ref(new Date('')) // Ref of the date
const timeAgo = useTimeAgo(previousCreatedDateRef) // Tracks the ref
const activeWorkoutRecord: Ref<WorkoutRecord | null> = ref(null)
const workoutName: Ref<string> = ref('')

onUpdated(async () => {
  const record = (await DB.getAll(AppTable.ACTIVE_WORKOUTS))[0] as WorkoutRecord
  previousCreatedDateRef.value = new Date(record?.createdDate || '')
})

onMounted(async () => {
  try {
    activeWorkoutRecord.value = (await DB.getAll(AppTable.ACTIVE_WORKOUTS))[0] as WorkoutRecord

    if (activeWorkoutRecord.value?.parentId) {
      const workout = (await DB.getFirstByField(
        AppTable.WORKOUTS,
        Field.ID,
        activeWorkoutRecord.value?.parentId
      )) as Workout

      workoutName.value = workout?.name
    }
  } catch (error) {
    log.error('ResumeWorkoutCard:onMounted', error)
  }
})

async function deleteActiveWorkout(): Promise<void> {
  confirmDialog(
    'Delete Active Workout',
    'Do you want to delete the currently active workout?',
    Icon.DELETE,
    NotifyColor.ERROR,
    async (): Promise<void> => {
      try {
        await DB.clear(AppTable.ACTIVE_WORKOUTS)
        await DB.clear(AppTable.ACTIVE_EXERCISES)
        activeWorkoutRecord.value = null
      } catch (error) {
        log.error('ResumeWorkoutCarde:deleteActiveWorkout', error)
      }
    }
  )
}

function resumeWorkout(): void {
  router.push({ name: RouteName.ACTIVE_WORKOUT })
}
</script>

<template>
  <div v-if="activeWorkoutRecord" class="col-sm-6 col-xs-12">
    <QCard>
      <QCardSection class="q-pt-sm">
        <div class="text-h6 q-mb-sm">{{ workoutName }}</div>

        <QBtn
          round
          flat
          icon="delete_forever"
          color="negative"
          class="absolute-top-right q-ma-sm"
          @click="deleteActiveWorkout()"
        />

        <div>
          <QBadge class="q-py-xs q-mb-xs" rounded color="grey-9" :label="timeAgo || 'never'" />
        </div>

        <div>
          <QIcon name="start" />
          <span class="text-caption q-ml-xs">
            {{ isoToDisplayDate(activeWorkoutRecord?.createdDate) || '-' }}
          </span>
        </div>

        <div>
          <QIcon name="directions_run" />
          <span class="text-caption q-ml-xs">In progress workout</span>
        </div>

        <QBtn color="positive" class="full-width q-mt-md" label="Resume" @click="resumeWorkout()" />
      </QCardSection>
    </QCard>
  </div>
</template>
