<script setup>
import { reactive, ref } from 'vue';
import { useDialogLogin } from '@/composables/useDialogLogin';
import { useAuthStore } from '@/stores/auth';

import { InputGroup } from '@/components/ui/input-group';
import { Calendar, UsersRound, Clock, HomeIcon, ChevronRight } from 'lucide-vue-next';

const { openDialog } = useDialogLogin();
const authStore = useAuthStore();
const payload = reactive({
  nomial: null,
  catatan: null
});

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

const handleSubmit = () => {
  const isLogin = authStore.isAuthenticated;

  if (!isLogin) {
    openDialog({
      page: 'login'
    });

    return;
  }
};
</script>

<template>
  <div class="w-full max-w-[1536px] px-16 py-8 box-border">
    <div class="w-full box-border mb-5 flex items-center gap-x-5">
      <div class="flex items-center gap-x-2 cursor-pointer text-muted-foreground cursor-pointer hover:text-foreground">
        <HomeIcon class="size-4" />
        <div>Produk</div>
      </div>
      <ChevronRight class="text-muted-foreground size-4" />
      <div>{{ data.title }}</div>
    </div>
    <div class="w-full flex items-start gap-x-5">
      <div class="w-2/3 box-border">
        <!-- image -->
        <div class="w-full rounded-[8px] box-border overflow-hidden h-[350px] flex items-center justify-center mb-6">
          <img :src="data.banner" alt="" class="w-full">
        </div>

        <!-- sub title -->
        <div class="w-full flex justify-between border-b pb-3 mb-5">
          <div class="flex items-center gap-x-2 text-muted-foreground text-[11px]">
            <Calendar class="size-3" />
            <div>Dipublikasikan pada 01 Agustus 2025 | 09:27 WIB</div>
          </div>

          <div class="flex items-center justify-end gap-x-5">
            <div class="bg-accent rounded-[4px] text-[10px] font-bold text-muted-foreground px-3 py-1">Bahan Pokok</div>
            <div class="flex items-center justify-center gap-x-1 text-muted-foreground">
              <UsersRound class="size-3" />
              <div class="text-[11px] font-bold">50</div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <h1 class="font-bold text-lg mb-3">Spesifikasi Produk</h1>

          <div class="w-full">
            <div v-for="(item, i) in data.spesifikasi" :key="i" class="w-full flex gap-x-3">
              <div class="text-muted-foreground">{{ item.key }} :</div>
              <div class="">{{ item.val }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3 box-border">
        <div class="w-full box-border rounded-[8px] border border-border">
          <div class="w-full p-6 bg-accent">
            <div
              class="inline-block w-auto bg-green-200 rounded-[4px] text-green-500 text-[11px] font-semibold px-3 py-1 mb-2">
              Open Bid
            </div>
            <h1 class="font-bold text-xl">{{ data.title }}</h1>
          </div>
          <div class="w-full box-border p-6">
            <div class="w-full box-border mb-5">
              <div class="text-muted-foreground mb-1">Penawaran ditutup pada :</div>
              <div class="flex items-center gap-x-3 mb-8">
                <Clock class="size-4" />
                <div>{{ data.tglAkhir }} WIB</div>
              </div>

              <div class="w-full mb-5">
                <InputGroup label="Masukkan Penawaran" v-model="payload.payload" type="text" :isMandatory="true" />
              </div>

              <div class="w-full">
                <InputGroup label="Catatan" v-model="payload.catatan" type="textarea" />
              </div>
            </div>

            <div class="w-full h-px bg-border"></div>

            <div class="w-full box-border py-5">
              <button @click.prevent="handleSubmit"
                class="w-full rounded-[4px] py-3 bg-[#23DB85] hover:bg-[#23DB85]/70 cursor-pointer text-white font-bold text-base">
                Ajukan Harga
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>