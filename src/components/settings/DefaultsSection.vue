<script setup lang="ts">
import DefaultMeasurementsButton from '@/components/settings/buttons/DefaultMeasurementsButton.vue'
import DefaultExercisesButton from '@/components/settings/buttons/DefaultExercisesButton.vue'
</script>

<template>
  <div>
    <div class="text-h6 q-mb-sm">Database Defaults</div>

    <div class="q-mb-md">
      Load default data into the database that you can begin using right away.
    </div>

    <DefaultMeasurementsButton />
    <DefaultExercisesButton />
  </div>
</template>
