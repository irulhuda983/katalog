<script setup>
import { onMounted } from 'vue';
import { useResponsive } from '@/composables/useResponsive';
import { useProdukStore } from '@/stores/produk';
import { useRoute } from 'vue-router';


import Mobile from './DetailMobile.vue';
import Desktop from './DetailDesktop.vue';

const route = useRoute();
const produkStore = useProdukStore();

const { isMobile } = useResponsive();

onMounted(() => {
  produkStore.showDetailProduk(route.params.id);
});
</script>

<template>
  <component :is="isMobile ? Mobile : Desktop" />
</template>