<script setup>
import { ref } from 'vue';
import MainApp from '@/components/layouts/mobile/MainApp.vue';


const openFilter = ref(false);
</script>

<template>
  <MainApp :show-bottom-menu="false" :show-app-bar="true" :title="'Detail Produk'">
    <div class="w-full box-border py-[12px] px-[16px] mb-20">
      Akun
    </div>
  </MainApp>
</template>