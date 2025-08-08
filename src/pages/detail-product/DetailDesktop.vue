<script setup>
import { onMounted, reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useDialogLogin } from '@/composables/useDialogLogin';
import { useAuthStore } from '@/stores/auth';
import { useProdukStore } from '@/stores/produk';
import { useRoute } from 'vue-router';
import { toast } from 'vue-sonner';

import { InputGroup } from '@/components/ui/input-group';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, UsersRound, Clock, HomeIcon, ChevronRight, Loader2 } from 'lucide-vue-next';
import NoProdukImage from "@/assets/images/noproduct.png";


const { openDialog } = useDialogLogin();
const authStore = useAuthStore();
const route = useRoute();
const produkStore = useProdukStore();
const { detailProdukState, loadingSaveState, validationErrors } = storeToRefs(produkStore);

const payload = reactive({
  idproductOffer: route.params.id,
  penawaran: '',
  catatan: ''
});

const handleSubmit = async () => {
  const isLogin = authStore.isAuthenticated;

  if (!isLogin) {
    openDialog({
      page: 'login'
    });

    return;
  }

  await produkStore.createPenawaran({
    ...payload,

  });

  const res = produkStore.resStatus;

  if (res && res.success) {
    toast.success(res.message);
    produkStore.showDetailProduk(route.params.id);
  }

};

</script>

