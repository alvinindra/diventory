<script setup>
import print from 'vue3-print-nb'

const props = defineProps(['show', 'selectedQrCode'])
const emit = defineEmits(['update:show', 'close'])
const vPrint = print
</script>

<template>
  <UModal :model-value="props.show">
    <div class="">
      <div class="p-4 flex border-bottom border border-solid">
        <div class="my-auto text-xl font-medium">
          QR CODE
        </div>
        <UIcon name="i-heroicons-x-mark" class="w-6 h-6 ms-auto my-auto cursor-pointer" @click="emit('close')" />
      </div>
      <div class="p-4 mx-auto flex">
        <img id="printQrCode" class="max-w-[350px] max-h-[350px] w-full mx-auto print:max-w-[150px] print:max-h-[150px]" :src="selectedQrCode" alt="">
      </div>
      <div class="p-4 border border-top border-solid">
        <UButton v-print="'#printQrCode'" type="button" class="text-center align-middle justify-center w-full" label="Print QR Code" />
      </div>
    </div>
  </UModal>
</template>
