<script setup>
import { CircleAlert } from 'lucide-vue-next';
const props = defineProps({
  message: { type: null, required: false }
});
</script>

<template>
  <div v-if="message" class="text-red-500 mt-1.5 text-[10px] flex items-center gap-x-2">
    <CircleAlert class="size-3" />
    <div>{{ message }}</div>
  </div>
</template>