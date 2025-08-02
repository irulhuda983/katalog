<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";

const props = defineProps({
  class: { type: null, required: false },
  backPath: { type: null, required: false, default: null },
  showBack: { type: Boolean, required: false, default: true },
});

const router = useRouter();

const navigateToPath = () => {
  if (props.backPath) {
    router.push({ path: props.backPath });
  } else {
    router.go(-1);
  }
};
</script>

<template>
  <div class="w-full box-border sticky top-0 bg-white shadow-header z-10">
    <!-- <div class="w-full h-[48px]"></div> -->
    <div class="w-full box-border px-[16px] py-[12px] flex items-center justify-between gap-x-3">
      <div v-if="showBack" class="flex-none w-8">
        <ArrowLeft @click="navigateToPath" class="size-5 text-[#1D1D1D] cursor-pointer" />
      </div>
      <div class="flex-1 w-full relative flex items-center">
        <slot name="appbar-content"></slot>
      </div>
    </div>
  </div>
</template>