<script setup lang="ts">
import { QPage, QCard, QCardSection } from 'quasar'
import { Icon } from '@/constants/app'
import OptionsSection from '@/components/settings/OptionsCard.vue'
import DefaultsSection from '@/components/settings/DefaultsCard.vue'
import ImportExportSection from '@/components/settings/ImportExportCard.vue'
import DangerZoneSection from '@/components/settings/DangerZoneCard.vue'
</script>

<template>
  <QPage padding>
    <!-- Settings Banner -->
    <QCard class="q-mb-sm">
      <QCardSection class="text-h5 text-white bg-primary">
        <QIcon class="q-pb-xs q-pr-xs" :name="Icon.SETTINGS" />
        Settings
      </QCardSection>
    </QCard>

    <OptionsSection class="q-mb-sm" />
    <DefaultsSection class="q-mb-sm" />
    <ImportExportSection class="q-mb-sm" />
    <DangerZoneSection />
  </QPage>
</template>
