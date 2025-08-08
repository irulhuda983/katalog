<script setup>
import { inject, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { cn } from '@/lib/utils';

import { CardProductMobile } from '@/components/ui/card-product';

const router = inject('router');
const route = inject('route');
const produkStore = inject('produkStore');

const { loadingState, listState, paramsState } = storeToRefs(produkStore);

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
  <div :class="cn('w-full box-border', props.class)">
    <div v-if="loadingState" class="w-full box-border grid grid-cols-2 gap-3">
      <CardProductMobile v-for="i in 6" :key="i" :data="[]" :loading="loadingState" />
    </div>
    <div v-else class="w-full box-border grid grid-cols-2 gap-3">
      <CardProductMobile v-for="(item, i) in listState" :key="i" :data="item" :loading="loadingState" />
    </div>
  </div>
</template>