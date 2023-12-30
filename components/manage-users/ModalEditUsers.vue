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

const jabatanOptions = ['IT Support', 'Karyawan', 'NPC']

async function onSubmit(event: FormSubmitEvent<object>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <UModal :model-value="props.show">
    <div class="">
      <div class="p-4 flex border-bottom border border-solid">
        <div class="my-auto text-xl font-medium">
          Edit Akun
        </div>
        <UIcon name="i-heroicons-x-mark" class="w-6 h-6 ms-auto my-auto cursor-pointer" @click="emit('close')" />
      </div>
      <div class="p-4">
        <UForm :state="state" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="Nama Lengkap" name="nama_lengkap">
            <UInput v-model="state.nama_lengkap" placeholder="Masukkan nama lengkap" />
          </UFormGroup>
          <UFormGroup label="Jabatan" name="jabatan">
            <USelectMenu v-model="state.jabatan" :options="jabatanOptions" size="md" placeholder="Pilih Jabatan" select-class="px-3 py-2" />
          </UFormGroup>
          <UFormGroup label="Username" name="username">
            <UInput v-model="state.username" type="text" placeholder="Masukkan username" />
          </UFormGroup>
          <UFormGroup label="Alamat Email" name="email">
            <UInput v-model="state.email" type="text" placeholder="Masukkan alamat email" />
          </UFormGroup> 
          <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="text" placeholder="Masukkan password" />
          </UFormGroup>                    
        </UForm>
      </div>
      <div class="flex p-4 border-top border border-solid">
        <UButton type="submit" class="justify-center w-full text-center">
          Perbarui Data
        </UButton>
      </div>
    </div>
  </UModal>
</template>
