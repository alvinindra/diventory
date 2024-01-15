<script setup>
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
const emit = defineEmits(['update:show', 'close', 'refresh'])
const showPassword = ref(false)
const toast = useToast()

const state = ref({
  nama_lengkap: props.user?.nama_lengkap,
  jabatan: props.user?.jabatan,
  username: props.user?.username,
  email: props.user?.email,
  password: undefined,
})

watchEffect(() => {
  state.value = {
    nama_lengkap: props.user?.nama_lengkap,
    jabatan: props.user?.jabatan,
    username: props.user?.username,
    email: props.user?.email,
  }
}, [])

const jabatanOptions = ['it_support', 'karyawan', 'admin']

async function onSubmit(event) {
  event.preventDefault()
  const { status, error } = await useCustomFetch(`/api/akun/${props.user.id}/`, { method: 'PATCH', body: state.value })
  if (status.value === 'success') {
    toast.add({ icon: 'i-heroicons-check-badge', color: 'primary', title: 'Berhasil memperbarui akun!' })
    emit('refresh')
    emit('close')
  }

  if (error.value) {
    toast.add({ icon: 'i-heroicons-x-circle-solid', color: 'red', title: 'Gagal memperbarui akun!' })
    console.error(error.value)
  }
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
            <USelectMenu
              v-model="state.jabatan"
              :options="jabatanOptions" size="md" placeholder="Pilih Jabatan" select-class="px-3 py-2"
            />
          </UFormGroup>
          <UFormGroup label="Username" name="username">
            <UInput v-model="state.username" type="text" placeholder="Masukkan username" />
          </UFormGroup>
          <UFormGroup label="Alamat Email" name="email">
            <UInput v-model="state.email" type="email" placeholder="Masukkan alamat email" />
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
        </UForm>
      </div>
      <div class="flex p-4 border-top border border-solid">
        <UButton type="submit" class="justify-center w-full text-center" @click="onSubmit">
          Perbarui Data
        </UButton>
      </div>
    </div>
  </UModal>
</template>
