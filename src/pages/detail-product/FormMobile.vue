<script setup>
import { reactive, ref } from 'vue';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { InputGroup } from '@/components/ui/input-group';
import { X } from 'lucide-vue-next';
import { toast } from 'vue-sonner';
import { useProdukStore } from '@/stores/produk';

const isLoading = ref(false);
const produkStore = useProdukStore();

const props = defineProps({
  open: {
    type: Boolean,
    required: false,
    default: false
  },
  payload: {
    type: null,
    required: false,
    default: {}
  },
  tgl: {
    type: null,
    required: false,
    default: null
  }
});

const emits = defineEmits(['onClose']);

const close = () => {
  emits('onClose');
};

const handleSubmit = async () => {
  if (isLoading.value) return;

  isLoading.value = true;
  try {
    await produkStore.createPenawaran({
      ...props.payload,

    });

    const res = produkStore.resStatus;

    if (res && res.success) {
      toast.success(res.message);
      produkStore.showDetailProduk(props.payload.idproductOffer);
      close();
    }
  } catch (error) {
    toast.error(error.message);
  } finally {
    isLoading.value = false;
  }

};
</script>

<template>
  <!-- filter -->
  <Sheet :open="open">
    <SheetContent asChild side="bottom" class="w-full box-border rounded-[8px]">
      <SheetHeader>
        <div class="w-full flex items-center justify-between">
          <SheetTitle class="text-[#1D1D1D] text-[16px] font-semibold">
            Buat Penawaran Mu
          </SheetTitle>
          <button @click.prevent="close()" class="cursor-pointer text-[14px]">
            <X class="size-5" />
          </button>
        </div>

        <SheetDescription class="text-[14px] mb-[20px]">
          <div class="text-muted-foreground text-xs">Penawaran ditutup pada :</div>
          <div class="text-[12px]">{{ tgl }}</div>
        </SheetDescription>

        <div class="w-full box-border mb-[20px]">
          <div class="w-full box-border mb-5">

            <div class="w-full mb-5">
              <InputGroup label="Masukkan Penawaran" v-model="payload.penawaran" type="text" :isMandatory="true" />
            </div>

            <div class="w-full">
              <InputGroup label="Catatan" v-model="payload.catatan" type="textarea" />
            </div>
          </div>
        </div>

        <div class="w-full flex items-center justify-between mb-2">
          <button @click.prevent="handleSubmit"
            class="cursor-pointer w-full rounded-[8px] py-[12px] bg-[#23DB85] hover:bg-[#23DB85]/70 text-white text-[14px] mr-3">
            Ajukan
          </button>

        </div>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>