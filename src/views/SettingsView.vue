<script setup lang="ts">
import { QPage } from 'quasar'
import { Icon } from '@/constants/app'
import OptionsSection from '@/components/settings/OptionsSection.vue'
import DefaultsSection from '@/components/settings/DefaultsSection.vue'
// import ImportExportSection from '@/components/settings/ImportExportSection.vue'
// import DangerZoneSection from '@/components/settings/DangerZoneSection.vue'
</script>

<template>
  <QPage padding>
    <div class="row justify-center">
      <div class="col-12">
        <QCard>
          <QCardSection class="bg-primary text-white q-py-sm text-h5">
            <QIcon class="q-pb-xs q-pr-sm" :name="Icon.SETTINGS" />
            Settings
          </QCardSection>

          <OptionsSection />

          <QSeparator />

          <DefaultsSection />

          <QSeparator />

          <!-- <ImportExportSection /> -->

          <QSeparator />

          <!-- <DangerZoneSection /> -->
        </QCard>
      </div>
    </div>
  </QPage>
</template>
