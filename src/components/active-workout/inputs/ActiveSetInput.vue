<script setup lang="ts">
import { QBtn, QSpace, QCardSection, QSeparator } from 'quasar'
import { useSimpleDialogs } from '@/use/useSimpleDialogs'
import { useLogger } from '@/use/useLogger'
import { Icon } from '@/constants/ui/icon-enums'
import { NotifyColor } from '@/constants/ui/color-enums'
import { onMounted, ref, type Ref } from 'vue'
import { AppTable, Field } from '@/constants/core/data-enums'
import { DB } from '@/services/LocalDatabase'
import type { ExerciseRecord } from '@/models/ExerciseRecord'
import ActiveWeightRepsItems from '@/components/active-workout/inputs/ActiveWeightRepsItems.vue'

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()

// Props & Emits
const props = defineProps<{
  activeExerciseRecordId?: string
  activeExerciseRecordparentId?: string
}>()

const activeWeight: Ref<(number | undefined)[]> = ref([])
const activeReps: Ref<(number | undefined)[]> = ref([])

const weightHints: Ref<string[]> = ref([])
const repHints: Ref<string[]> = ref([])

const setLimit = 20 // Not allowing more then 20 sets ATM

onMounted(async () => {
  try {
    const activeExerciseRecord = (await DB.getFirstByField(
      AppTable.ACTIVE_EXERCISES,
      Field.ID,
      props.activeExerciseRecordId
    )) as ExerciseRecord

    activeWeight.value = activeExerciseRecord?.weight || []
    activeReps.value = activeExerciseRecord?.reps || []

    if (props.activeExerciseRecordId) {
      const newestRecord = (await DB.getNewestByField(
        AppTable.EXERCISE_RECORDS,
        Field.PARENT_ID,
        props.activeExerciseRecordparentId
      )) as ExerciseRecord

      weightHints.value = newestRecord?.weight?.map((w: number) => String(w || '-')) || []
      repHints.value = newestRecord?.reps?.map((r: number) => String(r || '-')) || []

      const previousRecords = (await DB.getAllReversedByField(
        AppTable.EXERCISE_RECORDS,
        Field.PARENT_ID,
        props.activeExerciseRecordparentId
      )) as ExerciseRecord[]

      weightHints.value[0] = getSet1WeightHint(previousRecords)
    }

    // Add at least 1 set
    if (activeReps.value.length === 0) {
      addSet()
    }
  } catch (error) {
    log.error('ActiveSetInput:onMounted', error)
  }
})

function getSet1WeightHint(previousRecords: ExerciseRecord[]): string {
  const previousSet1Weight_1 = previousRecords[0]?.weight?.[0]
  const previousSet1Weight_2 = previousRecords[1]?.weight?.[0]
  const previousSet1Weight_3 = previousRecords[2]?.weight?.[0]
  const previousSet1Weight_4 = previousRecords[3]?.weight?.[0]
  const previousSet1Weight_5 = previousRecords[4]?.weight?.[0]
  const previousSet1Weight_6 = previousRecords[5]?.weight?.[0]

  let firstStr = '-'
  let incrementStr = ''

  if (previousSet1Weight_1) {
    firstStr = `${previousSet1Weight_1}`

    if (previousSet1Weight_2) {
      incrementStr = `${previousSet1Weight_1 - previousSet1Weight_2}`

      if (previousSet1Weight_3) {
        incrementStr = `${incrementStr}, ${previousSet1Weight_2 - previousSet1Weight_3}`

        if (previousSet1Weight_4) {
          incrementStr = `${incrementStr}, ${previousSet1Weight_3 - previousSet1Weight_4}`

          if (previousSet1Weight_5) {
            incrementStr = `${incrementStr}, ${previousSet1Weight_4 - previousSet1Weight_5}`

            if (previousSet1Weight_6) {
              incrementStr = `${incrementStr}, ${previousSet1Weight_5 - previousSet1Weight_6}`
            }
          }
        }
      }
    }
  }

  if (incrementStr !== '') {
    return `${firstStr} --- ${incrementStr}`
  } else {
    return firstStr
  }
}

function addSet(): void {
  activeWeight.value.push(undefined)
  activeReps.value.push(undefined)
}

function removeSet(): void {
  confirmDialog(
    'Remove Set',
    'Are you sure you want to remove the last set?',
    Icon.DELETE,
    NotifyColor.ERROR,
    () => {
      activeWeight.value.pop()
      activeReps.value.pop()
    }
  )
}
</script>

<template>
  <QCardSection class="row items-start q-py-sm">
    <div class="text-h6">Sets</div>

    <QSpace />
    <!-- Check length on one of the set properties -->
    <QBtn
      :disable="activeReps.length >= setLimit"
      round
      color="positive"
      size="sm"
      :icon="Icon.ADD"
      @click="addSet()"
    />
  </QCardSection>

  <QSeparator />

  <QCardSection class="q-gutter-md row items-start q-py-none">
    <div class="text-caption">#</div>
    <QSeparator vertical />
    <div class="text-caption col">Weight</div>
    <QSeparator vertical />
    <div class="text-caption col">Reps</div>
  </QCardSection>

  <QSeparator />

  <QCardSection>
    <div v-for="(x, index) in activeReps" :key="index" class="q-gutter-md row items-start q-mb-sm">
      <div class="text-bold q-mt-lg">{{ index + 1 }}</div>

      <ActiveWeightRepsItems
        :index="index"
        :weight="activeWeight[index]"
        :reps="activeReps[index]"
        :activeExerciseRecordId="activeExerciseRecordId"
        :weightHint="weightHints[index] || '-'"
        :repsHint="repHints[index] || '-'"
      />
    </div>

    <div align="right">
      <QBtn
        :disable="!activeReps.length"
        round
        color="negative"
        size="sm"
        :icon="Icon.REMOVE"
        @click="removeSet()"
      />
    </div>
  </QCardSection>
</template>
