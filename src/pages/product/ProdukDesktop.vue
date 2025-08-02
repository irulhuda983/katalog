<script setup>
import { ref } from 'vue';
import { useKategoriStore } from '@/stores/kategori';

import { CardProduct } from '@/components/ui/card-product';

const kategoriStore = useKategoriStore();
const search = ref('');
</script>

<template>
  <div class="w-full box-border h-[calc(100vh-80px)]">
    <div class="w-full max-w-[1536px] h-full px-16 box-border overflow-hidden flex">
      <div class="w-[350px] flex-none box-border h-full py-8">
        <div class="w-full h-full box-border border border-border rounded-[8px] bg-background shadow-custom p-6">
          <div class="w-full box-border mb-8">
            <div class="mb-3 font-bold text-lg">Kategori</div>
            <div class="w-full box-border grid grid-cols-3 gap-3">
              <div v-for="(item, i) in kategoriStore.list" :key="i"
                class="cursor-pointer flex flex-col items-center justify-center h-20 border border-border p-2 rounded-[4px] cursor-pointer">
                <component :is="item.icon" class="size-8 mb-1" />
                <div class="text-center break-normal text-[12px]">{{ item.nama }}</div>
              </div>
            </div>
          </div>

          <div class="w-full box-border mb-5">
            <div class="mb-3 font-bold text-lg">Terakhir di Open</div>
            <div class="w-full grid grid-cols-2 gap-4">
              <div class="cursor-pointer w-full text-center rounded-[4px] border border-border px-3 py-1.5">Semua
              </div>
              <div class="cursor-pointer w-full text-center rounded-[4px] border border-border px-3 py-1.5">7 Hari
              </div>
              <div class="cursor-pointer w-full text-center rounded-[4px] border border-border px-3 py-1.5">14 Hari
              </div>
              <div class="cursor-pointer w-full text-center rounded-[4px] border border-border px-3 py-1.5">30 Hari
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full h-full py-8 px-6 box-border flex-1 overflow-auto">
        <div class="w-full flex items-center justify-between mb-5">
          <div>Menampilkan 135 dari 62.1K aset lelang</div>
          <div>Urutkan : Terbaru</div>
        </div>
        <div class="w-full box-border grid grid-cols-3 gap-5">
          <CardProduct v-for="i in 20" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>