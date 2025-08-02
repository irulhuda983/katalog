// composables/useResponsive.ts
import { ref, onMounted, onUnmounted } from 'vue';

export function useResponsive(threshold = 768) {
  const isMobile = ref(window.innerWidth <= threshold);

  const update = () => {
    isMobile.value = window.innerWidth <= threshold;
  };

  onMounted(() => window.addEventListener('resize', update));
  onUnmounted(() => window.removeEventListener('resize', update));

  return { isMobile };
}
