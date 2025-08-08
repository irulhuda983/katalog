<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { useDialogLogin } from '@/composables/useDialogLogin';
import { useAuthStore } from '@/stores/auth';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { InputGroup } from '@/components/ui/input-group';
import { Button } from '@/components/ui/button';
import { Loader2, X } from 'lucide-vue-next';

const isLoading = ref(false);
const authStore = useAuthStore();
const { isOpen, dialogProps, closeDialog } = useDialogLogin();

const payload = reactive({
  email: '',
  password: ''
});

const register = reactive({
  email: '',
  nama: '',
  telp: '',
  password: ''
});

const validationErrors = ref({});
const errMessage = ref(null);

const mode = ref(dialogProps.page || 'login');

const changeMode = (type) => {
  mode.value = type;

  resetPayload();
};

const resetPayload = () => {
  payload.email = '';
  payload.password = '';

  register.email = '';
  register.nama = '';
  register.telp = '';
  register.password = '';

  validationErrors.value = {};
  errMessage.value = null;
  isLoading.value = false;
};

const handleLogin = async () => {
  if (isLoading.value) return;

  isLoading.value = true;
  errMessage.value = null;
  try {
    const data = await authStore.login(payload);
    location.reload();
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

    errMessage.value = error.response.data.message;
  } finally {
    isLoading.value = false;
  }
};

const handleRegister = async () => {
  if (isLoading.value) return;

  isLoading.value = true;
  try {
    const data = await authStore.register(register);

    location.reload();
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

    errMessage.value = error.response.data.message;
  } finally {
    isLoading.value = false;
  }
};

watch(isOpen, (newVal) => {
  if (!newVal) {
    changeMode('login');
  }
})

</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogContent class="w-full sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle class="font-bold text-xl">
          {{ mode == 'login' ? 'Masuk' : 'Daftar' }}
        </DialogTitle>
        <DialogDescription>
          {{
            mode == 'login' ?
              'Silahkan login untuk berpartisipasi dalam penawaran.'
              : 'Daftarkan diri anda dan tawarkan barang anda.'
          }}
        </DialogDescription>
      </DialogHeader>

      <div v-if="errMessage"
        class="text-xs bg-red-500 rounded-[4px] px-4 pr-2 py-2 text-background relative flex items-start justify-between">
        <div>{{ errMessage }}</div>
        <X class="size-4 cursor-pointer" @click="errMessage = null" />
      </div>

      <div v-if="mode == 'login'" class="w-full box-border">
        <div class="w-full mb-5">
          <InputGroup label="Email" v-model="payload.email" v-model:errorMessage="validationErrors.email" />
        </div>
        <div class="w-full mb-5">
          <InputGroup label="Password" v-model="payload.password" type="password"
            v-model:errorMessage="validationErrors.password" />
        </div>

        <div class="w-full">
          <Button @click.prevent="handleLogin" type="submit"
            class="w-full rounded-[4px] h-12 cursor-pointer mb-5 flex items-center justify-center"
            :class="isLoading ? 'bg-blue-400 hover:bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'">
            <div v-if="!isLoading">Masuk</div>
            <Loader2 v-if="isLoading" class="size-5 animate-spin" />
            <div v-if="isLoading">Please Wait</div>
          </Button>
        </div>

        <div class="w-full box-border flex items-center justify-center flex-col relative mb-5">
          <div class="w-full h-px bg-border"></div>
          <div class="absolute bg-white px-3 text-[12px]">Atau</div>
        </div>

        <div class="w-full">

          <Button @click.prevent="changeMode('register')" variant="outline" type="button"
            class="w-full h-12 rounded-[4px] cursor-pointer border-primary">
            Daftar
          </Button>
        </div>
      </div>

      <div v-else class="w-full box-border">
        <div class="w-full mb-5">
          <InputGroup label="Nama / Toko" v-model="register.nama" v-model:errorMessage="validationErrors.nama" />
        </div>

        <div class="w-full mb-5">
          <InputGroup label="Email" v-model="register.email" v-model:errorMessage="validationErrors.email" />
        </div>

        <div class="w-full mb-5">
          <InputGroup label="No. Whatsapp" v-model="register.telp" v-model:errorMessage="validationErrors.telp" />
        </div>

        <div class="w-full mb-5">
          <InputGroup label="Password" v-model="register.password" type="password"
            v-model:errorMessage="validationErrors.password" />
        </div>

        <div class="w-full">

          <Button @click.prevent="handleRegister" type="submit"
            class="w-full rounded-[4px] h-12 cursor-pointer mb-5 flex items-center justify-center"
            :class="isLoading ? 'bg-blue-400 hover:bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'">
            <div v-if="!isLoading">Daftar</div>
            <Loader2 v-if="isLoading" class="size-5 animate-spin" />
            <div v-if="isLoading">Please Wait</div>
          </Button>

          <div class="w-full">
            <p class="text-center text-muted-foreground">Sudah punya akun ? <a href="#" @click.prevent="mode = 'login'"
                class="text-blue-600">Login</a></p>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
