<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const props = defineProps(['show'])
const emit = defineEmits(['update:show', 'close'])

const state = reactive({
  name: undefined,
  serial_number: undefined,
  type_goods: undefined,
  status: undefined,
})

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
          Tambah Barang
        </div>
        <UIcon name="i-heroicons-x-mark" class="w-6 h-6 ms-auto my-auto cursor-pointer" @click="emit('close')" />
      </div>
      <div class="p-4">
        <UForm :state="state" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="Nama Barang" name="name">
            <UInput v-model="state.name" />
          </UFormGroup>
          <UFormGroup label="Serial Number" name="serial_number">
            <UInput v-model="state.serial_number" type="text" />
          </UFormGroup>
          <UFormGroup label="Jenis Barang" name="type_goods">
            <UInput v-model="state.type_goods" type="text" />
          </UFormGroup>
          <UFormGroup label="Status Barang" name="status">
            <UInput v-model="state.status" type="text" />
          </UFormGroup>

          <UButton type="submit" class="justify-center w-full text-center">
            Simpan Data
          </UButton>
        </UForm>
      </div>
    </div>
  </UModal>
</template>
