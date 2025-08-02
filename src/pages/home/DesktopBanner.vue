<script setup>
import Ilustrasi from "@/assets/images/online-store.png";
</script>

<template>
  <section class="w-full flex lg:block flex-col relative bg-gradient-to-b from-muted/50 to-muted">
    <!-- kiri -->
    <div class="w-full max-w-[1536px] px-16 h-[600px] flex items-center">
      <div class="w-full lg:w-[600px]">
        <h5 class="text-sm font-semibold">SELAMAT DATANG</h5>
        <h1 class="font-extrabold text-5xl text-foreground mb-5">Semua penawaran berawal <span
            class="text-[#32D387]">Dari Kamu.</span></h1>
        <p class="mb-3">
          Kami sedang membutuhkan pasokan sembako dan membuka kesempatan bagi Anda yang memiliki stok untuk mengajukan
          penawaran.
          Kami percaya, kerja sama terbaik dimulai dari penawaran yang jujur, transparan, dan menguntungkan kedua belah
          pihak.
        </p>
        <p class="mb-5 italic">"Kami Menyampaikan Kebutuhan, Anda Memberikan Penawaran"</p>
        <!-- <a href="https://drive.google.com/file/d/1LJHQLTkFeI--V73Nl1cyCYUIgO9lUQT4/view?usp=sharing" target="blank" class="bg-[#23DB85] px-4 py-3 rounded font-semibold text-white"
            >Download Resume</a
          > -->
        <!-- <a href="/M_KHOIRUL_HUDA_RESUME.pdf" target="_blank"
          class="bg-[#23DB85] px-4 py-3 rounded font-semibold text-white">Download Resume</a> -->
      </div>
    </div>

    <!-- kanan -->
    <div class="bg-[#23DB85] w-full lg:w-96 h-full relative lg:absolute lg:top-0 lg:right-0">
      <div class="lg:absolute -bottom-1 -left-52">
        <div
          class="w-[360px] h-[360px] lg:w-[480px] lg:h-[480px] lg:rounded-full box-border overflow-hidden relative flex items-center justify-center">
          <img :src="Ilustrasi" alt="" class="h-full lg:h-[480px] absolute bottom-0" />
        </div>
      </div>
    </div>
  </section>
</template>