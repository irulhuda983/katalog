<script setup>
import { nextTick, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useProdukStore } from '@/stores/produk';

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
import EmptyProdukImg from "@/assets/images/empty-produk.png";

const produkStore = useProdukStore();
const { loadingState } = storeToRefs(produkStore);

const emits = defineEmits(['navigate']);

const handleNavigate = ({ type }) => {
  console.log('asfjaslf');
  emits('navigate', { type });
}

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
        <a href="#" @click.prevent="handleNavigate({ type: 'urgent' })"
          class="cursor-pointer flex items-center gap-x-2 text-blue-500 hover:text-blue-400 font-bold text-[14px]">
          <span>Lihat Semua</span>
          <ChevronRight class="size-5" />
        </a>
      </div>
      <div v-if="loadingState" class="w-full box-border -ml-1 py-5 grid grid-cols-4">
        <div v-for="(_, index) in 4" :key="index" class="pl-1 basis-1/4 mr-3">
          <CardProduct :produk="{}" :loading="loadingState" />
        </div>
      </div>

      <div v-else class="w-full">
        <div v-if="produkStore.produkSegeraState.length <= 0"
          class="w-full flex flex-col items-center justify-center bg-card rounded-[8px] py-12">
          <img :src="EmptyProdukImg" alt="" class="h-32 mb-5">
          <div class="text-xl font-semibold text-muted-foreground">Penawaran Belum Tersedia</div>
          <p class="text-muted-foreground">Belum ada produk yang segera dibutuhkan.</p>
        </div>

        <Carousel class="w-full box-border" :opts="{
          align: 'start',
        }">
          <CarouselContent class="w-full box-border -ml-1 py-5">
            <CarouselItem v-for="(item, index) in produkStore.produkSegeraState" :key="index"
              class="pl-1 basis-1/4 mr-3">
              <CardProduct :produk="item" :loading="loadingState" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious class="ml-8" />
          <CarouselNext class="mr-8" />
        </Carousel>
      </div>
    </div>
    <!-- end dibutuhkan segera -->

    <!-- produk lainnya -->
    <div class="w-full max-w-[1536px] box-border py-[28px] px-16 3xl:px-0 mb-[20px]">
      <div class="w-full flex items-center justify-between mb-5">
        <div class="font-bold text-[18px]">
          Open Bid Produk
        </div>
        <a href="#" @click.prevent="handleNavigate({ type: 'openBid' })"
          class="cursor-pointer flex items-center gap-x-2 text-blue-500 hover:text-blue-400 font-bold text-[14px]">
          <span>Lihat Semua</span>
          <ChevronRight class="size-5" />
        </a>
      </div>

      <div v-if="loadingState" class="w-full grid grid-cols-4 gap-5">
        <div v-for="(_, i) in 4" :key="i" class="basis-1/4">
          <CardProduct :produk="{}" :loading="loadingState" />
        </div>
      </div>

      <div v-else class="w-full box-border">
        <div v-if="produkStore.produkOpenedState.length > 0" class="w-full grid grid-cols-4 gap-5">
          <div v-for="(item, i) in produkStore.produkOpenedState" :key="i" class="basis-1/4">
            <CardProduct :produk="item" :loading="loadingState" />
          </div>
        </div>
        <div v-else class="w-full flex flex-col items-center justify-center bg-card rounded-[8px] py-12">
          <img :src="EmptyProdukImg" alt="" class="h-32 mb-5">
          <div class="text-xl font-semibold text-muted-foreground">Penawaran Belum Tersedia</div>
          <p class="text-muted-foreground">Belum ada produk yang open penawaran.</p>
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