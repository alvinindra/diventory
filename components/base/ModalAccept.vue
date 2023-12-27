<script setup lang="ts">
const props = defineProps({
  show: {
    default: false,
    type: Boolean,
  },
  title: {
    default: 'Terima Peminjaman',
    type: String,
  },
  caption: {
    default: 'Anda akan menerima peminjaman ini, yakin?',
    type: String,
  },
})
const emit = defineEmits(['update:show', 'close', 'delete'])
</script>

<template>
  <UModal :model-value="props.show" class="max-w-[407px]">
    <div class="px-6 pt-6 pb-8 text-center">
      <div class="flex">
        <UIcon name="i-heroicons-x-mark" class="w-6 h-6 ms-auto my-auto cursor-pointer" @click="emit('close')" />
      </div>
      <img src="/image/icon-checklist.svg" alt="" class="mx-auto mb-[28px]">
      <div class="my-auto text-xl font-medium mb-2">
        {{ props.title }}
      </div>
      <div class="text-base text-diventory-black-secondary mb-[28px]">
        {{ props.caption }}
      </div>
      <div class="grid grid-cols-2 gap-3">
        <UButton type="button" class="text-center align-middle justify-center" variant="outline" label="Tidak" @click="emit('close')" />
        <UButton type="button" class="text-center align-middle justify-center" label="Ya, Terima" @click="emit('delete')" />
      </div>
    </div>
  </UModal>
</template>
