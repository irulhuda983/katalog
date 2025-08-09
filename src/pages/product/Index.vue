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
  const kategori = route.query?.kategori || 'all';
  const status = route.query?.status || 'all';
  const type = route.query?.type || 'all';

  produkStore.setParams({
    kategori,
    status: type,
    range: 'all',
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