<template>
  <div class="w-full max-w-[1536px] px-16 py-8 box-border">
    <div class="w-full box-border mb-5 flex items-center gap-x-5">
      <div v-if="!produkStore.loadingState"
        class="flex items-center gap-x-2 cursor-pointer text-muted-foreground cursor-pointer hover:text-foreground">
        <HomeIcon class="size-4" />
        <div>Produk</div>
      </div>
      <Skeleton v-if="produkStore.loadingState" class="w-24 h-[16px]" />
      <ChevronRight class="text-muted-foreground size-4" />
      <div v-if="!produkStore.loadingState">{{ detailProdukState.title }}</div>
      <Skeleton v-else class="w-32 h-[16px]" />
    </div>
    <div class="w-full flex items-start gap-x-5">
      <div class="w-2/3 box-border">
        <!-- image -->
        <div class="w-full rounded-[8px] box-border overflow-hidden h-[350px] flex items-center justify-center mb-6">
          <img v-if="!produkStore.loadingState" :src="detailProdukState.banner || NoProdukImage" alt="" class="w-full">
          <Skeleton v-else class="w-full h-full" />
        </div>

        <!-- sub title -->
        <div class="w-full flex justify-between border-b pb-3 mb-5">
          <div class="flex items-center gap-x-2 text-muted-foreground text-[11px]">
            <Calendar v-if="!produkStore.loadingState" class="size-3" />
            <div v-if="!produkStore.loadingState">Dipublikasikan pada {{ detailProdukState.dateStartAt }}</div>
            <Skeleton v-if="produkStore.loadingState" class="w-96 h-[14px]" />
          </div>

          <div class="flex items-center justify-end gap-x-5">
            <div v-if="!produkStore.loadingState"
              class="bg-accent rounded-[4px] text-[10px] font-bold text-muted-foreground px-3 py-1">Bahan Pokok</div>
            <div v-if="!produkStore.loadingState"
              class="flex items-center justify-center gap-x-1 text-muted-foreground">
              <UsersRound class="size-3" />
              <div class="text-[11px] font-bold">50</div>
            </div>
            <Skeleton v-if="produkStore.loadingState" class="w-16 h-[16px] rounded-[4px]" />
            <Skeleton v-if="produkStore.loadingState" class="w-8 h-[16px]" />
          </div>
        </div>

        <div class="w-full">
          <Skeleton v-if="produkStore.loadingState" class="w-44 h-[22px] mb-5" />
          <h1 v-if="!produkStore.loadingState" class="font-bold text-lg mb-3">Spesifikasi Produk</h1>

          <div class="w-full">
            <div v-if="!produkStore.loadingState" class="w-full flex items-center gap-x-3">
              <div class="text-muted-foreground">Kebutuhan :</div>
              <div v-if="!produkStore.loadingState" class="">{{ detailProdukState.kebutuhan || '0' }}</div>
            </div>

            <div v-if="!produkStore.loadingState" class="w-full flex items-center gap-x-3">
              <div class="text-muted-foreground">Satuan :</div>
              <div v-if="!produkStore.loadingState" class="">{{ detailProdukState.satuan || '-' }}</div>
            </div>

            <div v-if="!produkStore.loadingState" class="w-full flex items-center gap-x-3">
              <div class="text-muted-foreground">Dimulai pada :</div>
              <div class="">{{ detailProdukState.dateStartAt }}</div>
            </div>

            <div v-if="!produkStore.loadingState" class="w-full flex items-center gap-x-3">
              <div class="text-muted-foreground">Selesai pada :</div>
              <div v-if="!produkStore.loadingState" class="">{{ detailProdukState.dateFinishAt }}</div>

            </div>

            <Skeleton v-if="produkStore.loadingState" class="w-24 h-[14px] mb-1.5" />
            <Skeleton v-if="produkStore.loadingState" class="w-20 h-[14px] mb-1.5" />
            <Skeleton v-if="produkStore.loadingState" class="w-44 h-[14px] mb-1.5" />
            <Skeleton v-if="produkStore.loadingState" class="w-44 h-[14px] mb-1.5" />
          </div>
        </div>
      </div>
      <div v-if="!produkStore.loadingState" class="w-1/3 box-border">
        <div class="w-full box-border rounded-[8px] border border-border">
          <div class="w-full p-6 bg-accent">
            <div
              class="inline-block w-auto bg-green-200 rounded-[4px] text-green-500 text-[11px] font-semibold px-3 py-1 mb-2">
              Open Bid
            </div>
            <h1 class="font-bold text-xl">{{ detailProdukState.title }}</h1>
          </div>
          <div class="w-full box-border p-6">
            <div class="w-full box-border mb-5">
              <div class="text-muted-foreground mb-1">Penawaran ditutup pada :</div>
              <div class="flex items-center gap-x-3 mb-8">
                <Clock class="size-4" />
                <div>{{ detailProdukState.dateFinishAt }}</div>
              </div>

              <div v-if="authStore.isAuthenticated" class="w-full">
                <template v-if="!detailProdukState.myBid">
                  <div class="w-full mb-5">
                    <InputGroup label="Masukkan Penawaran" v-model="payload.penawaran" type="text" :isMandatory="true"
                      v-model:errorMessage="validationErrors.penawaran" />
                  </div>

                  <div class="w-full">
                    <InputGroup label="Catatan" v-model="payload.catatan" type="textarea"
                      v-model:errorMessage="validationErrors.catatan" />
                  </div>
                </template>

                <div v-else>Anda sudah mengajukan penawaran, silahkan menunggu pemberitahuan selanjutnya.</div>
              </div>

              <div v-else>
                Silahkan masuk / atau daftar untu mengikuti penawaran
              </div>
            </div>

            <div class="w-full h-px bg-border"></div>

            <div class="w-full box-border py-5">
              <button @click.prevent="handleSubmit"
                class="w-full rounded-[4px] py-3 cursor-pointer text-white font-bold text-base flex items-center justify-center"
                :class="loadingSaveState ? 'bg-[#23DB85]/70' : 'bg-[#23DB85] hover:bg-[#23DB85]/70'">
                <span v-if="!loadingSaveState">Ajukan Penawaran</span>
                <Loader2 v-if="loadingSaveState" class="size-4 animate-spin" />
                <span v-if="loadingSaveState">Please Wait</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="produkStore.loadingState" class="w-1/3 box-border">
        <div class="w-full box-border rounded-[8px] border border-border">
          <div class="w-full p-6 bg-accent">
            <Skeleton class="w-18 h-6 mb-2" />
            <Skeleton class="w-52 h-[18px]" />
          </div>

          <div class="w-full box-border p-6">
            <div class="w-full box-border mb-5">
              <Skeleton class="w-42 h-[16px] mb-1" />
              <Skeleton class="w-72 h-[18px] mb-8" />

              <Skeleton class="w-full h-9 mb-5" />

              <Skeleton class="w-full h-16 mb-5" />
            </div>

            <div class="w-full h-px bg-border"></div>

            <div class="w-full box-border py-5">
              <Skeleton class="w-full h-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>