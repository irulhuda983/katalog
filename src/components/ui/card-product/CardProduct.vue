<script setup>
import { useRouter } from 'vue-router';
import { FireIcon } from '@/components/icons';
import NoProductImg from "@/assets/images/noproduct.png";

// components
import { Skeleton } from '@/components/ui/skeleton';

const props = defineProps({
  produk: {
    type: null,
    required: false,
    default: {}
  },
  loading: {
    type: null,
    required: false,
    default: false
  }
});

const router = useRouter();

const navigate = (id = null) => {
  if (props.loading) return;

  router.push({ name: 'detailProduct', params: { id: id } });
};
</script>

<template>
  <div @click.prevent="navigate(produk.id)"
    class="w-full box-border text-foreground bg-white shadow-custom rounded-[8px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">

    <Skeleton v-if="loading" class="w-full h-[180px] box-border overflow-hidden rounded-none" />
    <div v-else
      class="w-full h-[180px] box-border overflow-hidden flex items-center justify-center relative bg-cover bg-center"
      :style="{ backgroundImage: `url(${produk.banner || NoProductImg})` }">
      <div class="flex gap-x-1.5 absolute top-3 left-3">
        <div v-if="produk.isSegera" class="rounded-full px-2 py-1 bg-red-200 flex items-center justify-center">
          <FireIcon class="w-[12px] h-[12px] text-[#E84040] mr-1" />
          <div class="text-[9px] text-red-500">Segera</div>
        </div>
        <div v-if="produk.status == 'open'"
          class="rounded-full px-2 py-1 bg-green-400 flex items-center justify-center">
          <div class="text-[9px] text-white">Open Bidding</div>
        </div>
      </div>
    </div>

    <div class="w-full box-border p-3">
      <div class="w-full box-border mb-5">
        <div class="w-full flex items-center justify-between mb-1 gap-x-5">
          <Skeleton v-if="loading" class="w-32 h-[18px]" />
          <h1 v-if="!loading" class="font-bold text-[16px] w-full flex-1">{{ produk.title }}</h1>

          <Skeleton v-if="loading" class="w-18 h-[20px] rounded-[4px]" />
          <div v-if="!loading"
            class="flex-none bg-accent inline-block text-[10px] text-muted-foreground rounded-[4px] py-[4px] px-[8px]">
            {{ produk.kategori || 'kategori' }}
          </div>
        </div>

        <Skeleton v-if="loading" class="w-full h-[12px] mb-1" />
        <Skeleton v-if="loading" class="w-24 h-[12px]" />
        <p v-if="!loading" class="text-muted-foreground text-[12px]">
          {{ produk.desc || '' }}
        </p>
      </div>

      <div class="w-full flex items-center justify-between mb-2">
        <div class="text-[12px]">
          <div v-if="loading" class="flex justify-start items-start flex-col">
            <Skeleton class="w-14 h-[10px] mb-1" />
            <Skeleton class="w-18 h-[12px]" />
          </div>

          <div v-if="!loading" class="text-muted-foreground">Kebutuhan</div>
          <div v-if="!loading" class="font-semibold">{{ produk.kebutuhan || '0' }} {{ produk.satuan }}</div>
        </div>
        <div class="text-[12px]">
          <div v-if="loading" class="flex justify-center items-center flex-col">
            <Skeleton class="w-14 h-[10px] mb-1" />
            <Skeleton class="w-18 h-[12px]" />
          </div>

          <div v-if="!loading" class="text-muted-foreground text-center">Total Bid</div>
          <div v-if="!loading" class="font-semibold text-center">{{ produk.totalBid || '0' }} Orang</div>
        </div>
        <div class="text-[12px]">
          <div v-if="loading" class="flex justify-end items-end flex-col">
            <Skeleton class="w-14 h-[10px] mb-1" />
            <Skeleton class="w-18 h-[12px]" />
          </div>

          <div v-if="!loading" class="text-muted-foreground text-end">Finish Date</div>
          <div v-if="!loading" class="font-semibold text-end">{{ produk.dateFinishAt || '-' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>