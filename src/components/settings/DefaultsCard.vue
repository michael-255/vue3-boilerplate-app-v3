<script setup lang="ts">
import { QCard, QCardSection } from 'quasar'
import DefaultMeasurementsButton from '@/components/settings/buttons/DefaultMeasurementsButton.vue'
import DefaultExercisesButton from '@/components/settings/buttons/DefaultExercisesButton.vue'
</script>

<template>
  <QCard>
    <QCardSection>
      <div class="text-h6 q-mb-md">Defaults</div>

      <div class="q-mb-lg">
        Load default data into the database that you can begin using right away.
      </div>

      <DefaultMeasurementsButton class="q-mb-sm" />
      <DefaultExercisesButton />
    </QCardSection>
  </QCard>
</template>
