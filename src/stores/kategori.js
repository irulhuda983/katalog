import { ref, computed, markRaw } from "vue";
import { defineStore } from "pinia";
import { AppleIcon, BbqIcon, ChickenIcon, EggIcon, CornIcon, ProductIcon } from "@/components/icons";

export const useKategoriStore = defineStore("kategori", () => {
  const list = ref([
    {
      nama: "Semua Kategori",
      slug: "all",
      icon: markRaw(ProductIcon)
    },
    {
      nama: "Bahan Pokok",
      slug: "bahan-pokok",
      icon: markRaw(CornIcon)
    },
    {
      nama: "Bahan Hewani",
      slug: "bahan-hewani",
      icon: markRaw(ChickenIcon)
    },
    {
      nama: 'Bahan Nabati',
      slug: "bahan-nabati",
      icon: markRaw(EggIcon)
    },
    {
      nama: "Bahan Pelengkap",
      slug: "bahan-pelengkap",
      icon: markRaw(BbqIcon)
    },
    {
      nama: 'Bahan Buah',
      slug: "bahan-buah",
      icon: markRaw(AppleIcon)
    }
  ]);

  return {
    list
  };
});