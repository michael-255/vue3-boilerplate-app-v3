<script setup lang="ts">
import { QInput } from 'quasar'
import { ref, type Ref } from 'vue'
import { isNonNegitiveNumber } from '@/utils/validators'
import useOperationDialogStore from '@/stores/operation-dialog'

// Props & Emits
const props = defineProps<{
  index: number
  weight?: number
  reps?: number
}>()

const operationDialogStore = useOperationDialogStore()

const weightInputRef: Ref<any> = ref(null)
const repsInputRef: Ref<any> = ref(null)

const weightModel: Ref<number | undefined> = ref(props.weight)
const repsModel: Ref<number | undefined> = ref(props.reps)

const rulesMessage = 'Invalid'

function updateTemporarySet(): void {
  operationDialogStore.temporaryItem.weight[props.index] = weightModel.value
  operationDialogStore.temporaryItem.reps[props.index] = repsModel.value
  validateInputs()
}

function validateInputs(): void {
  operationDialogStore.validateItem.weight = !!weightInputRef?.value?.validate()
  operationDialogStore.validateItem.reps = !!repsInputRef?.value?.validate()
  // Manually set unused validation fields to true so this item can pass
  operationDialogStore.validateItem.distance = true
  operationDialogStore.validateItem.duration = true
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
    @blur="updateTemporarySet()"
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
    @blur="updateTemporarySet()"
  />
</template>
