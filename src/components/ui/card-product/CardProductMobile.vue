<script setup>
import { useRouter } from 'vue-router';
import { FireIcon } from '@/components/icons';
import { Clock, UsersRound, Archive } from 'lucide-vue-next';
import NoProdukImg from "@/assets/images/noproduct.png";

const props = defineProps({
  loading: {
    default: false,
    type: null,
    required: false,
  },
  data: {
    default: [],
    type: null,
    required: false,
  }
});

const router = useRouter();

</script>

<template>
  <div @click.prevent="() => {
    if (loading) {
      return;
    }

    router.push({ name: 'detailProduct', params: { id: data.id } });
  }" class="w-full box-border text-foreground bg-white shadow-custom rounded-[8px] overflow-hidden cursor-pointer">
    <div
      class="w-full h-[140px] box-border overflow-hidden flex items-center justify-center relative bg-center bg-cover"
      :style="!loading ? { backgroundImage: `url(${data.banner || NoProdukImg})` } : null">
      <div v-if="!loading" class="flex gap-x-1.5 absolute top-1.5 left-1.5">
        <div v-if="data.isSegera" class="rounded-full px-2 py-1 bg-red-200 flex items-center justify-center">
          <FireIcon class="w-[12px] h-[12px] text-[#E84040] mr-1" />
          <div class="text-[9px] text-red-500">Segera</div>
        </div>

      </div>

      <Skeleton v-if="loading" class="w-16 h-6 bg-slate-200 absolute top-1.5 left-1.5" />

      <div v-if="!loading"
        class="absolute bottom-0 left-0 rounded-tr-[8px] px-2 py-1 bg-green-400 flex items-center justify-center">
        <div class="text-[9px] text-white">Open Bidding</div>
      </div>

      <Skeleton v-if="loading" class="w-full h-full rounded-b-none" />
    </div>

    <div class="w-full box-border p-3">
      <div class="w-full box-border mb-3">
        <h1 v-if="!loading" class="font-bold text-[14px] w-full flex-1">{{ data.title }}</h1>
        <Skeleton v-if="loading" class="w-32 h-[14px] mb-2" />

        <div class="w-full flex items-start justify-start flex-col">
          <Skeleton v-if="loading" class="w-12 h-[14px] mb-1" />
          <Skeleton v-if="loading" class="w-24 h-[14px]" />
          <div v-if="!loading" class="w-full text-[10px] text-muted-foreground mb-1">
            {{ data.kategori }}
          </div>
          <div v-if="!loading" class="w-full text-[10px] flex items-center justify-start gap-x-2">
            <Clock class="text-muted-foreground size-3" />
            <div class="text-muted-foreground">{{ data.finishAt }}</div>
          </div>
        </div>
      </div>

      <div class="w-full flex items-center justify-between">
        <Skeleton v-if="loading" class="w-12 h-[14px]" />
        <Skeleton v-if="loading" class="w-12 h-[14px]" />

        <div v-if="!loading" class="text-[10px] flex items-center gap-x-2">
          <Archive class="text-muted-foreground size-4" />
          <div class="font-semibold">{{ data.kebutuhan }} {{ data.satuan }}</div>
        </div>
        <div v-if="!loading" class="text-[10px] flex items-center gap-x-2">
          <UsersRound class="text-muted-foreground size-4" />
          <div class="font-semibold">{{ data.totalBid || 0 }} orang</div>
        </div>
      </div>
    </div>
  </div>
</template>