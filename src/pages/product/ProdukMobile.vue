<script setup>
import { ref } from 'vue';
import MainApp from '@/components/layouts/mobile/MainApp.vue';
import { AppBar } from '@/components/ui/app-bar';
import { InputGroup } from "@/components/ui/input-group";
import { Filter } from 'lucide-vue-next';

import ListMobile from './ListMobile.vue';
import FilterMobile from './FilterMobile.vue';

const search = ref('');
const openFilter = ref(false);
</script>

<template>
  <MainApp :show-bottom-menu="true">
    <AppBar :show-back="false">
      <template #appbar-content>
        <div class="w-full flex items-center justify-between">
          <div class="w-full flex-1 mr-2">
            <InputGroup v-model="search" placeholder="Cari Produk" />
          </div>
          <div @click.prevent="openFilter = true"
            class="w-9 h-9 flex-none flex items-center justify-center border border-border rounded-[4px] text-muted-foreground cursor-pointer">
            <Filter class="size-5" />
          </div>
        </div>
      </template>
    </AppBar>
    <div class="w-full box-border py-[12px] px-[16px] mb-20">
      <ListMobile />
    </div>

    <FilterMobile :open="openFilter" @on-close="openFilter = false" />
  </MainApp>
</template>