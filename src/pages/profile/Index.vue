<script setup>
import { useResponsive } from '@/composables/useResponsive';
import Mobile from './Mobile.vue';
import Desktop from './Desktop.vue';

const { isMobile } = useResponsive();
</script>

<template>
  <component :is="isMobile ? Mobile : Desktop" />
</template>