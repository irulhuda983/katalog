<script setup>
import { ref } from 'vue';
import MainApp from '@/components/layouts/mobile/MainApp.vue';
import { AppBar } from '@/components/ui/app-bar';


const openFilter = ref(false);
</script>

<template>
  <MainApp :show-bottom-menu="true" :show-app-bar="true" :show-back="false" :title="'Akun'">
    <div class="w-full box-border py-[12px] px-[16px] mb-20">
      Akun
    </div>
  </MainApp>
</template>