<script setup>
import { ref, inject } from 'vue';
import { storeToRefs } from 'pinia';
import { useKategoriStore } from '@/stores/kategori';

import { CardProduct } from '@/components/ui/card-product';
import EmptyProdukImg from "@/assets/images/empty-produk.png";

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
  }
});

const setKategori = (slug) => {
  produkStore.setParams({ kategori: slug });

  produkStore.fetchListProduk();
};

const setStatus = (slug) => {
  produkStore.setParams({ status: slug });

  produkStore.fetchListProduk();
};

const setRange = (slug) => {
  produkStore.setParams({ range: slug });

  produkStore.fetchListProduk();
};
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
                class="cursor-pointer flex flex-col items-center justify-center h-20 border border-border p-2 rounded-[4px] cursor-pointer"
                :class="item.slug == paramsState.kategori ? 'bg-emerald-300 text-white' : 'bg-background hover:bg-emerald-50'"
                @click.prevent="setKategori(item.slug)">
                <component :is="item.icon" class="size-8 mb-1" />
                <div class="text-center break-normal text-[12px]">{{ item.nama }}</div>
              </div>
            </div>
          </div>

          <div class="w-full box-border mb-5">
            <div class="mb-3 font-bold text-lg">Status</div>
            <div class="w-full grid grid-cols-2 gap-4">
              <div v-for="(sts, i) in kategoriStore.listStatus" :key="i" @click.prevent="setStatus(sts.slug)"
                :class="sts.slug == paramsState.status ? 'bg-emerald-300 text-white' : 'bg-background hover:bg-emerald-50'"
                class="cursor-pointer w-full text-center rounded-[4px] border border-border px-3 py-1.5">
                {{ sts.nama }}
              </div>
            </div>
          </div>

          <div class="w-full box-border mb-5">
            <div class="mb-3 font-bold text-lg">Terakhir di Publish</div>
            <div class="w-full grid grid-cols-2 gap-4">
              <div v-for="(sts, i) in kategoriStore.listRange" :key="i" @click.prevent="setRange(sts.slug)"
                :class="sts.slug == paramsState.range ? 'bg-emerald-300 text-white' : 'bg-background hover:bg-emerald-50'"
                class="cursor-pointer w-full text-center rounded-[4px] border border-border px-3 py-1.5">
                {{ sts.nama }}
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
        <div v-if="loadingState" class="w-full box-border grid grid-cols-3 gap-5">
          <CardProduct v-for="i in 6" :key="i" :produk="[]" :loading="loadingState" />
        </div>

        <template v-else>
          <div v-if="listState.length <= 0">
            <div class="w-full h-calc(100vh-180px) flex items-center justify-center flex-col">
              <img :src="EmptyProdukImg" alt="" class="h-32 mb-5">
              <div class="text-xl font-semibold text-muted-foreground">Penawaran Belum Tersedia</div>
              <p class="text-muted-foreground">Belum ada produk penawaran.</p>
            </div>
          </div>
          <div else class="w-full box-border grid grid-cols-3 gap-5">
            <CardProduct v-for="(item, i) in listState" :key="i" :produk="item" :loading="loadingState" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>