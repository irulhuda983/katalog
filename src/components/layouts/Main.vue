<script setup>
import { useResponsive } from '@/composables/useResponsive';
import Mobile from './mobile/Main.vue';
import Desktop from './desktop/Main.vue';

const { isMobile } = useResponsive();
</script>

<template>
  <component :is="isMobile ? Mobile : Desktop" />
</template>