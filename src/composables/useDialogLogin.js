import { ref, reactive } from 'vue';

const isOpen = ref(false);
const dialogProps = reactive({});

export function useDialogLogin() {
  const openDialog = (props) => {
    Object.assign(dialogProps, props);
    isOpen.value = true;
  };

  const closeDialog = () => {
    isOpen.value = false;
    Object.keys(dialogProps).forEach((key) => delete dialogProps[key]);
  };

  return {
    isOpen,
    dialogProps,
    openDialog,
    closeDialog,
  };
}
