<script setup>
import { cn } from '@/lib/utils';

import { CardProductMobile } from '@/components/ui/card-product';

const props = defineProps({
  class: {
    type: null,
    required: false,
    default: null
  }
});

</script>

<template>
  <div :class="cn('w-full box-border', props.class)">
    <div class="w-full flex items-center justify-between mb-2">
      <div class="font-bold text-[14px]">
        Open Penawaran Produk
      </div>
    </div>

    <div class="w-full box-border grid grid-cols-2 gap-3">
      <CardProductMobile v-for="i in 10" :key="i" />
    </div>
  </div>
</template>