<script setup lang="ts">
import { QInput } from 'quasar'
import { ref, type Ref } from 'vue'
import { isNonNegitiveNumber } from '@/utils/validators'
import { DB } from '@/services/LocalDatabase'
import { AppTable, Field } from '@/constants/core/data-enums'
import type { ExerciseRecord } from '@/models/ExerciseRecord'

// Props & Emits
const props = defineProps<{
  index: number
  weight?: number
  reps?: number
  activeExerciseRecordId?: string
  weightHint: string
  repsHint: string
}>()

const weightInputRef: Ref<any> = ref(null)
const repsInputRef: Ref<any> = ref(null)

const weightModel: Ref<number | undefined> = ref(props.weight)
const repsModel: Ref<number | undefined> = ref(props.reps)

const rulesMessage = 'Invalid'

async function updateSet(): Promise<void> {
  if (props.activeExerciseRecordId) {
    const activeExerciseRecord = (await DB.getFirstByField(
      AppTable.ACTIVE_EXERCISES,
      Field.ID,
      props.activeExerciseRecordId
    )) as ExerciseRecord

    const activeWeight = activeExerciseRecord?.weight || []
    const activeReps = activeExerciseRecord?.reps || []

    activeWeight[props.index] = weightModel.value || 0
    activeReps[props.index] = repsModel.value || 0

    await DB.updateById(AppTable.ACTIVE_EXERCISES, props.activeExerciseRecordId, {
      weight: [...activeWeight],
      reps: [...activeReps],
    })
  }

  validateInputs()
}

function validateInputs(): void {
  weightInputRef?.value?.validate()
  repsInputRef?.value?.validate()
}
</script>

<template>
  <QInput
    v-model.number="weightModel"
    ref="weightInputRef"
    :rules="[(val: number) => isNonNegitiveNumber(val) || rulesMessage]"
    dense
    outlined
    type="number"
    color="primary"
    class="col"
    :hint="weightHint"
    @blur="updateSet()"
  />

  <QInput
    v-model.number="repsModel"
    ref="repsInputRef"
    :rules="[(val: number) => isNonNegitiveNumber(val) || rulesMessage]"
    dense
    outlined
    type="number"
    color="primary"
    class="col"
    :hint="repsHint"
    @blur="updateSet()"
  />
</template>
