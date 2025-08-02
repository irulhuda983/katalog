<script setup>
import { cn } from '@/lib/utils';
import { useKategoriStore } from '@/stores/kategori';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const props = defineProps({
  class: {
    type: null,
    required: false,
    default: null
  }
});

const kategoriStore = useKategoriStore();
</script>

<template>
  <div :class="cn('w-full box-border', props.class)">
    <Carousel class="w-full box-border" :opts="{
      align: 'start',
    }">
      <CarouselContent class="w-full box-border -ml-1 py-5">
        <CarouselItem v-for="(item, index) in kategoriStore.list" :key="index" class="pl-1 basis-1/5 mr-1">
          <div class="w-full flex flex-col items-center justify-center box-border">
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