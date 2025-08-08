<script setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useProdukStore } from '@/stores/produk';

import MainApp from '@/components/layouts/mobile/MainApp.vue';
import { AppBar } from '@/components/ui/app-bar';
import KategoriMobile from './KategoriMobile.vue';
import UrgentMobile from './UrgentMobile.vue';
import ProductMobile from './ProductMobile.vue';

import Logo from "@/assets/images/logo.png";

const produkStore = useProdukStore();
const { loadingState } = storeToRefs(produkStore);

const emits = defineEmits(['navigate']);

const handleNavigate = ({ type }) => {
  emits('navigate', { type });
};
</script>

<template>
  <MainApp :show-bottom-menu="true">
    <AppBar :show-back="false">
      <template #appbar-content>
        <div class="w-full flex items-center justify-between">
          <img :src="Logo" alt="" class="w-[100px]">
        </div>
      </template>
    </AppBar>
    <div class="w-full box-border py-[12px] px-[16px] mb-20">
      <KategoriMobile class="mb-5" :loading="loadingState" />
      <UrgentMobile class="mb-5" :data="produkStore.produkSegeraState" :loading="loadingState" @navigate="(type) => {
        handleNavigate(type);
      }" />
      <ProductMobile class="mb-5" :data="produkStore.produkOpenedState" :loading="loadingState" @navigate="(type) => {
        handleNavigate(type);
      }" />
    </div>
  </MainApp>
</template>