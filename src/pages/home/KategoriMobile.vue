<script setup>
import { cn } from '@/lib/utils';
import { useKategoriStore } from '@/stores/kategori';
import { useRouter } from 'vue-router';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const router = useRouter();

const props = defineProps({
  class: {
    type: null,
    required: false,
    default: null
  },
  loading: {
    type: null,
    default: false,
  },
  data: {
    type: null,
    required: false,
  }
});

const kategoriStore = useKategoriStore();

const handleNavigate = (ktg) => {
  router.push({
    name: 'product',
    query: {
      kategori: ktg.slug
    }
  });
};
</script>

<template>
  <div :class="cn('w-full box-border', props.class)">

    <div v-if="loading" class="w-full grid grid-cols-5 py-5">
      <div v-for="i in 5" :key="i" class="basis-1/5 flex items-center justify-center flex-col">
        <Skeleton class="w-16 h-16 rounded-full mb-1" />
        <Skeleton class="w-12 h-[12px] rounded-full mb-1" />
      </div>
    </div>

    <Carousel v-if="!loading" class="w-full box-border" :opts="{
      align: 'start',
    }">
      <CarouselContent class="w-full box-border -ml-1 py-5">
        <CarouselItem v-for="(item, index) in kategoriStore.list" :key="index" class="pl-1 basis-1/5 mr-1">
          <div @click.prevent="handleNavigate(item)"
            class="cursor-pointer w-full flex flex-col items-center justify-center box-border">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-2">
              <component :is="item.icon" class="size-12" />
            </div>
            <div class="text-[12px] leading-none text-center text-muted-foreground">{{ item.nama }}</div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

  </div>
</template>