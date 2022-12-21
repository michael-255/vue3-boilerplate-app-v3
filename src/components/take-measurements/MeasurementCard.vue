<script setup lang="ts">
import { QBadge, QCard, QCardSection, QBtn, QIcon } from 'quasar'
import { getDateFromTimestamp } from '@/utils/common'
import { useTimeAgo } from '@vueuse/core'
import { Icon } from '@/constants/app'
import { ref } from 'vue'
import type { MeasurementCard } from '@/use/useDBMeasurements'
import useLogger from '@/use/useLogger'
import SaveMeasurementInput from './SaveMeasurementInput.vue'
// import useOperationDialogStore from '@/stores/operation-dialog'
// import { onUpdated, ref } from 'vue'

// Props & Emits
const props = defineProps<{
  measurementCard: MeasurementCard
}>()

const { log } = useLogger()
// const operationDialogStore = useOperationDialogStore()

// The ref is needed for live updates.
// The blank string is needed if the value is undefined.
const previousTimeOrBlank = ref(props.measurementCard?.createdTimestamp || '')
const timeAgo = useTimeAgo(previousTimeOrBlank) // Updates on ref changes

// onUpdated(() => {
//   previousCreatedDateRef.value = new Date(props.measurementCard?.previousCreatedDate || '')
// })

async function onReportDialog(): Promise<void> {
  // try {
  //   const selectedItem = await DB.getFirstByField(
  //     AppTable.MEASUREMENTS,
  //     Field.ID,
  //     props.measurementCard?.id
  //   )
  //   operationDialogStore.openDialog(AppTable.MEASUREMENTS, Operation.REPORT, selectedItem)
  // } catch (error) {
  //   log.error('TakeMeasurementCard:onReportDialog', error)
  // }
}
</script>

<template>
  <QCard>
    <QCardSection>
      <div class="text-h6 q-mb-md">{{ measurementCard?.name }}</div>

      <QBtn
        round
        flat
        :icon="Icon.REPORT"
        class="absolute-top-right q-ma-sm"
        @click="onReportDialog()"
      />

      <div>
        <QBadge class="q-py-xs q-mb-xs" rounded color="grey-9" :label="timeAgo || 'Never'" />
      </div>

      <div>
        <QIcon :name="Icon.CALENDAR_CHECK" />
        <span class="text-caption q-ml-xs">
          {{ getDateFromTimestamp(measurementCard?.createdTimestamp) || 'No previous record' }}
        </span>
      </div>

      <div>
        <QIcon :name="Icon.MEASUREMENTS" />
        <span class="text-caption q-ml-xs">
          {{ measurementCard?.measurementValues }}
          {{ measurementCard?.measurementInputs }}
        </span>
      </div>

      <SaveMeasurementInput
        :measurementId="measurementCard?.id"
        :measurementName="measurementCard?.name"
        :measurementInputs="measurementCard?.measurementInputs"
        :cardInputs="measurementCard?.cardInputs"
      />
    </QCardSection>
  </QCard>
</template>
