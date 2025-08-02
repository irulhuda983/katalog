<script setup>
import { useRouter } from 'vue-router';
import { FireIcon } from '@/components/icons';
import { Clock, UsersRound, Archive } from 'lucide-vue-next';

const router = useRouter();
</script>

<template>
  <div @click.prevent="router.push({ name: 'detailProduct', params: { id: 1 } })"
    class="w-full box-border text-foreground bg-white shadow-custom rounded-[8px] overflow-hidden cursor-pointer">
    <div class="w-full h-[140px] box-border overflow-hidden flex items-center justify-center relative">
      <div class="flex gap-x-1.5 absolute top-3 left-3">
        <div class="rounded-full px-2 py-1 bg-red-200 flex items-center justify-center">
          <FireIcon class="w-[12px] h-[12px] text-[#E84040] mr-1" />
          <div class="text-[9px] text-red-500">Segera</div>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 rounded-tr-[8px] px-2 py-1 bg-green-400 flex items-center justify-center">
        <div class="text-[9px] text-white">Open Bidding</div>
      </div>

      <img src="/images/beras-bg.jpg" alt="" class="h-full">
    </div>

    <div class="w-full box-border p-3">
      <div class="w-full box-border mb-3">
        <h1 class="font-bold text-[14px] w-full flex-1">Beras Anak Raja</h1>

        <div class="w-full flex items-center justify-between">
          <div class="w-full text-[10px] text-muted-foreground">
            Bahan Pokok
          </div>
          <div class="w-full text-[10px] flex items-center gap-x-2">
            <Clock class="text-muted-foreground size-3" />
            <div class="text-muted-foreground">17/08/2025</div>
          </div>
        </div>
      </div>

      <div class="w-full grid grid-cols-2 gap-2 mb-1">
        <div class="text-[10px] flex items-center gap-x-2">
          <Archive class="text-muted-foreground size-4" />
          <div class="font-semibold">50 Kg</div>
        </div>
        <div class="text-[10px] flex items-center gap-x-2">
          <UsersRound class="text-muted-foreground size-4" />
          <div class="font-semibold">50 orang</div>
        </div>
      </div>
    </div>
  </div>
</template>