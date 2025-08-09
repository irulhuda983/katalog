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

  const listStatus = ref([
    {
      nama: 'Semua',
      slug: "all",
    },
    {
      nama: 'Segera',
      slug: "segera",
    },
    {
      nama: 'Open Bid',
      slug: "open",
    },
  ]);

  const listRange = ref([
    {
      nama: 'Semua',
      slug: "all",
    },
    {
      nama: '7 hari',
      slug: "7days",
    },
    {
      nama: '14 hari',
      slug: "14days",
    },
    {
      nama: '30 hari',
      slug: "30days",
    },
  ]);

  return {
    list,
    listStatus,
    listRange
  };
});