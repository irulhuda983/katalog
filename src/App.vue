<script setup>
import { RouterView, useRoute } from "vue-router";
import { Toaster } from '@/components/ui/sonner';
import 'vue-sonner/style.css';
</script>

<template>
  <RouterView />
  <Toaster position="top-center"
    class="pointer-events-auto w-full [&_.toast]:mx-auto [&_.toast]:w-full [&_.toast]:max-w-screen-md" :toastOptions="{
      unstyled: true,
      classes: {
        error: 'w-full bg-red-500 text-white text-[12px] font-dmsans rounded-[6px] -mt-[16px] flex items-center gap-x-2 py-[8px] px-[12px]',
        success: 'w-full bg-[#00B74F] text-white text-[12px] font-dmsans rounded-[6px] -mt-[16px] flex items-center gap-x-2 py-[8px] px-[12px]',
        warning: 'w-full bg-orange-400 text-white text-[12px] font-dmsans rounded-[6px] -mt-[16px] flex items-center gap-x-2 py-[8px] px-[12px]',
        info: 'w-full bg-blue-400 text-white text-[12px] font-dmsans rounded-[6px] -mt-[16px] flex items-center gap-x-2 py-[8px] px-[12px]',
      }
    }" />
</template>