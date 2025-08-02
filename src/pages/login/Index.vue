<script setup>
import { useResponsive } from '@/composables/useResponsive';
import Mobile from './LoginMobile.vue';
import Desktop from './LoginDesktop.vue';

const { isMobile } = useResponsive();
</script>

<template>
  <component :is="isMobile ? Mobile : Desktop" />
</template>