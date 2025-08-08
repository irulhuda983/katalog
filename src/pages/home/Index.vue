<script setup>
import { onMounted } from 'vue';
import { useProdukStore } from '@/stores/produk';
import { useResponsive } from '@/composables/useResponsive';
import { useRouter } from 'vue-router';

// component
import Mobile from './HomeMobile.vue';
import Desktop from './HomeDesktop.vue';

const { isMobile } = useResponsive();
const produkStore = useProdukStore();
const router = useRouter();

const init = async () => {
  if (produkStore.loadingState) return;
  produkStore.loadingState = true;
  try {
    await Promise.all([
      produkStore.fetchListOpened(),
      produkStore.fetchListSegera(),
    ]);
  } catch (error) {
    console.log(error);
  } finally {
    produkStore.loadingState = false;
    console.log('ok');
  }
};

const handleNavigate = ({ type }) => {
  router.push({ name: 'product', query: { type: type } });
};

onMounted(() => {
  init();
});
</script>

<template>
  <component :is="isMobile ? Mobile : Desktop" @navigate="(type) => { handleNavigate(type); }" />
</template>