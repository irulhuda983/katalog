<script setup>
import { ref, reactive } from 'vue';
import MainApp from '@/components/layouts/mobile/MainApp.vue';

import { useAuthStore } from '@/stores/auth';

import { InputGroup } from '@/components/ui/input-group';
import { Calendar, UsersRound, Clock, HomeIcon, ChevronRight } from 'lucide-vue-next';
import FormMobile from './FormMobile.vue';

const authStore = useAuthStore();
const payload = reactive({
  nomial: null,
  catatan: null
});

const openForm = ref(false);

const data = ref({
  title: 'Beras Anak Raja',
  kategori: 'Bahan Pokok',
  banner: '/images/beras-bg.jpg',
  spesifikasi: [
    {
      key: 'Kebutuhan',
      val: '50'
    },
    {
      key: 'Satuan',
      val: 'Kg'
    },
    {
      key: 'Dibuka pada',
      val: '01 Agustus 2025'
    },
    {
      key: 'Selesai pada',
      val: '30 Agustus 2025'
    },
  ],
  tglAwal: '01 Agustus 2025 08:00',
  tglAkhir: '31 Agustus 2025 08:00',
});


</script>

<template>
  <MainApp :show-bottom-menu="false" :show-app-bar="true" :title="'Detail Produk'">
    <div class="w-full box-border py-[12px] px-[16px] mb-20">
      <div class="w-full rounded-[8px] box-border overflow-hidden h-[200px] flex items-center justify-center mb-6">
        <img :src="data.banner" alt="" class="w-full">
      </div>

      <div class="w-full mb-5 border-b border-border pb-5">
        <h1 class="font-bold text-lg mb-1">{{ data.title }}</h1>
        <div class="flex items-center gap-x-2 text-muted-foreground text-[11px] mb-2">
          <Calendar class="size-3" />
          <div>Dipublikasikan pada 01 Agustus 2025 | 09:27 WIB</div>
        </div>

        <div class="w-full flex items-center justify-between">
          <div class="w-full flex items-center gap-x-2">
            <div
              class="inline-block w-auto bg-green-200 rounded-[4px] text-green-500 text-[10px] font-semibold px-3 py-1">
              Open Bid
            </div>
            <div class="bg-accent rounded-[4px] text-[10px] font-bold text-muted-foreground px-3 py-1">Bahan Pokok
            </div>
          </div>
          <div class="flex items-center justify-center gap-x-1 text-muted-foreground">
            <UsersRound class="size-3" />
            <div class="text-[11px] font-bold">50</div>
          </div>
        </div>
      </div>

      <div class="w-full box-border">
        <h1 class="font-bold text-base mb-1">Spesifikasi Produk</h1>
        <div class="text-[12px] mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nam?</div>

        <div class="w-full">
          <div v-for="(item, i) in data.spesifikasi" :key="i" class="w-full flex gap-x-3">
            <div class="text-muted-foreground text-[12px]">{{ item.key }} :</div>
            <div class="text-[12px]">{{ item.val }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full box-border py-5 px-4 fixed bottom-0 shadow-custom">
      <button @click.prevent="openForm = true"
        class="w-full rounded-[4px] py-3 bg-[#23DB85] hover:bg-[#23DB85]/70 cursor-pointer text-white font-bold text-base">
        Ajukan Harga
      </button>
    </div>

    <FormMobile :open="openForm" @on-close="openForm = false" />
  </MainApp>
</template>