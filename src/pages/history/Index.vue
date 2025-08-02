<script setup>
import { useResponsive } from '@/composables/useResponsive';
import Mobile from './HistoryMobile.vue';
import Desktop from './HistoryDesktop.vue';

const { isMobile } = useResponsive();
</script>

<template>
  <component :is="isMobile ? Mobile : Desktop" />
</template>