<script setup lang="ts">
import { QCardSection, QIcon } from 'quasar'
import { Icon } from '@/constants/ui/icon-enums'

// Props & Emits
defineProps<{
  exerciseName?: string
}>()
</script>

<template>
  <QCardSection class="q-py-sm">
    <div class="text-h6 q-mb-sm">{{ exerciseName }}</div>

    <QIcon :name="Icon.ACTIVE_NOTIFY" color="primary" size="xl" />
  </QCardSection>
</template>
