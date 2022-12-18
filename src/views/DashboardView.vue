<script setup lang="ts">
import { QPage, QCard, QCardSection } from 'quasar'
import { Icon } from '@/constants/app'
import TakeMeasurementsCard from '@/components/dashboard/TakeMeasurementsCard.vue'
</script>

<template>
  <QPage padding>
    <!-- Dashboard Banner -->
    <QCard class="q-mb-sm">
      <QCardSection class="text-h5 text-white bg-primary">
        <QIcon class="q-pb-xs q-pr-xs" :name="Icon.DASHBOARD" />
        Dashboard
      </QCardSection>
    </QCard>

    <div class="row q-col-gutter-md justify-start">
      <div class="col-12">
        <TakeMeasurementsCard />
      </div>
    </div>
  </QPage>
</template>
