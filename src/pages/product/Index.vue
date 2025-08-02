<script setup>
import { useResponsive } from '@/composables/useResponsive';
import Mobile from './ProdukMobile.vue';
import Desktop from './ProdukDesktop.vue';

const { isMobile } = useResponsive();
</script>

<template>
  <component :is="isMobile ? Mobile : Desktop" />
</template>