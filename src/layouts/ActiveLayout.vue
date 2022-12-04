<script setup lang="ts">
import {
  QLayout,
  QPageContainer,
  QHeader,
  QToolbar,
  QToolbarTitle,
  QFooter,
  QSpace,
  QIcon,
} from 'quasar'
import { type Ref, ref, watch, onMounted } from 'vue'
import { RouteName } from '@/constants/ui/routing-enums'
import { Icon } from '@/constants/ui/icon-enums'
import { getDurationFromMilliseconds } from '@/utils/common'
import { useInterval } from '@vueuse/core'
import { DB } from '@/services/LocalDatabase'
import { AppTable, Field } from '@/constants/core/data-enums'
import type { WorkoutRecord } from '@/models/WorkoutRecord'
import type { Workout } from '@/models/Workout'
import { useLogger } from '@/use/useLogger'

const { log } = useLogger()

const counter = useInterval(1000)
const createdDate: Ref<number> = ref(0)
const duration: Ref<string> = ref('-')
const workoutName: Ref<string> = ref('')

onMounted(async () => {
  try {
    const activeWorkoutRecord = (await DB.getAll(AppTable.ACTIVE_WORKOUTS))[0] as WorkoutRecord

    if (activeWorkoutRecord?.parentId) {
      const workout = (await DB.getFirstByField(
        AppTable.WORKOUTS,
        Field.ID,
        activeWorkoutRecord?.parentId
      )) as Workout

      workoutName.value = workout?.name
      createdDate.value = new Date(activeWorkoutRecord.createdDate).getTime()
    }
  } catch (error) {
    log.error('ActiveLayout:onMounted', error)
  }
})

watch(counter, () => {
  const now = new Date().getTime()
  duration.value = getDurationFromMilliseconds(now - createdDate.value)
})
</script>

<template>
  <QLayout view="hHh LpR fFf">
    <QHeader elevated>
      <QToolbar>
        <QToolbarTitle>{{ workoutName }}</QToolbarTitle>
        <QBtn flat dense :to="{ name: RouteName.DASHBOARD }" :icon="Icon.RETURN_TO_DASHBOARD" />
      </QToolbar>
    </QHeader>

    <QPageContainer>
      <router-view />
    </QPageContainer>

    <QFooter elevated class="bg-primary">
      <QToolbar>
        <QSpace />

        <QIcon :name="Icon.TIMER" size="sm" class="q-mr-sm" />
        <div class="text-h6">{{ duration }}</div>

        <QSpace />
      </QToolbar>
    </QFooter>
  </QLayout>
</template>
