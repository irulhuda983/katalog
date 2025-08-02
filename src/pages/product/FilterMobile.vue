<script setup>
import { reactive } from 'vue';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const props = defineProps({
  open: {
    type: Boolean,
    required: false,
    default: false
  }
});

const emits = defineEmits(['onClose']);

const params = reactive({
  is_active: null,
  status: null,
});

const handleFilter = () => {
  emits('onClose');
};
</script>

<template>
  <!-- filter -->
  <Sheet :open="open">
    <SheetContent asChild side="bottom" class="w-full rounded-t-[16px]">
      <SheetHeader>
        <SheetTitle class="text-[#1D1D1D] text-[16px] font-semibold">
          Filter
        </SheetTitle>

        <SheetDescription class="text-[14px] mb-[20px]">
          Pilih filter sesuai kebutuhan anda
        </SheetDescription>

        <div class="w-full box-border mb-[20px]">
          <div class="w-full box-border mb-[22px]">
            <Label class="font-medium mb-[10px] text-[#1D1D1D]">Ketersediaan Tanah</Label>
            <RadioGroup :default-value="params.status" :orientation="'vertical'" v-model="params.status">
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="ketersediaan1" :value="null" />
                <Label for="ketersediaan1">Semua</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="ketersediaan2" value="tersedia" />
                <Label for="ketersediaan2">Tersedia</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="ketersediaan3" value="terjual" />
                <Label for="ketersediaan3">Terjual</Label>
              </div>
            </RadioGroup>
          </div>

          <div class="w-full box-border mb-[20px]">
            <Label class="font-medium mb-[10px] text-[#1D1D1D]">Status Tanah</Label>
            <RadioGroup :default-value="params.is_active" v-model="params.is_active" :orientation="'vertical'">
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="statusTanah1" :value="null" />
                <Label for="statusTanah1">Semua</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="statusTanah2" value="1" />
                <Label for="statusTanah2">Aktif</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="statusTanah3" value="0" />
                <Label for="statusTanah3">Nonaktif</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div class="w-full flex items-center justify-between mb-2">
          <button @click.prevent="handleFilter()"
            class="cursor-pointer w-full rounded-[8px] py-[12px] bg-[#130160] text-white text-[14px] mr-3">
            Terapkan
          </button>

          <button @click.prevent="resetFilter"
            class="cursor-pointer w-full rounded-[8px] py-[12px] bg-red-500 text-white text-[14px]">
            Reset
          </button>
        </div>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>