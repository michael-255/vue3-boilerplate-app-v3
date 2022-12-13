<script setup lang="ts">
import { QPage } from 'quasar'
import { AppColor, Icon } from '@/constants/app'
import OptionsSection from '@/components/settings/OptionsSection.vue'
import DefaultsSection from '@/components/settings/DefaultsSection.vue'
// import ImportExportSection from '@/components/settings/ImportExportSection.vue'
// import DangerZoneSection from '@/components/settings/DangerZoneSection.vue'
</script>

<template>
  <QPage class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12">
        <!-- Settings Header -->
        <div class="text-h5 q-mb-lg">
          <QIcon class="q-pb-xs q-pr-xs" :color="AppColor.INFO" :name="Icon.SETTINGS" />
          Settings
        </div>

        <OptionsSection class="q-mb-lg" />

        <DefaultsSection class="q-mb-lg" />

        <!-- <ImportExportSection /> -->

        <!-- <DangerZoneSection /> -->
      </div>
    </div>
  </QPage>
</template>
