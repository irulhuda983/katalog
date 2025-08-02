<script setup>
import { ref, watch } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ErrorInput } from "@/components/ui/error-input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const props = defineProps({
  type: { type: null, required: false, default: 'text' },
  defaultValue: { type: [String, Number], required: false },
  modelValue: { type: [String, Number], required: false },
  label: { type: null, required: false },
  class: { type: null, required: false },
  labelClass: { type: null, required: false },
  errorMessage: { type: null, required: false, default: null },
  placeholder: { type: null, required: false, default: '' },
  isMandatory: { type: null, required: false, default: false },
  tooltip: { type: null, required: false, default: null },
  disabled: { type: null, required: false, default: false },
});

const emits = defineEmits(["update:modelValue", "update:errorMessage", "onFocus"]);

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});

const errMessage = useVModel(props, 'errorMessage', emits);

const handleFocus = () => {
  errMessage.value = null;
  emits('onFocus');
}

</script>

<template>
  <div class="w-full box-border group">
    <Label v-if="label" class="flex items-center gap-x-3 mb-2 group-focus-within:text-primary"
      :class="errMessage ? 'text-red-500' : ''">
      <div>
        {{ label ?? 'Label' }}
        <span v-if="isMandatory">*</span>
      </div>
      <div v-if="tooltip" class="box-border">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="size-3 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"
                  class="w-full h-full fill-current">
                  <path
                    d="m13,18c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm-.064-12.893c-1.221-.279-2.47,0-3.428.765-.958.764-1.508,1.904-1.508,3.128,0,.276.224.5.5.5s.5-.224.5-.5c0-.918.412-1.773,1.131-2.347.719-.574,1.661-.782,2.582-.572,1.074.245,1.96,1.131,2.205,2.205.307,1.345-.285,2.688-1.473,3.343-1.218.672-1.946,1.832-1.946,3.103v.268c0,.276.224.5.5.5s.5-.224.5-.5v-.268c0-.901.534-1.733,1.428-2.227,1.583-.872,2.373-2.657,1.965-4.441-.333-1.462-1.495-2.624-2.957-2.957Zm11.064,6.893c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z" />
                </svg>
              </button>
            </TooltipTrigger>
            <TooltipContent class="text-foreground bg-background">
              <p>{{ tooltip }}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Label>
    <Textarea v-if="type == 'textarea'" v-model="modelValue" class="rounded-[4px]" />
    <Input v-else v-model="modelValue" :placeholder="placeholder" :type="type" :disabled="disabled"
      class="rounded-[4px]" :class="errMessage ? 'border-red-500' : ''" @focus="handleFocus" />
  </div>

  <ErrorInput :message="errMessage" />
</template>
