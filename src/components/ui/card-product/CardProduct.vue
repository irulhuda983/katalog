<script setup>
import { useRouter } from 'vue-router';
import { FireIcon } from '@/components/icons';

const router = useRouter();
</script>

<template>
  <div @click.prevent="router.push({ name: 'detailProduct', params: { id: 1 } })"
    class="w-full box-border text-foreground bg-white shadow-custom rounded-[8px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
    <div class="w-full h-[180px] box-border overflow-hidden flex items-center justify-center relative">
      <div class="flex gap-x-1.5 absolute top-3 left-3">
        <div class="rounded-full px-2 py-1 bg-red-200 flex items-center justify-center">
          <FireIcon class="w-[12px] h-[12px] text-[#E84040] mr-1" />
          <div class="text-[9px] text-red-500">Segera</div>
        </div>
        <div class="rounded-full px-2 py-1 bg-green-400 flex items-center justify-center">
          <div class="text-[9px] text-white">Open Bidding</div>
        </div>
      </div>
      <img src="/images/beras-bg.jpg" alt="" class="w-full">
    </div>

    <div class="w-full box-border p-3">
      <div class="w-full box-border mb-5">
        <div class="w-full flex items-center justify-between mb-1 gap-x-5">
          <h1 class="font-bold text-[16px] w-full flex-1">Beras Anak Raja</h1>
          <div
            class="flex-none bg-accent inline-block text-[10px] text-muted-foreground rounded-[4px] py-[4px] px-[8px]">
            Bahan Pokok
          </div>
        </div>
        <p class="text-muted-foreground text-[12px]">
          Dibutuhkan segera stock beras anak raja min. 50Kg, jika
          anda memiliki
          stock silahkan masukkan
          penawaran.
        </p>
      </div>

      <div class="w-full flex items-center justify-between mb-2">
        <div class="text-[12px]">
          <div class="text-muted-foreground">Kebutuhan</div>
          <div class="font-semibold">50 Kg</div>
        </div>
        <div class="text-[12px]">
          <div class="text-muted-foreground text-center">Total Bid</div>
          <div class="font-semibold text-center">50 Orang</div>
        </div>
        <div class="text-[12px]">
          <div class="text-muted-foreground text-end">Finish Date</div>
          <div class="font-semibold text-end">17/08/2025</div>
        </div>
      </div>
    </div>
  </div>
</template>