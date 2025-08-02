<script setup>
import { ref } from "vue";
import { useKategoriStore } from "@/stores/kategori";

import { Mail, Map } from "lucide-vue-next";
import { WhatsappIcon } from "@/components/icons";
import LogoImg from "@/assets/images/logo-putih.png";

const kategoriStore = useKategoriStore();
</script>

<template>
  <footer class="w-full flex lg:block flex-col relative bg-[#18B87A]">
    <div class="w-full max-w-[1536px] px-16 py-[80px] box-border flex items-start justify-between gap-x-6 text-white">
      <div class="w-[500px] flex-none">
        <img :src="LogoImg" alt="" class="h-[60px] mb-[12px]" />
        <div class="text-white/80 w-[300px]">
          Kami Menyampaikan Kebutuhan, Anda Memberikan Penawaran
        </div>
      </div>
      <div class="w-full flex-1">
        <div class="mb-5 text-lg font-bold">Kategori</div>
        <a v-for="(item, i) in kategoriStore.list" :key="i" href=""
          class="block w-full mb-3 text-white/70 hover:text-white">
          {{ item.nama }}
        </a>
      </div>
      <div class="w-full flex-1">
        <div class="mb-5 text-lg font-bold">Hubungi Kami</div>
        <div class="w-full flex items-center gap-x-2 mb-2">
          <Mail class="size-4" />
          <div class="text-white/80">jamal@gmail.com</div>
        </div>
        <div class="w-full flex items-center gap-x-2 mb-2">
          <WhatsappIcon class="size-4" />
          <div class="text-white/80">0821-2345-6789</div>
        </div>
        <div class="w-full flex items-start gap-x-2 mb-2">
          <Map class="size-4 flex-none mt-1" />
          <div class="text-white/80 flex-1">
            Jl. Coba bojonegoro, Kec. Bojonegoro Kab. Bojonegoro Jawa timur
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div class="mb-5 text-lg font-bold">Powered and supported by</div>
        <div class="text-white/80">Copyright © 2025 irul huda, All Rights Reserved</div>
      </div>
    </div>
  </footer>
</template>