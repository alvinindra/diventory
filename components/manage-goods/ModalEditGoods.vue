<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'

const props = defineProps(['show'])
const emit = defineEmits(['update:show', 'close'])

const state = reactive({
  name: undefined,
  serial_number: undefined,
  type_goods: undefined,
  status: undefined,
})

const optionStatusGoods = ['Tersedia', 'Rusak', 'Dipinjam', 'Dikembalikan']

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
          Edit Barang
        </div>
        <UIcon name="i-heroicons-x-mark" class="w-6 h-6 ms-auto my-auto cursor-pointer" @click="emit('close')" />
      </div>
      <div class="p-4">
        <UForm :state="state" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="Nama Barang" name="name">
            <UInput v-model="state.name" placeholder="Masukkan nama barang" />
          </UFormGroup>
          <UFormGroup label="Serial Number" name="serial_number">
            <UInput v-model="state.serial_number" type="text" placeholder="Masukkan serial number" />
          </UFormGroup>
          <UFormGroup label="Jenis Barang" name="type_goods">
            <UInput v-model="state.type_goods" type="text" placeholder="Masukkan jenis barang" />
          </UFormGroup>
          <UFormGroup label="Status Barang" name="status">
            <USelectMenu v-model="state.status" :options="optionStatusGoods" size="md" placeholder="Pilih status barang" select-class="px-3 py-2" />
          </UFormGroup>
          <UFormGroup label="QR Code" name="qr_code">
            <div class="flex">
              <UButton color="gray" class="py-2 max-h-[36px] mt-2">
                <img src="/image/icon-scan.svg">
                <div>Generate Kode QR</div>
              </UButton>
              <div class="my-auto ms-auto">
                <img src="/image/dummy-qr.svg" class="w-[64px] h-[64]" alt="">
              </div>
            </div>
          </UFormGroup>
        </UForm>
      </div>
      <div class="flex p-4 border-top border border-solid">
        <UButton type="submit" class="justify-center w-full text-center">
          Simpan Data
        </UButton>
      </div>
    </div>
  </UModal>
</template>
