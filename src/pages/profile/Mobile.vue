<script setup>
import { ref } from 'vue';
import MainApp from '@/components/layouts/mobile/MainApp.vue';
import { AppBar } from '@/components/ui/app-bar';
import { PenIcon, ChevronRight, LockKeyhole, User, LogOut } from "lucide-vue-next";
import { WhatsappIcon } from '@/components/icons';

</script>

<template>
  <MainApp :show-bottom-menu="true" :show-app-bar="false" :show-back="false" :title="'Akun'">
    <div class="w-full box-border py-[12px] px-[16px] mb-20">
      <div class="w-full flex items-center py-4 gap-x-4">
        <div class="w-14 h-14 flex-none rounded-full bg-slate-200 relative">
          <div
            class="w-[24px] h-[24px] rounded-full bg-white border-2 border-[#EEEFF0] absolute -bottom-1 -right-1 flex items-center justify-center cursor-pointer">
            <PenIcon class="w-[12px] h-[12px]" />
          </div>
        </div>
        <div class="w-full flex-1 box-border">
          <div class="text-base font-semibold">Toko Jamstore</div>
          <div class="text-muted-foreground">jamstore212@gmail.com</div>
        </div>
      </div>

      <div class="w-full box-border">
        <div class="w-full h-[1px] bg-[#EEEEEE] mb-[20px]"></div>

        <div class="w-full flex items-center justify-between mb-[22px] cursor-pointer">
          <div class="flex items-center gap-x-[12px] cursor-pointer">
            <User class="size-5" />
            <div class="text-[#1D1D1D] text-[16px]">Ubah Profil</div>
          </div>
          <ChevronRight class="w-[20px] h-[20px] text-[#1D1D1D]" />
        </div>

        <div class="w-full flex items-center justify-between mb-[22px] cursor-pointer">
          <div class="flex items-center gap-x-[12px] cursor-pointer">
            <LockKeyhole class="size-5" />
            <div class="text-[#1D1D1D] text-[16px]">Ubah Sandi</div>
          </div>
          <ChevronRight class="w-[20px] h-[20px] text-[#1D1D1D]" />
        </div>

        <div class="w-full flex items-center justify-between mb-[22px] cursor-pointer">
          <div class="flex items-center gap-x-[12px] cursor-pointer">
            <WhatsappIcon class="size-5" />
            <div class="text-[#1D1D1D] text-[16px]">No. Whatsapp</div>
          </div>
          <ChevronRight class="w-[20px] h-[20px] text-[#1D1D1D]" />
        </div>

        <!-- logout -->
        <div class="w-full flex items-center justify-between mb-[22px] cursor-pointer">
          <div class="flex items-center gap-x-[12px] cursor-pointer text-red-500">
            <LogOut class="size-5 text-red-500" />
            <div class="text-[#1D1D1D] text-[16px] text-red-500">Keluar</div>
          </div>
          <ChevronRight class="w-[20px] h-[20px] text-red-500" />
        </div>
        <!-- lougout -->
      </div>
    </div>
  </MainApp>
</template>