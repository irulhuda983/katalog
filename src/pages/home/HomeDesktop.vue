<script setup>
import { nextTick, ref, watch } from 'vue';
import { cn } from '@/lib/utils';
import { useCarousel } from '@/components/ui/carousel';
import { watchOnce } from '@vueuse/core';

import BannerImg from "@/assets/images/banner1.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CardProduct } from '@/components/ui/card-product';
import { ChevronRight } from 'lucide-vue-next';
import DesktopBanner from './DesktopBanner.vue';
import RoadMapDesktop from './RoadMapDesktop.vue';

</script>
<template>
  <div class="w-full box-border">

    <DesktopBanner />

    <!-- dibutuhkan segera -->
    <div class="w-full max-w-[1536px] box-border py-[28px] px-16 3xl:px-0 mb-[20px]">
      <div class="w-full flex items-center justify-between mb-3">
        <div class="font-bold text-[18px]">
          Dibutuhkan Segera
        </div>
        <a href="#"
          class="cursor-pointer flex items-center gap-x-2 text-blue-500 hover:text-blue-400 font-bold text-[14px]">
          <span>Lihat Semua</span>
          <ChevronRight class="size-5" />
        </a>
      </div>
      <Carousel class="w-full box-border" :opts="{
        align: 'start',
      }">
        <CarouselContent class="w-full box-border -ml-1 py-5">
          <CarouselItem v-for="(_, index) in 10" :key="index" class="pl-1 basis-1/4 mr-3">
            <CardProduct />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious class="ml-8" />
        <CarouselNext class="mr-8" />
      </Carousel>
    </div>
    <!-- end dibutuhkan segera -->

    <!-- produk lainnya -->
    <div class="w-full max-w-[1536px] box-border py-[28px] px-16 3xl:px-0 mb-[20px]">
      <div class="w-full flex items-center justify-between mb-5">
        <div class="font-bold text-[18px]">
          Open Bid Produk
        </div>
        <a href="#"
          class="cursor-pointer flex items-center gap-x-2 text-blue-500 hover:text-blue-400 font-bold text-[14px]">
          <span>Lihat Semua</span>
          <ChevronRight class="size-5" />
        </a>
      </div>
      <div class="w-full grid grid-cols-4 gap-5">
        <div v-for="i in 8" :key="i" class="basis-1/4">
          <CardProduct />
        </div>
      </div>
    </div>
    <!-- end produk lainnya -->

    <!-- road map -->
    <div class="w-full max-w-[1536px] box-border py-16 px-16 3xl:px-0 mb-[20px]">
      <div class="font-bold text-[18px] text-center">Gimana Caranya Melakukan Penawaran?</div>
      <RoadMapDesktop />
    </div>
    <!-- end roadmap -->
  </div>
</template>