<template>
  <div class="flex flex-wrap justify-between items-start gap-4 px-6 py-10">
    <div v-for="(step, index) in steps" :key="index"
      class="relative flex flex-col items-center text-center w-full sm:w-[18%]">
      <!-- Dot circle -->
      <div
        class="w-8 h-8 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold mb-2 z-10 bg-white">
        {{ index + 1 }}
      </div>

      <!-- Title -->
      <h3 class="text-blue-600 font-semibold text-lg mb-1">{{ step.title }}</h3>

      <!-- Description -->
      <p class="text-gray-500 text-sm leading-relaxed">{{ step.description }}</p>

      <!-- Garis titik-titik ke kanan (kecuali terakhir) -->
      <div v-if="index < steps.length - 1"
        class="hidden sm:block absolute top-4 right-[-50%] w-full h-0.5 border-t border-dotted border-gray-300 z-0">
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  {
    title: "Cari Product",
    description: "Cari product yang sesuai dengan stock yang kamu miliki",
  },
  {
    title: "Pilih Product",
    description: "Pilih Product yang ingin kamu tawar",
  },
  {
    title: "Penawaran",
    description: "Masukkan penawaran anda dan tinggalkan info kontak yang bisa di hubungi.",
  },
  {
    title: "Pengumuman",
    description: "Setelah melakukan penawaran kami akan memilih dan memberi pemberitahuan pada situs ini atau via whatsapp",
  },
  {
    title: "Pembayaran",
    description: "Pembayaran akan dilakukan setelah barang sampai dan kami terima.",
  },
];
</script>
