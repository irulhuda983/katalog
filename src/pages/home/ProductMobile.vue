<script setup>
import { cn } from '@/lib/utils';

import { CardProductMobile } from '@/components/ui/card-product';
import EmptyProdukImg from "@/assets/images/empty-produk.png";

const props = defineProps({
  class: {
    type: null,
    required: false,
    default: null
  },
  loading: {
    type: null,
    required: false,
    default: false,
  },
  data: {
    required: false,
    type: null,
    default: []
  }
});

const emits = defineEmits(['navigate']);

const handleNavigate = ({ type }) => {
  emits('navigate', { type });
}

</script>

<template>
  <div :class="cn('w-full box-border', props.class)">
    <div class="w-full flex items-center justify-between mb-2">
      <div class="font-bold text-[14px]">
        Open Penawaran Produk
      </div>

      <a href="#" @click.prevent="handleNavigate({ type: 'open' })"
        class="cursor-pointer flex items-center gap-x-2 text-blue-500 hover:text-blue-400 font-bold text-[12px]">
        <span>Lihat Semua</span>
      </a>
    </div>

    <div v-if="data.length <= 0 && !loading"
      class="w-full flex flex-col items-center justify-center bg-card rounded-[8px] py-12">
      <img :src="EmptyProdukImg" alt="" class="h-32 mb-5">
      <div class="text-xl font-semibold text-muted-foreground">Penawaran Belum Tersedia</div>
      <p class="text-muted-foreground">Belum ada produk yang open penawaran.</p>
    </div>

    <div v-else class="w-full box-border grid grid-cols-2 gap-3">
      <template v-if="!loading">
        <CardProductMobile v-for="(item, i) in data" :key="i" :data="item" :loading="loading" />
      </template>
      <template v-else>
        <CardProductMobile v-for="i in 4" :key="i" :data="[]" :loading="loading" />
      </template>
    </div>
  </div>
</template>