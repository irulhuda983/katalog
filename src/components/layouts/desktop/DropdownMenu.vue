<script setup>
import { useKategoriStore } from "@/stores/kategori";
import { useRouter } from "vue-router";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const kategoriStore = useKategoriStore();
const router = useRouter();

const navigateToProduct = () => {
  router.push({
    name: 'product'
  });
};
</script>
<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger class="cursor-pointer">Produk</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid gap-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
            <li v-for="(item, i) in kategoriStore.list" :key="i" class="row-span-3">
              <NavigationMenuLink as-child>
                <a class="flex flex-row items-center gap-x-3 select-none rounded-md no-underline outline-none focus:shadow-md"
                  href="/" @click.prevent="navigateToProduct">
                  <component :is="item.icon" class="size-5" />
                  <div>{{ item.nama }}</div>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>