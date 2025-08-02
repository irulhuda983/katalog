<script setup>
import { cn } from '@/lib/utils';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
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
    <div class="w-full flex items-center justify-between">
      <div class="font-bold text-[14px]">
        Dibutuhkan Segera
      </div>
      <a href="#"
        class="cursor-pointer flex items-center gap-x-2 text-blue-500 hover:text-blue-400 font-bold text-[12px]">
        <span>Lihat Semua</span>
      </a>
    </div>

    <Carousel class="w-full box-border" :opts="{
      align: 'start',
    }">
      <CarouselContent class="w-full box-border -ml-1 py-5">
        <CarouselItem v-for="(_, index) in 10" :key="index" class="pl-1 basis-1/2 mr-3">
          <CardProductMobile />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>