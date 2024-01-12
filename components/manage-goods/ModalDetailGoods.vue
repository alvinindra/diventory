<script setup>
import print from 'vue3-print-nb'

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  selectedGood: {
    type: Object,
    default: null,
  },
})
const emit = defineEmits(['update:show', 'close'])
const vPrint = print
function colorStatusGood(status) {
  let color = ''
  switch (status) {
    case 'Dipinjam':
      color = 'primary'
      break
    case 'Dikembalikan':
      color = 'tertiary'
      break
    case 'Rusak':
      color = 'danger'
      break
    case 'Tersedia':
      color = 'success'
      break
    default:
      color = 'primary'
      break
  }
  return color
}
</script>

<template>
  <UModal :model-value="props.show">
    <div class="">
      <div class="p-4 flex border-bottom border border-solid">
        <div class="my-auto text-xl font-medium">
          Detail Barang
        </div>
        <UIcon name="i-heroicons-x-mark" class="w-6 h-6 ms-auto my-auto cursor-pointer" @click="emit('close')" />
      </div>
      <div id="printData" class="p-4">
        <div>
          <div class="mb-4">
            <div class="text-sm text-diventory-black-secondary mb-1">
              Nama Barang
            </div>
            <div class="font-medium text-base">
              {{ selectedGood?.nama_barang }}
            </div>
          </div>
          <div class="mb-4">
            <div class="text-sm text-diventory-black-secondary mb-1">
              Serial Number
            </div>
            <div class="font-medium text-base">
              {{ selectedGood?.serial_number }}
            </div>
          </div>
          <div class="mb-4">
            <div class="text-sm text-diventory-black-secondary mb-1">
              Jenis Barang
            </div>
            <div class="font-medium text-base">
              {{ selectedGood?.jenis_barang }}
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-4">
            <div>
              <div class="text-sm text-diventory-black-secondary mb-1">
                Status Barang
              </div>
              <BaseBadge :title="selectedGood?.status_barang" :color="colorStatusGood(selectedGood?.status_barang)" />
            </div>
            <!-- <div>
              <div class="text-sm text-diventory-black-secondary">
                Nama Peminjam
              </div>
              <div class="font-medium text-base">
                Jane Doe (Front-end Dev)
              </div>
            </div> -->
          </div>
          <div class="text-sm text-diventory-black-secondary mb-1">
            QR Code
          </div>
          <img :src="`data:image/jpeg;base64,${selectedGood?.qr_code}`" class="w-[150px] h-[150px]" alt="">
        </div>
      </div>
      <div class="p-4 border border-top border- border-solid">
        <div class="grid grid-cols-1 gap-3">
          <UButton v-print="'#printData'" type="button" class="text-center align-middle justify-center" label="Print Data" />
        </div>
      </div>
    </div>
  </UModal>
</template>
