<script setup>
import { cn } from '@/lib/utils';
import { AppBar } from '@/components/ui/app-bar';
import BottomMenu from './BottomMenu.vue';

const props = defineProps({
  class: { type: null, required: false },
  showAppBar: { type: null, required: false },
  showBottomMenu: { type: null, required: false },
  title: { type: null, required: false },
  showBack: { type: null, required: false, default: true },
})

</script>

<template>
  <div :class="cn('w-full box-border', props.class)">
    <AppBar v-if="showAppBar" :show-back="showBack">
      <template #appbar-content>
        <div class="h-9 font-semibold text-[16px] flex items-center">{{ title }}</div>
      </template>
    </AppBar>
    <slot />
    <BottomMenu v-if="showBottomMenu" />
  </div>
</template>