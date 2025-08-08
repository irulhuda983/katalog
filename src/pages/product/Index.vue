<script setup>
import { onMounted, provide, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useResponsive } from '@/composables/useResponsive';
import Mobile from './ProdukMobile.vue';
import Desktop from './ProdukDesktop.vue';
import { useRouter, useRoute } from "vue-router";
import { toast } from 'vue-sonner';
import { useProdukStore } from '@/stores/produk';

const route = useRoute();
const produkStore = useProdukStore();

provide('router', useRouter());
provide('route', route);
provide('toast', toast);
provide('produkStore', produkStore);

const { isMobile } = useResponsive();

onMounted(async () => {
  const kategori = route.query?.kategori;
  const type = route.query?.type;

  produkStore.setParams({
    kategori,
    type,
    search: null,
    page: 1,
    limit: 10
  });

  await produkStore.fetchListProduk();
});

</script>

<template>
  <component :is="isMobile ? Mobile : Desktop" />
</template>