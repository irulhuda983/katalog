<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { useDialogLogin } from '@/composables/useDialogLogin';

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

const mode = ref(dialogProps.page || 'login');

const changeMode = (type) => {
  mode.value = type;
};

const resetPayload = () => {
  mode.value = 'login';
};

watch(isOpen, (newVal) => {
  if (!newVal) {
    resetPayload();
  }
})

</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogContent class="sm:max-w-[425px]">
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
      <div v-if="mode == 'login'" class="w-full box-border">
        <div class="w-full mb-5">
          <InputGroup label="Email" v-model="payload.email" />
        </div>
        <div class="w-full mb-5">
          <InputGroup label="Password" v-model="payload.password" type="password" />
        </div>

        <div class="w-full">
          <Button @click.prevent="closeDialog" type="submit"
            class="w-full rounded-[4px] h-12 cursor-pointer mb-5 bg-blue-500 hover:bg-blue-600">
            Masuk
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
          <InputGroup label="Nama / Toko" v-model="register.nama" />
        </div>

        <div class="w-full mb-5">
          <InputGroup label="Email" v-model="register.email" />
        </div>

        <div class="w-full mb-5">
          <InputGroup label="No. Whatsapp" v-model="register.telp" />
        </div>

        <div class="w-full mb-5">
          <InputGroup label="Password" v-model="register.password" type="password" />
        </div>

        <div class="w-full">
          <Button @click.prevent="closeDialog" type="submit"
            class="w-full rounded-[4px] h-12 cursor-pointer mb-5 bg-blue-500 hover:bg-blue-600">
            Daftar
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
