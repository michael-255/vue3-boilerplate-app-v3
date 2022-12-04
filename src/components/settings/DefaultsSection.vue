<script setup lang="ts">
import { QCardSection } from 'quasar'
import DefaultMeasurementsButton from '@/components/settings/buttons/DefaultMeasurementsButton.vue'
import DefaultExercisesButton from '@/components/settings/buttons/DefaultExercisesButton.vue'
import DefaultWorkoutsButton from '@/components/settings/buttons/DefaultWorkoutsButton.vue'
</script>

<template>
  <QCardSection>
    <div class="text-h6 q-mb-sm">Database Defaults</div>

    <div class="q-mb-md">
      Load default data into the database that you can begin using right away.
    </div>

    <div>
      <DefaultMeasurementsButton />
    </div>

    <div class="q-mt-md">
      <DefaultExercisesButton />
    </div>

    <div class="q-mt-md">
      <DefaultWorkoutsButton />
    </div>
  </QCardSection>
</template>
