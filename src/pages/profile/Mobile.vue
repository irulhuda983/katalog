<script setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";

import MainApp from '@/components/layouts/mobile/MainApp.vue';
import { AppBar } from '@/components/ui/app-bar';
import { PenIcon, ChevronRight, LockKeyhole, User, LogOut } from "lucide-vue-next";
import { WhatsappIcon } from '@/components/icons';
import { X } from 'lucide-vue-next';
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

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const router = useRouter();

const openForm = ref(false);
const typeForm = ref('profil');

const payload = reactive({
  nama: user?.value?.nama,
  email: user?.value?.email,
});

const handleOpenForm = (type) => {
  typeForm.value = type;
  openForm.value = true;
};

const logout = () => {
  authStore.logout();
  router.push({ path: '/' });
};
</script>

<template>

  <MainApp :show-bottom-menu="true" :show-app-bar="false" :show-back="false" :title="'Akun'">
    <div v-if="user" class="w-full box-border py-[12px] px-[16px] mb-20">
      <div class="w-full flex items-center py-4 gap-x-4">
        <div class="w-14 h-14 flex-none rounded-full bg-slate-200 relative">
          <img v-if="user.foto" :src="user.foto" alt="">
          <div
            class="w-[24px] h-[24px] rounded-full bg-white border-2 border-[#EEEFF0] absolute -bottom-1 -right-1 flex items-center justify-center cursor-pointer">
            <PenIcon class="w-[12px] h-[12px]" />
          </div>
        </div>
        <div class="w-full flex-1 box-border">
          <div class="text-base font-semibold">{{ user.nama }}</div>
          <div class="text-muted-foreground">{{ user.email }}</div>
        </div>
      </div>

      <div class="w-full box-border">
        <div class="w-full h-[1px] bg-[#EEEEEE] mb-[20px]"></div>

        <div @click.prevent="handleOpenForm('profil')"
          class="w-full flex items-center justify-between mb-[22px] cursor-pointer">
          <div class="flex items-center gap-x-[12px] cursor-pointer">
            <User class="size-5" />
            <div class="text-[#1D1D1D] text-[16px]">Ubah Profil</div>
          </div>
          <ChevronRight class="w-[20px] h-[20px] text-[#1D1D1D]" />
        </div>

        <div @click.prevent="handleOpenForm('password')"
          class="w-full flex items-center justify-between mb-[22px] cursor-pointer">
          <div class="flex items-center gap-x-[12px] cursor-pointer">
            <LockKeyhole class="size-5" />
            <div class="text-[#1D1D1D] text-[16px]">Ubah Sandi</div>
          </div>
          <ChevronRight class="w-[20px] h-[20px] text-[#1D1D1D]" />
        </div>

        <div @click.prevent="handleOpenForm('telp')"
          class="w-full flex items-center justify-between mb-[22px] cursor-pointer">
          <div class="flex items-center gap-x-[12px] cursor-pointer">
            <WhatsappIcon class="size-5" />
            <div class="text-[#1D1D1D] text-[16px]">No. Whatsapp</div>
          </div>
          <ChevronRight class="w-[20px] h-[20px] text-[#1D1D1D]" />
        </div>

        <!-- logout -->
        <div @click.prevent="logout()" class="w-full flex items-center justify-between mb-[22px] cursor-pointer">
          <div class="flex items-center gap-x-[12px] cursor-pointer text-red-500">
            <LogOut class="size-5 text-red-500" />
            <div class="text-[#1D1D1D] text-[16px] text-red-500">Keluar</div>
          </div>
          <ChevronRight class="w-[20px] h-[20px] text-red-500" />
        </div>
        <!-- lougout -->
      </div>
    </div>

    <Sheet :open="openForm">
      <SheetContent asChild side="bottom" class="w-full rounded-t-[16px]">
        <SheetHeader>
          <SheetTitle class="text-[#1D1D1D] text-[16px] font-semibold flex items-center justify-between">
            <h1>Update Profil</h1>
            <button class="cursor-pointer" @click.prevent="openForm = false">
              <X class="w-4" />
            </button>
          </SheetTitle>


          <div v-if="typeForm == 'profil'" class="w-full box-border mb-[20px]">
            <div class="w-full mb-5">
              <InputGroup label="Nama" v-model="payload.nama" />
            </div>

            <div class="w-full mb-5">
              <InputGroup label="Email" v-model="payload.email" />
            </div>
          </div>

          <div v-if="typeForm == 'password'" class="w-full box-border mb-[20px]">
            <div class="w-full mb-5">
              <InputGroup label="Password Lama" v-model="payload.oldPassword" />
            </div>

            <div class="w-full mb-5">
              <InputGroup label="Password Baru" v-model="payload.newPassword" />
            </div>
          </div>

          <div v-if="typeForm == 'telp'" class="w-full box-border mb-[20px]">
            <div class="w-full mb-5">
              <InputGroup label="No Telp / No. Whatsapp" v-model="payload.telp" />
            </div>
          </div>

          <div class="w-full flex items-center justify-between mb-2">
            <Button class="w-full rounded-[4px] bg-blue-500 hover:bg-blue-400 cursor-pointer">Simpan</Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </MainApp>
</template>