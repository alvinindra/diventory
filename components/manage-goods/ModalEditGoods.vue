<script setup>
const props = defineProps(['show', 'selectedGood'])
const emit = defineEmits(['update:show', 'close', 'refresh'])

const state = ref({
  nama_barang: props.selectedGood?.nama_barang,
  jenis_barang: props.selectedGood?.jenis_barang,
  status_barang: props.selectedGood?.status_barang,
  serial_number: props.selectedGood?.serial_number,
})
const toast = useToast()

watchEffect(() => {
  state.value = {
    nama_barang: props.selectedGood?.nama_barang,
    jenis_barang: props.selectedGood?.jenis_barang,
    status_barang: props.selectedGood?.status_barang,
    serial_number: props.selectedGood?.serial_number,
  }
}, [])

const optionStatusGoods = ['Tersedia', 'Rusak', 'Dipinjam', 'Dikembalikan']

async function onSubmit(event) {
  event.preventDefault()
  const { status, error } = await useCustomFetch(`/api/barang/${props.selectedGood?.id}/`, { method: 'PATCH', body: state.value })
  if (status.value === 'success') {
    toast.add({ icon: 'i-heroicons-check-badge', color: 'primary', title: 'Berhasil mengubah data barang!' })
    emit('refresh')
    emit('close')
  }

  if (error.value) {
    toast.add({ icon: 'i-heroicons-x-circle-solid', color: 'red', title: 'Gagal mengubah data barang!' })
    console.error(error.value)
  }
}
</script>

<template>
  <UModal :model-value="props.show">
    <div class="">
      <div class="p-4 flex border-bottom border border-solid">
        <div class="my-auto text-xl font-medium">
          Edit Barang
        </div>
        <UIcon name="i-heroicons-x-mark" class="w-6 h-6 ms-auto my-auto cursor-pointer" @click="emit('close')" />
      </div>
      <div class="p-4">
        <UForm :state="state" class="space-y-4" @submit="onSubmit">
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
          <!-- <UFormGroup label="QR Code" name="qr_code">
            <div class="flex">
              <UButton color="gray" class="py-2 max-h-[36px] mt-2">
                <img src="/image/icon-scan.svg">
                <div>Generate Kode QR</div>
              </UButton>
              <div class="my-auto ms-auto">
                <img src="/image/dummy-qr.svg" class="w-[64px] h-[64]" alt="">
              </div>
            </div>
          </UFormGroup> -->
        </UForm>
      </div>
      <div class="flex p-4 border-top border border-solid">
        <UButton type="button" class="justify-center w-full text-center" @click="onSubmit">
          Simpan Data
        </UButton>
      </div>
    </div>
  </UModal>
</template>
