<script setup>
import { ref } from 'vue';
import MainApp from '@/components/layouts/mobile/MainApp.vue';
import { AppBar } from '@/components/ui/app-bar';
import { EmptyActivityVektor } from "@/components/vektors";
</script>

<template>
  <MainApp :show-bottom-menu="true" :show-app-bar="true" :show-back="false" :title="'History'">
    <div class="w-full box-border px-[100px] flex items-center justify-center h-[calc(100vh-80px)]">
      <div class="w-full">
        <EmptyActivityVektor class="w-full" />
        <div class="text-center text-[16px] font-semibold text-muted-foreground">Belum ada history penawaran</div>
      </div>
    </div>
    <!-- <div class="w-full box-border py-[12px] px-[16px] mb-20">
      <EmptyActivityVektor />
    </div> -->
  </MainApp>
</template>