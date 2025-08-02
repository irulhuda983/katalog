<script setup>
import { useResponsive } from '@/composables/useResponsive';
import Mobile from './DetailMobile.vue';
import Desktop from './DetailDesktop.vue';

const { isMobile } = useResponsive();
</script>

<template>
  <component :is="isMobile ? Mobile : Desktop" />
</template>