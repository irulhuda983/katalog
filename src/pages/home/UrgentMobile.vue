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
    <div class="w-full flex items-center justify-between">
      <div class="font-bold text-[14px]">
        Dibutuhkan Segera
      </div>
      <a href="#" @click.prevent="handleNavigate({ type: 'urgent' })"
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

    <div class="w-full box-border">
      <Carousel v-if="!loading" class="w-full box-border" :opts="{
        align: 'start',
      }">
        <CarouselContent class="w-full box-border -ml-1 py-5">
          <CarouselItem v-for="(item, index) in data" :key="index" class="pl-1 basis-1/2 mr-3">
            <CardProductMobile :data="item" :loading="loading" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div v-else class="w-full grid grid-cols-2 gap-2">
        <CardProductMobile v-for="i in 2" :key="i" :data="[]" :loading="loading" />
      </div>
    </div>
  </div>
</template>