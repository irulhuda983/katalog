<script setup>
import { RouterView, useRoute } from "vue-router";
// import { Toaster } from '@/components/ui/sonner';
import 'vue-sonner/style.css';
</script>

<template>
  <RouterView />
  <!-- <Toaster class="pointer-events-auto" :toastOptions="{
    unstyled: true,
    classes: {
      error: 'bg-red-500 text-white text-[12px] font-dmsans rounded-[6px] mb-[80px] flex items-center gap-x-2 py-[8px] px-[12px]',
      success: 'bg-[#00B74F] text-white text-[12px] font-dmsans rounded-[6px] mb-[80px] flex items-center gap-x-2 py-[8px] px-[12px]',
      warning: 'bg-orange-400 text-white text-[12px] font-dmsans rounded-[6px] mb-[80px] flex items-center gap-x-2 py-[8px] px-[12px]',
      info: 'bg-blue-400 text-white text-[12px] font-dmsans rounded-[6px] mb-[80px] flex items-center gap-x-2 py-[8px] px-[12px]',
    }
  }" /> -->
</template>