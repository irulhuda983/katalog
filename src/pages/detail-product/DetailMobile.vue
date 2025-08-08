<script setup>
import { ref, reactive } from 'vue';
import MainApp from '@/components/layouts/mobile/MainApp.vue';

import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import { useRouter, useRoute } from 'vue-router';
import { useProdukStore } from '@/stores/produk';
import { useDialogLogin } from '@/composables/useDialogLogin';

import { Calendar, UsersRound, Clock, HomeIcon, ChevronRight } from 'lucide-vue-next';
import FormMobile from './FormMobile.vue';
import NoProductImg from "@/assets/images/noproduct.png";

const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
const produkStore = useProdukStore();
const { detailProdukState, loadingState } = storeToRefs(produkStore);
const { openDialog } = useDialogLogin();

const payload = reactive({
  idproductOffer: route.params.id,
  penawaran: '',
  catatan: '',
});

const openForm = ref(false);

const openLogin = () => {
  router.push({ name: 'login' });
};

const handleOpen = () => {
  openForm.value = true;
}

</script>

<template>
  <MainApp :show-bottom-menu="false" :show-app-bar="true" :title="'Detail Produk'">
    <div class="w-full box-border py-[12px] px-[16px] mb-20">
      <div class="w-full rounded-[8px] box-border overflow-hidden h-[200px] flex items-center justify-center mb-6">
        <Skeleton v-if="loadingState" class="w-full h-full" />
        <img v-else :src="detailProdukState.banner || NoProductImg" alt="" class="w-full">

      </div>

      <div v-if="!loadingState" class="w-full mb-5 border-b border-border pb-5">
        <h1 class="font-bold text-lg mb-1">{{ detailProdukState.title }}</h1>
        <div class="flex items-center gap-x-2 text-muted-foreground text-[11px] mb-2">
          <Calendar class="size-3" />
          <div>Dipublikasikan pada {{ detailProdukState.dateStartAt }}</div>
        </div>

        <div class="w-full flex items-center justify-between">
          <div class="w-full flex items-center gap-x-2">
            <div v-if="detailProdukState.status == 'open'"
              class="inline-block w-auto bg-green-200 rounded-[4px] text-green-500 text-[10px] font-semibold px-3 py-1">
              Open Bid
            </div>
            <div class="bg-accent rounded-[4px] text-[10px] font-bold text-muted-foreground px-3 py-1">
              {{ detailProdukState.kategori }}
            </div>
          </div>
          <div class="flex items-center justify-center gap-x-1 text-muted-foreground">
            <UsersRound class="size-3" />
            <div class="text-[11px] font-bold">{{ detailProdukState.totalBid }}</div>
          </div>
        </div>
      </div>

      <div v-if="loadingState" class="w-full mb-5 border-b border-border pb-5">
        <Skeleton class="w-44 h-[16px] mb-1" />
        <Skeleton class="w-[300px] h-[10px] mb-3" />

        <div class="w-full flex items-center justify-between">
          <div class="w-full flex items-center gap-x-2">
            <Skeleton class="w-24 h-6" />
            <Skeleton class="w-24 h-6" />
          </div>
          <Skeleton class="w-24 h-6" />
        </div>
      </div>

      <div v-if="!loadingState" class="w-full box-border">
        <h1 class="font-bold text-base mb-1">Spesifikasi Produk</h1>
        <div class="text-[12px] mb-3">{{ detailProdukState.desc || '' }}</div>

        <div class="w-full">
          <div class="w-full flex gap-x-3">
            <div class="text-muted-foreground text-[12px]">Kebutuhan :</div>
            <div class="text-[12px]">{{ detailProdukState.kebutuhan }}</div>
          </div>

          <div class="w-full flex gap-x-3">
            <div class="text-muted-foreground text-[12px]">Satuan :</div>
            <div class="text-[12px]">{{ detailProdukState.satuan }}</div>
          </div>

          <div class="w-full flex gap-x-3">
            <div class="text-muted-foreground text-[12px]">Dibuka pada :</div>
            <div class="text-[12px]">{{ detailProdukState.dateStartAt }}</div>
          </div>

          <div class="w-full flex gap-x-3">
            <div class="text-muted-foreground text-[12px]">Selesai pada :</div>
            <div class="text-[12px]">{{ detailProdukState.dateFinishAt }}</div>
          </div>

        </div>
      </div>

      <div v-if="loadingState" class="w-full box-border">
        <Skeleton class="w-44 h-6 mb-2" />
        <Skeleton class="w-full h-[12px] mb-1" />
        <Skeleton class="w-32 h-[12px] mb-3" />

        <Skeleton v-for="i in 4" :key="i" class="w-44 h-[14px] mb-1" />
      </div>
    </div>

    <div v-if="authStore.isAuthenticated" class="w-full box-border py-5 px-4 fixed bottom-0 shadow-custom">
      <button v-if="!detailProdukState.myBid" @click.prevent="handleOpen()"
        class="w-full rounded-[4px] py-3 bg-[#23DB85] hover:bg-[#23DB85]/70 cursor-pointer text-white font-bold text-base">
        Ajukan Penawaran
      </button>

      <div v-else class="w-full rounded-[4px] py-3 text-center">
        Anda sudah mengajukan penawaran
      </div>
    </div>

    <div v-else class="w-full box-border py-5 px-4 fixed bottom-0 shadow-custom">
      <button @click.prevent="openLogin"
        class="w-full rounded-[4px] py-3 bg-[#23DB85] hover:bg-[#23DB85]/70 cursor-pointer text-white font-bold text-base">
        Masuk / Daftar
      </button>
    </div>

    <FormMobile :open="openForm" @on-close="openForm = false" :payload="payload"
      :tgl="detailProdukState.dateFinishAt" />
  </MainApp>
</template>