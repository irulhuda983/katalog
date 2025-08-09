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
  },
  loading: {
    default: false,
    required: false,
    type: null
  },
  data: {
    default: false,
    required: false,
    type: null
  }
});

</script>

<template>
  <div :class="cn('w-full box-border', props.class)">
    <div v-if="loading" class="w-full box-border grid grid-cols-2 gap-3">
      <CardProductMobile v-for="i in 6" :key="i" :data="[]" :loading="loading" />
    </div>
    <template v-else>
      <div v-if="data.length > 0" class="w-full box-border grid grid-cols-2 gap-3">
        <CardProductMobile v-for="(item, i) in data" :key="i" :data="item" :loading="loading" />
      </div>
      <div v-else class="w-full h-calc(100vh-180px) flex items-center justify-center flex-col">
        <img :src="EmptyProdukImg" alt="" class="h-32 mb-5">
        <div class="text-xl font-semibold text-muted-foreground">Penawaran Belum Tersedia</div>
        <p class="text-muted-foreground">Belum ada produk penawaran.</p>
      </div>
    </template>
  </div>
</template>