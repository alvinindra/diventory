<script setup>
const props = defineProps(['show'])
const emit = defineEmits(['update:show', 'close', 'refresh'])

let state = reactive({
  nama_barang: undefined,
  jenis_barang: undefined,
  serial_number: undefined,
  status_barang: undefined,
})
const toast = useToast()
const optionStatusGoods = ['Tersedia', 'Rusak', 'Dipinjam', 'Dikembalikan']

async function onSubmit(event) {
  event.preventDefault()
  const { data, error, status } = await useCustomFetch('/api/barang/', {
    method: 'POST',
    body: state,
  })

  if (data.value !== null || status.value === 'success') {
    toast.add({ icon: 'i-heroicons-check-badge', color: 'primary', title: 'Berhasil menambahkan barang!' })
    state = {
      nama_barang: undefined,
      jenis_barang: undefined,
      serial_number: undefined,
      status_barang: undefined,
    }

    emit('refresh')
    emit('close')
  }

  if (error.value && status.value === 'error') {
    toast.add({ icon: 'i-heroicons-x-circle-solid', color: 'red', title: 'Gagal menambahkan barang!' })
    console.error(error.value)
  }
}
</script>

<template>
  <UModal :model-value="props.show">
    <div class="">
      <div class="p-4 flex border-bottom border border-solid">
        <div class="my-auto text-xl font-medium">
          Tambah Barang
        </div>
        <UIcon name="i-heroicons-x-mark" class="w-6 h-6 ms-auto my-auto cursor-pointer" @click="emit('close')" />
      </div>
      <div class="p-4">
        <form class="space-y-4">
          <UFormGroup label="Nama Barang" name="name">
            <UInput v-model="state.nama_barang" placeholder="Masukkan nama barang" />
          </UFormGroup>
          <UFormGroup label="Serial Number" name="serial_number">
            <UInput v-model="state.serial_number" type="text" placeholder="Masukkan serial number" />
          </UFormGroup>
          <UFormGroup label="Jenis Barang" name="type_goods">
            <UInput v-model="state.jenis_barang" type="text" placeholder="Masukkan jenis barang" />
          </UFormGroup>
          <UFormGroup label="Status Barang" name="status">
            <USelectMenu v-model="state.status_barang" :options="optionStatusGoods" size="md" placeholder="Pilih status barang" select-class="px-3 py-2" />
          </UFormGroup>
        </form>
      </div>
      <div class="flex p-4 border-top border border-solid">
        <UButton type="button" class="justify-center w-full text-center" @click="onSubmit">
          Simpan Data
        </UButton>
      </div>
    </div>
  </UModal>
</template>
