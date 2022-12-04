<script setup lang="ts">
import { QCard, QCardSection, QBtn } from 'quasar'
import { Icon } from '@/constants/ui/icon-enums'
import { AppTable, ExerciseTracks, Field, Operation } from '@/constants/core/data-enums'
import { useLogger } from '@/use/useLogger'
import { DB } from '@/services/LocalDatabase'
import useOperationDialogStore from '@/stores/operation-dialog'
import ActiveReminderSection from '@/components/active-workout/inputs/ActiveReminderSection.vue'
import ActiveSetInput from './inputs/ActiveSetInput.vue'

// Props & Emits
const props = defineProps<{
  name?: string
  tracks?: ExerciseTracks
  id?: string // For updating the active exercise record
  parentId?: string // For looking up the previous input value (if any)
}>()

const { log } = useLogger()
const operationDialogStore = useOperationDialogStore()

async function onReportDialog(): Promise<void> {
  try {
    const selectedItem = await DB.getFirstByField(AppTable.EXERCISES, Field.ID, props?.parentId)
    operationDialogStore.openDialog(AppTable.EXERCISES, Operation.REPORT, selectedItem)
  } catch (error) {
    log.error('ActiveExerciseCard:onReportDialog', error)
  }
}
</script>

<template>
  <QCard class="q-mb-md">
    <ActiveReminderSection v-if="tracks === ExerciseTracks.REMINDER_ONLY" :exerciseName="name" />

    <div v-else>
      <QCardSection class="q-py-sm">
        <div class="text-h6 q-mb-sm">{{ name }}</div>

        <QBtn
          round
          flat
          :icon="Icon.REPORT"
          class="absolute-top-right q-ma-sm"
          @click="onReportDialog()"
        />
      </QCardSection>

      <ActiveSetInput :activeExerciseRecordId="id" :activeExerciseRecordparentId="parentId" />
    </div>
  </QCard>
</template>
