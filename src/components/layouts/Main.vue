<script setup>
import { onMounted } from 'vue';
import { useResponsive } from '@/composables/useResponsive';
import { useAuthStore } from '@/stores/auth';
import Mobile from './mobile/Main.vue';
import Desktop from './desktop/Main.vue';

const { isMobile } = useResponsive();
const { fetchProfil } = useAuthStore();

onMounted(() => {
  fetchProfil();
});
</script>

<template>
  <component :is="isMobile ? Mobile : Desktop" />
</template>