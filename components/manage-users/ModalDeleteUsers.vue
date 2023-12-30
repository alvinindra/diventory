<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';

const props = defineProps(['show'])
const emit = defineEmits(['update:show', 'close'])

const state = reactive({
  nama_lengkap: undefined,
  jabatan: undefined,
  username: undefined,
  email: undefined,
  password: undefined,
})


async function onSubmit(event: FormSubmitEvent<object>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <UModal :model-value="props.show">
    <div class="">
      <div class="p-4 flex items-center flex-col text-center">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="56" rx="28" fill="#FED9DF"/>
          <path d="M25.9643 34.1863C25.7 34.1863 25.4465 34.0826 25.2596 33.898C25.0728 33.7134 24.9678 33.463 24.9678 33.2019V26.3899C24.9678 26.1279 25.0731 25.8767 25.2607 25.6914C25.4482 25.5062 25.7025 25.4021 25.9677 25.4021C26.233 25.4021 26.4873 25.5062 26.6748 25.6914C26.8624 25.8767 26.9677 26.1279 26.9677 26.3899V33.198C26.9683 33.3282 26.9426 33.4572 26.8924 33.5775C26.8421 33.6978 26.7681 33.8071 26.6748 33.899C26.5815 33.991 26.4706 34.0637 26.3487 34.113C26.2267 34.1623 26.096 34.1872 25.9643 34.1863Z" fill="#F9405F"/>
          <path d="M29.9643 34.1863C29.7 34.1863 29.4465 34.0826 29.2596 33.898C29.0728 33.7134 28.9678 33.463 28.9678 33.2019V26.3899C28.9678 26.1279 29.0731 25.8767 29.2607 25.6914C29.4482 25.5062 29.7025 25.4021 29.9677 25.4021C30.233 25.4021 30.4873 25.5062 30.6748 25.6914C30.8624 25.8767 30.9677 26.1279 30.9677 26.3899V33.198C30.9683 33.3282 30.9426 33.4572 30.8924 33.5775C30.8421 33.6978 30.7681 33.8071 30.6748 33.899C30.5815 33.991 30.4706 34.0637 30.3487 34.113C30.2267 34.1623 30.096 34.1872 29.9643 34.1863Z" fill="#F9405F"/>
          <path d="M37.3962 20.4335H31.8089V18.4844C31.8089 18.2233 31.7039 17.9729 31.5171 17.7883C31.3302 17.6037 31.0767 17.5 30.8124 17.5H25.1833C24.919 17.5 24.6655 17.6037 24.4787 17.7883C24.2918 17.9729 24.1868 18.2233 24.1868 18.4844V20.4335H18.5307C18.2535 20.4419 17.9904 20.5565 17.7972 20.7533C17.6041 20.95 17.4961 21.2132 17.4961 21.4873C17.4961 21.7613 17.6041 22.0246 17.7972 22.2213C17.9904 22.418 18.2535 22.5327 18.5307 22.5411H20.2945L21.0917 35.1698C21.1506 36.0708 21.5539 36.9161 22.22 37.5344C22.886 38.1527 23.7651 38.4979 24.6791 38.5H31.2429C32.1569 38.4979 33.036 38.1527 33.702 37.5344C34.3681 36.9161 34.7714 36.0708 34.8303 35.1698L35.6275 22.5411H37.3962C37.5391 22.5454 37.6813 22.5213 37.8146 22.4703C37.9478 22.4193 38.0693 22.3423 38.1719 22.2441C38.2745 22.1458 38.356 22.0282 38.4117 21.8982C38.4674 21.7682 38.4961 21.6284 38.4961 21.4873C38.4961 21.3461 38.4674 21.2064 38.4117 21.0764C38.356 20.9464 38.2745 20.8288 38.1719 20.7305C38.0693 20.6322 37.9478 20.5553 37.8146 20.5043C37.6813 20.4532 37.5391 20.4292 37.3962 20.4335ZM26.1818 19.4757H29.809V20.3193H26.1818V19.4757ZM32.6131 35.034C32.5904 35.3771 32.4365 35.699 32.1827 35.9343C31.9289 36.1697 31.5941 36.3011 31.2459 36.3019H24.682C24.3338 36.3011 23.9988 36.1696 23.7449 35.934C23.4911 35.6984 23.3374 35.3763 23.3149 35.033L22.5296 22.6297H33.3983L32.6131 35.034Z" fill="#F9405F"/>
        </svg>
        <h2 class="text-xl font-medium mt-2"> Hapus Data </h2>
        <!-- <div class="my-auto text-xl font-medium text-center">
          Hapus Data
        </div> -->
        <!-- <UIcon name="i-heroicons-x-mark" class="w-6 h-6 ms-auto my-auto cursor-pointer" @click="emit('close')" /> -->
      </div>
      <div class="p-4 text-center">
        <p class="text-blue"> Anda akan menghapus data ini, yakin? </p>
      </div>
      <div class="flex p-4 justify-center">
    <div class="grid grid-cols-2 gap-4" style="width: 300px;">
      <div class="flex justify-center">
        <UButton type="submit" class="bg-white text-green w-4/5 flex items-center justify-center" @click="emit('close')"> Tidak </UButton>
      </div>
      <div class="flex justify-center">
        <UButton type="submit" class="w-4/5 flex items-center justify-center"> Yakin </UButton>
      </div>
    </div>
  </div>
    </div>
  </UModal>
</template>
