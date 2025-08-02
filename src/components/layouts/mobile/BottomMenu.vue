<script setup>
import { ref, markRaw } from "vue";
import { useRouter, useRoute } from "vue-router";
import { HomeIcon, SearchIcon, ProfileIcon, ClipboardIcon } from "@/components/icons";

const router = useRouter();
const route = useRoute();
const menus = ref([
  {
    name: "Home",
    icon: markRaw(HomeIcon),
    routeName: "home",
    class: "w-[22px] h-[22px]"
  },
  {
    name: "Cari",
    icon: markRaw(SearchIcon),
    routeName: "product",
    class: "w-[22px] h-[22px]"
  },
  {
    name: "History",
    icon: markRaw(ClipboardIcon),
    routeName: "history",
    class: "w-[22px] h-[22px]"
  },
  {
    name: "Akun",
    icon: markRaw(ProfileIcon),
    routeName: "profile",
    class: "w-[22px] h-[22px]"
  },
])

</script>

<template>
  <div
    class="px-2 py-[14px] gap-1 w-full h-[72px] fixed bottom-0 bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] grid grid-cols-4 gap-2">
    <div v-for="(item, i) in menus" :key="i" @click.prevent="router.push({ name: item.routeName })"
      class="cursor-pointer w-full box-border flex flex-col items-center justify-center">
      <div class="w-full mb-1 flex items-center justify-center"
        :class="route.name == item.routeName ? 'text-emerald-500' : 'text-[#AFAFAF]'">
        <component :is="item.icon" :class="item.class" :fill="route.name == item.routeName ? '#10b981' : '#AFAFAF'" />
      </div>
      <div class="w-full text-[12px] text-center"
        :class="route.name == item.routeName ? 'text-emerald-500 font-medium' : 'text-[#AFAFAF]'">{{ item.name
        }}</div>
    </div>
  </div>
</template>