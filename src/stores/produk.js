import { ref, computed } from "vue";
import { defineStore } from "pinia";
import api from "@/lib/api";

export const useProdukStore = defineStore("produk", () => {
  const listState = ref([]);
  const produkSegeraState = ref([]);
  const produkOpenedState = ref([]);
  const detailProdukState = ref({});
  const metaState = ref({});
  const paramsState = ref({});
  const detailState = ref({});
  const loadingState = ref(false);
  const loadingSaveState = ref(false);

  const resStatus = ref(null);

  const validationErrors = ref({});

  // setter
  const setParams = (items) => {
    paramsState.value = {
      ...paramsState.value,
      ...items
    };
  };


  // action
  const fetchListSegera = async () => {
    try {
      const { data } = await api.get('/produk-lelang/list-segera');

      produkSegeraState.value = data.data;
    } catch (error) {
      throw error;
    }
  };

  const fetchListOpened = async () => {
    try {
      const { data } = await api.get('/produk-lelang/list-opened');

      produkOpenedState.value = data.data;
    } catch (error) {
      throw error;
    }
  };

  const fetchListProduk = async () => {
    loadingState.value = true;
    try {
      const { data } = await api.get('/produk-lelang/list-produk', {
        params: paramsState.value
      });

      listState.value = data.data;
      metaState.value = data.meta;
    } catch (error) {
      throw error;
    } finally {
      loadingState.value = false;
    }
  };

  const showDetailProduk = async (id) => {
    loadingState.value = true;
    try {
      const { data } = await api.get(`/produk-lelang/list-produk/${id}/show`);

      detailProdukState.value = data.data;
    } catch (error) {
      throw error;
    } finally {
      loadingState.value = false;
    }
  };

  const createPenawaran = async (payload) => {
    loadingSaveState.value = true;
    try {
      const { data } = await api.post(`/produk-lelang/create-penawaran`, payload);

      resStatus.value = {
        success: true,
        message: "Berhasil membuat penawaran"
      };
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const rawErrors = error.response.data.errors;
        const parsedErrors = {};

        // Ambil key apa adanya dan hanya ambil error pertama
        for (const field in rawErrors) {
          parsedErrors[field] = rawErrors[field][0];
        }

        validationErrors.value = parsedErrors;
      }

      resStatus.value = error.response.data;
    } finally {
      loadingSaveState.value = false;
    }
  };

  return {
    listState,
    produkSegeraState,
    produkOpenedState,
    detailProdukState,
    metaState,
    paramsState,
    detailState,
    loadingState,
    loadingSaveState,
    resStatus,
    validationErrors,
    // setter
    setParams,
    // action
    fetchListProduk,
    fetchListOpened,
    fetchListSegera,
    showDetailProduk,
    createPenawaran,
  };
});
