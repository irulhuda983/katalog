import { ref, computed, markRaw } from "vue";
import { defineStore } from "pinia";
import { AppleIcon, BbqIcon, ChickenIcon, EggIcon, CornIcon, ProductIcon } from "@/components/icons";

export const useKategoriStore = defineStore("kategori", () => {
  const list = ref([
    {
      nama: "Semua Kategori",
      icon: markRaw(ProductIcon)
    },
    {
      nama: "Bahan Pokok",
      icon: markRaw(CornIcon)
    },
    {
      nama: "Bahan Hewani",
      icon: markRaw(ChickenIcon)
    },
    {
      nama: 'Bahan Nabati',
      icon: markRaw(EggIcon)
    },
    {
      nama: "Bahan Bumbu",
      icon: markRaw(BbqIcon)
    },
    {
      nama: 'Bahan Buah',
      icon: markRaw(AppleIcon)
    }
  ]);

  return {
    list
  };
});