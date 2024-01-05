<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'

const props = defineProps(['show'])
const emit = defineEmits(['update:show', 'close'])
const toast = useToast()
const showPassword = ref(false)

let state = reactive({
  nama_lengkap: undefined,
  jabatan: undefined,
  username: undefined,
  email: undefined,
  password: undefined,
  gender: false,
  no_hp: '',
})

const jabatanOptions = ['IT Support', 'Karyawan', 'Manajer']

async function onSubmit(event: FormSubmitEvent<object>) {
  event.preventDefault()
  const { status, error } = await useCustomFetch('/api/akun/', { method: 'POST', body: state })
  if (status.value === 'success') {
    toast.add({ icon: 'i-heroicons-check-badge', color: 'primary', title: 'Berhasil membuat akun!' })
    state = {
      nama_lengkap: undefined,
      jabatan: undefined,
      username: undefined,
      email: undefined,
      password: undefined,
      gender: false,
      no_hp: '',
    }
    emit('close')
  }

  if (error.value) {
    toast.add({ icon: 'i-heroicons-x-circle-solid', color: 'red', title: 'Gagal membuat akun!' })
    console.error(error.value)
  }
}
</script>

<template>
  <UModal :model-value="props.show">
    <div class="">
      <div class="p-4 flex border-bottom border border-solid">
        <div class="my-auto text-xl font-medium">
          Tambah Akun
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
            <UInput v-model="state.email" type="email" placeholder="Masukkan alamat email" />
          </UFormGroup>
          <UFormGroup label="No Handphone" name="no_hp">
            <UInput v-model="state.no_hp" type="text" placeholder="Masukkan no handphone" />
          </UFormGroup>
          <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" :type="showPassword ? 'text' : 'password'" placeholder="Masukkan password" :ui="{ icon: { trailing: { pointer: '' } } }">
              <template #trailing>
                <UButton
                  color="gray"
                  variant="link"
                  :icon="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
                  :padded="false"
                  @click="showPassword = !showPassword"
                />
              </template>
            </UInput>
          </UFormGroup>
          <UButton type="submit" class="justify-center w-full text-center hidden">
            Simpan Data
          </UButton>
        </UForm>
      </div>
      <div class="flex p-4 border-top border border-solid">
        <UButton type="submit" class="justify-center w-full text-center" @click="onSubmit">
          Simpan Data
        </UButton>
      </div>
    </div>
  </UModal>
</template>
