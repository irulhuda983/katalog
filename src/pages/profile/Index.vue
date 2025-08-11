<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useResponsive } from '@/composables/useResponsive';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import Mobile from './Mobile.vue';
import Desktop from './Desktop.vue';
import LoginMobile from '@/pages/login/LoginMobile.vue';

const router = useRouter();
const { isMobile } = useResponsive();
const { isAuthenticated } = storeToRefs(useAuthStore());

</script>

<template>
  <component :is="isMobile ? (isAuthenticated ? Mobile : LoginMobile) : Desktop" />
</template>