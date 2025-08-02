<script setup>
import { ref } from 'vue';
import MainApp from '@/components/layouts/mobile/MainApp.vue';
import { AppBar } from '@/components/ui/app-bar';
import { InputGroup } from "@/components/ui/input-group";
import KategoriMobile from './KategoriMobile.vue';
import UrgentMobile from './UrgentMobile.vue';
import ProductMobile from './ProductMobile.vue';

import Logo from "@/assets/images/logo.png";

const search = ref('');
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
      <KategoriMobile class="mb-5" />
      <UrgentMobile class="mb-5" />
      <ProductMobile class="mb-5" />
    </div>
  </MainApp>
</template>