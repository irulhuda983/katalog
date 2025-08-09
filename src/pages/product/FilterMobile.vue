<script setup>
import { reactive, watch, inject, onMounted } from 'vue';
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

import { useKategoriStore } from '@/stores/kategori';
const kategoriStore = useKategoriStore();
const produkStore = inject('produkStore');

const props = defineProps({
  open: {
    type: Boolean,
    required: false,
    default: false
  },
  params: {
    type: null, required: false, default: {
      status: 'all',
      kategori: "all",
      range: 'all'
    }
  }
});

const emits = defineEmits(['onClose']);

const handleFilter = () => {
  produkStore.fetchListProduk();
  emits('onClose');
};

watch(() => props.params.kategori, (newVal) => {
  produkStore.setParams({
    kategori: newVal
  });
});

watch(() => props.params.status, (newVal) => {
  produkStore.setParams({
    status: newVal
  });
});

watch(() => props.params.range, (newVal) => {
  produkStore.setParams({
    range: newVal
  });
});
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
            <Label class="font-medium mb-[10px] text-[#1D1D1D]">Kategori</Label>
            <RadioGroup :default-value="params.kategori" :orientation="'vertical'" v-model="params.kategori">
              <div v-for="(item, i) in kategoriStore.list" :key="i" class="flex items-center space-x-2">
                <RadioGroupItem id="{{ item.slug }}" :value="item.slug" />
                <Label for="{{ item.slug }}">{{ item.nama }}</Label>
              </div>

            </RadioGroup>
          </div>

          <div class="w-full box-border mb-[20px]">
            <Label class="font-medium mb-[10px] text-[#1D1D1D]">Status</Label>
            <RadioGroup :default-value="params.status" v-model="params.status" :orientation="'vertical'">
              <div v-for="(item, i) in kategoriStore.listStatus" :key="i" class="flex items-center space-x-2">
                <RadioGroupItem id="{{ item.slug }}" :value="item.slug" />
                <Label for="{{ item.slug }}">{{ item.nama }}</Label>
              </div>

            </RadioGroup>
          </div>

          <div class="w-full box-border mb-[20px]">
            <Label class="font-medium mb-[10px] text-[#1D1D1D]">Terakhir di publish</Label>
            <RadioGroup :default-value="params.range" v-model="params.range" :orientation="'vertical'">
              <div v-for="(item, i) in kategoriStore.listRange" :key="i" class="flex items-center space-x-2">
                <RadioGroupItem id="{{ item.slug }}" :value="item.slug" />
                <Label for="{{ item.slug }}">{{ item.nama }}</Label>
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