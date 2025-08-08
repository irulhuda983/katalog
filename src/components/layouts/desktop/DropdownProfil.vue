<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { User, LogOut, History } from "lucide-vue-next";

const authStore = useAuthStore();
const router = useRouter();

const isOpen = ref(false);
let hideTimeout = null;

function showMenu() {
  clearTimeout(hideTimeout);
  isOpen.value = true;
}

function hideMenu() {
  hideTimeout = setTimeout(() => {
    isOpen.value = false;
  }, 200);
}

function handleClick(route) {
  isOpen.value = false;
  if (route) {
    router.push({ name: route });
  }
}

function getInitials(name) {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return parts.map(word => word[0]).join('').toUpperCase();
}
</script>

<template>
  <div v-if="authStore.isAuthenticated" class="relative inline-block" @mouseenter="showMenu" @mouseleave="hideMenu">
    <button class="size-10 rounded-full bg-slate-100 font-bold text-muted-foreground cursor-pointer bg-cover bg-center"
      :style="authStore?.user?.foto ? { backgroundImage: `url(${authStore.user.foto})` } : {}">
      {{ getInitials(authStore.user?.name || 'JS') }}
    </button>

    <!-- Transition wrapper -->
    <transition name="fade-slide" enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-2" enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2">
      <div v-if="isOpen"
        class="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-slate-200 rounded-md p-2 z-50">
        <div @click="handleClick('profile')"
          class="flex items-center gap-x-2 px-3 py-2 cursor-pointer text-muted-foreground hover:text-black hover:bg-slate-100 rounded">
          <User class="size-4" />
          <span class="text-sm">Ubah Profil</span>
        </div>

        <div @click="handleClick('history')"
          class="flex items-center gap-x-2 px-3 py-2 cursor-pointer text-muted-foreground hover:text-black hover:bg-slate-100 rounded">
          <History class="size-4" />
          <span class="text-sm">Histori Penawaran</span>
        </div>

        <div @click="handleClick()"
          class="flex items-center gap-x-2 px-3 py-2 cursor-pointer text-muted-foreground hover:text-red-500 hover:bg-slate-100 rounded">
          <LogOut class="size-4" />
          <span class="text-sm">Keluar</span>
        </div>
      </div>
    </transition>
  </div>
</template>
