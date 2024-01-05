<script setup lang="ts">
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Object,
    default: null,
  },
})
const emit = defineEmits(['update:show', 'close'])
</script>

<template>
  <UModal :model-value="props.show">
    <div class="">
      <div class="p-4 flex border-bottom border border-solid">
        <div class="my-auto text-xl font-medium">
          Detail Akun
        </div>
        <UIcon name="i-heroicons-x-mark" class="w-6 h-6 ms-auto my-auto cursor-pointer" @click="emit('close')" />
      </div>
      <div class="p-4">
        <div class="space-y-4">
          <UFormGroup label="Nama Lengkap" name="nama_lengkap">
            <UInput :model-value="user?.nama_lengkap" placeholder="Masukkan nama lengkap" disabled />
          </UFormGroup>
          <UFormGroup label="Jabatan" name="jabatan">
            <UInput :model-value="user?.jabatan" disabled />
          </UFormGroup>
          <UFormGroup label="Username" name="username">
            <UInput :model-value="user?.username" type="text" placeholder="Masukkan username" disabled />
          </UFormGroup>
          <UFormGroup label="Alamat Email" name="email">
            <UInput :model-value="user?.email" type="email" placeholder="Masukkan alamat email" disabled />
          </UFormGroup>
        </div>
      </div>
    </div>
  </UModal>
</template>
