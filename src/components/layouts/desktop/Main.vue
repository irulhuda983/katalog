<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import { DialogLogin } from '@/components/ui/dialog-login';
</script>

<template>
  <div class="w-full min-h-screen box-border bg-[#F9F9F9]">
    <Header />
    <main class="w-full box-border flex justify-center items-center flex-col">
      <div class="w-full box-border">
        <RouterView />

        <Footer />
      </div>
    </main>
  </div>

  <DialogLogin />
</template>