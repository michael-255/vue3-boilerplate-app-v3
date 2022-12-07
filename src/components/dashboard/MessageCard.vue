<script setup lang="ts">
import { QCard, QCardSection } from 'quasar'
import { AppString, Icon } from '@/constants/app'
import { RouteName } from '@/constants/router'
</script>

<template>
  <QCard>
    <QCardSection class="bg-primary text-white q-py-sm text-h5">
      <QIcon class="q-pb-xs q-pr-sm" :name="Icon.DASHBOARD" />
      Dashboard
    </QCardSection>

    <QCardSection>
      {{ AppString.APP_NAME }} allows you to track available workouts from the list below. Make sure
      you create some or load the default workouts if you don't see any. You can also track body
      measurements by clicking the "Take Measurements" button.
    </QCardSection>

    <QCardSection>
      <QBtn
        color="positive"
        :to="{ name: RouteName.TAKE_MEASUREMENTS }"
        :icon="Icon.MEASUREMENTS"
        label="Take Measurements"
      />
    </QCardSection>
  </QCard>
</template>
