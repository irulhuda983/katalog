<script setup>
import { ref } from "vue";
import { useDialogLogin } from '@/composables/useDialogLogin';
import { useRoute } from "vue-router";

import LogoImg from "@/assets/images/logo.png";
import { Heart } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import DropdownMenu from "./DropdownMenu.vue";
import { InputGroup } from "@/components/ui/input-group";

const dialogLogin = useDialogLogin();
const route = useRoute();
const search = ref('');
</script>

<template>
  <header
    class="w-full box-border sticky top-0 box-border flex items-center justify-center bg-background border-b shadow-custom z-50">
    <div class="w-full box-border px-16 h-[4rem] flex items-center justify-between">
      <div class="w-full box-border flex items-center mr-6">
        <div class="mr-20">
          <img :src="LogoImg" class="w-32" alt="">
        </div>
        <div class="w-full flex items-center justify-center gap-x-2">
          <DropdownMenu v-if="route.name == 'home'" />
          <router-link v-if="route.name != 'home'" to="home"
            class="mr-5 text-muted-foreground font-medium hover:text-foreground">Home</router-link>
          <div class="w-full flex-1">
            <InputGroup v-model="search" type="text" placeholder="Cari produk" />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end gap-x-6">
        <button class="cursor-pointer text-muted-foreground">
          <Heart class="size-6" />
        </button>

        <Button @click.prevent="dialogLogin.openDialog({
          page: 'login'
        })" variant="outline"
          class="cursor-pointer text-muted-foreground hover:text-foreground text-[14px] rounded-[4px]">
          Daftar / Masuk
        </Button>
      </div>
    </div>
  </header>
</template>
