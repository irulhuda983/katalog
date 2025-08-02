<script setup>
import { useResponsive } from '@/composables/useResponsive';
import Mobile from './HomeMobile.vue';
import Desktop from './HomeDesktop.vue';

const { isMobile } = useResponsive();
</script>

<template>
  <component :is="isMobile ? Mobile : Desktop" />
</template>