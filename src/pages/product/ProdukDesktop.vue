<script setup>
import { ref, inject } from 'vue';
import { storeToRefs } from 'pinia';
import { useKategoriStore } from '@/stores/kategori';

import { CardProduct } from '@/components/ui/card-product';

const router = inject('router');
const route = inject('route');
const produkStore = inject('produkStore');

const kategoriStore = useKategoriStore();

const { loadingState, listState, paramsState, metaState } = storeToRefs(produkStore);

const props = defineProps({
  class: {
    type: null,
    required: false,
    default: null
  },
  params: {
    type: null,
    required: false,
    default: {
      kategori: 'all',
      type: 'all',
      search: null,
      page: 1,
      limit: 10
    }
  }
});
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
          <div>Menampilkan {{ metaState?.from }} - {{ metaState?.to }} dari {{ metaState?.total }} aset lelang</div>
          <div>Urutkan : Terbaru</div>
        </div>
        <div v-if="loading" class="w-full box-border grid grid-cols-3 gap-5">
          <CardProduct v-for="i in 20" :key="i" :produk="[]" :loading="loadingState" />
        </div>

        <template v-else>
          <div v-if="listState.length <= 0">
            Belum ada produk tersedia.
          </div>
          <div else class="w-full box-border grid grid-cols-3 gap-5">
            <CardProduct v-for="(item, i) in listState" :key="i" :produk="item" :loading="loadingState" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>