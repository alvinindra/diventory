<script setup>
const columns = [{
  key: 'name',
  label: 'Nama Barang',
}, {
  key: 'serialnumber',
  label: 'Serial Number',
}, {
  key: 'type',
  label: 'Jenis Barang',
}, {
  key: 'qrcode',
  label: 'QR Code',
}, {
  key: 'status',
  label: 'Status',
}, {
  key: 'action',
  label: 'Action',
}]

const people = [{
  id: 1,
  name: 'Macbook M1 Space Grey',
  serialnumber: '44237820XD',
  type: 'Device',
  status: 'Tersedia',
  qrcode: 'https://github.com/alvinindra/discuss-app/assets/30944414/a03bea8f-0c2e-40b8-ba45-e0572bb2217f',
}, {
  id: 2,
  name: 'Macbook M1 Space Grey',
  serialnumber: '44237820XD',
  type: 'Device',
  status: 'Tersedia',
  qrcode: 'https://github.com/alvinindra/discuss-app/assets/30944414/a03bea8f-0c2e-40b8-ba45-e0572bb2217f',
}]

const selected = ref([])
const q = ref('')
const filteredRows = computed(() => {
  if (!q.value)
    return people

  return people.filter((person) => {
    return Object.values(person).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})

const filterGoods = ['Tersedia', 'Dipinjam', 'Rusak']

const selectedFilter = ref(null)
const isQrCodeActive = ref(false)
const modalAddGoods = ref(false)
const modalDetailGoods = ref(false)
const showModalDelete = ref(false)
</script>

<template>
  <div class="flex px-3 pb-3.5 border-b border-gray-200 dark:border-gray-700">
    <UInput v-model="q" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search" />
    <USelect v-model="selectedFilter" class="ms-4 min-w-[150px]" :options="filterGoods" placeholder="Filter" />
    <UButton icon="i-mdi-line-scan" class="ms-auto bg-diventory-primary-100 text-diventory-primary-600 hover:bg-diventory-primary-200" variant="solid" label="Scan Barang" @click="isQrCodeActive = !isQrCodeActive" />
    <UButton icon="i-mdi-plus" class="ms-4" variant="solid" label="Tambah Barang" @click="modalAddGoods = true" />
  </div>
  <photo-provider>
    <UTable v-model="selected" :rows="filteredRows" :columns="columns">
      <template #qrcode-data="{ row }">
        <photo-consumer :key="row.qrcode" :intro="row.qrcode" :src="row.qrcode">
          <img :src="row.qrcode" class="w-[40px] h-[40px] view-box cursor-pointer" alt="Discover Nuxt 3">
        </photo-consumer>
      </template>
      <template #status-data="{ row }">
        <UBadge class="text-diventory-green-500 ring-diventory-green-500" variant="outline">
          {{ row.status }}
        </UBadge>
      </template>
      <template #action-data>
        <div class="flex gap-3">
          <div className="cursor-pointer" @click="modalDetailGoods = !modalDetailGoods">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0001 3C17.3921 3 21.8781 6.88 22.8191 12C21.8791 17.12 17.3921 21 12.0001 21C6.60813 21 2.12213 17.12 1.18213 12C2.12213 6.88 6.60813 3 12.0001 3ZM12.0001 19C14.0398 18.9998 16.0189 18.3071 17.6136 17.0355C19.2083 15.7638 20.324 13.9884 20.7781 12C20.3228 10.0128 19.2066 8.23896 17.6121 6.96854C16.0177 5.69813 14.0393 5.00635 12.0006 5.00635C9.96194 5.00635 7.98359 5.69813 6.38913 6.96854C4.79467 8.23896 3.67849 10.0128 3.22313 12C3.67722 13.9883 4.7928 15.7635 6.38727 17.0352C7.98174 18.3068 9.96066 18.9996 12.0001 19ZM12.0001 16.5C10.8067 16.5 9.66206 16.0259 8.81815 15.182C7.97424 14.3381 7.50013 13.1935 7.50013 12C7.50013 10.8065 7.97424 9.66193 8.81815 8.81802C9.66206 7.97411 10.8067 7.5 12.0001 7.5C13.1936 7.5 14.3382 7.97411 15.1821 8.81802C16.026 9.66193 16.5001 10.8065 16.5001 12C16.5001 13.1935 16.026 14.3381 15.1821 15.182C14.3382 16.0259 13.1936 16.5 12.0001 16.5ZM12.0001 14.5C12.6632 14.5 13.2991 14.2366 13.7679 13.7678C14.2367 13.2989 14.5001 12.663 14.5001 12C14.5001 11.337 14.2367 10.7011 13.7679 10.2322C13.2991 9.76339 12.6632 9.5 12.0001 9.5C11.3371 9.5 10.7012 9.76339 10.2324 10.2322C9.76352 10.7011 9.50013 11.337 9.50013 12C9.50013 12.663 9.76352 13.2989 10.2324 13.7678C10.7012 14.2366 11.3371 14.5 12.0001 14.5Z" fill="#3A3A3C" fill-opacity="0.4" />
            </svg>
          </div>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5068 6.62458L17.3756 8.49254L15.5068 6.62458ZM16.7086 4.97897L11.6553 10.0323C11.3942 10.293 11.2161 10.6252 11.1435 10.987L10.6768 13.3235L13.0133 12.8558C13.375 12.7835 13.7068 12.6061 13.968 12.3449L19.0213 7.29164C19.1731 7.13979 19.2936 6.95951 19.3757 6.76111C19.4579 6.56271 19.5002 6.35006 19.5002 6.13531C19.5002 5.92055 19.4579 5.70791 19.3757 5.5095C19.2936 5.3111 19.1731 5.13082 19.0213 4.97897C18.8694 4.82712 18.6891 4.70666 18.4907 4.62448C18.2923 4.5423 18.0797 4.5 17.8649 4.5C17.6502 4.5 17.4375 4.5423 17.2391 4.62448C17.0407 4.70666 16.8604 4.82712 16.7086 4.97897V4.97897Z" stroke="#3A3A3C" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.7354 15.0882V17.7353C17.7354 18.2033 17.5495 18.6522 17.2186 18.9831C16.8876 19.3141 16.4387 19.5 15.9707 19.5H6.26472C5.79669 19.5 5.34783 19.3141 5.01688 18.9831C4.68593 18.6522 4.5 18.2033 4.5 17.7353V8.0293C4.5 7.56126 4.68593 7.1124 5.01688 6.78145C5.34783 6.4505 5.79669 6.26457 6.26472 6.26457H8.91181" stroke="#3A3A3C" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <div class="cursor-pointer" @click="showModalDelete = !showModalDelete">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.473 16.6398C10.2747 16.6398 10.0846 16.562 9.94448 16.4235C9.80433 16.2851 9.72559 16.0973 9.72559 15.9015V10.7925C9.72559 10.596 9.8046 10.4076 9.94525 10.2686C10.0859 10.1297 10.2767 10.0516 10.4756 10.0516C10.6745 10.0516 10.8652 10.1297 11.0059 10.2686C11.1465 10.4076 11.2256 10.596 11.2256 10.7925V15.8985C11.2259 15.9962 11.2067 16.0929 11.169 16.1832C11.1313 16.2734 11.0759 16.3554 11.0059 16.4243C10.9359 16.4933 10.8527 16.5478 10.7613 16.5848C10.6698 16.6218 10.5718 16.6405 10.473 16.6398Z" fill="#3A3A3C" fill-opacity="0.4" />
              <path d="M13.473 16.6398C13.2747 16.6398 13.0846 16.562 12.9445 16.4235C12.8043 16.2851 12.7256 16.0973 12.7256 15.9015V10.7925C12.7256 10.596 12.8046 10.4076 12.9453 10.2686C13.0859 10.1297 13.2767 10.0516 13.4756 10.0516C13.6745 10.0516 13.8652 10.1297 14.0059 10.2686C14.1465 10.4076 14.2256 10.596 14.2256 10.7925V15.8985C14.2259 15.9962 14.2067 16.0929 14.169 16.1832C14.1313 16.2734 14.0759 16.3554 14.0059 16.4243C13.9359 16.4933 13.8527 16.5478 13.7613 16.5848C13.6698 16.6218 13.5718 16.6405 13.473 16.6398Z" fill="#3A3A3C" fill-opacity="0.4" />
              <path d="M19.0467 6.32511H14.8562V4.86329C14.8562 4.66749 14.7775 4.4797 14.6373 4.34124C14.4972 4.20278 14.3071 4.125 14.1088 4.125H9.88697C9.68876 4.125 9.49866 4.20278 9.35851 4.34124C9.21835 4.4797 9.13961 4.66749 9.13961 4.86329V6.32511H4.89756C4.6896 6.33139 4.49229 6.41741 4.34744 6.56494C4.20259 6.71248 4.12158 6.90993 4.12158 7.11545C4.12158 7.32098 4.20259 7.51843 4.34744 7.66596C4.49229 7.8135 4.6896 7.89952 4.89756 7.9058H6.22039L6.81829 17.3774C6.86246 18.0531 7.16494 18.6871 7.66449 19.1508C8.16403 19.6145 8.82331 19.8734 9.50881 19.875H14.4317C15.1172 19.8734 15.7765 19.6145 16.276 19.1508C16.7756 18.6871 17.0781 18.0531 17.1222 17.3774L17.7201 7.9058H19.0467C19.1538 7.90903 19.2605 7.89098 19.3604 7.85272C19.4604 7.81446 19.5515 7.75676 19.6284 7.68305C19.7054 7.60934 19.7665 7.52112 19.8083 7.42362C19.8501 7.32612 19.8716 7.22133 19.8716 7.11545C19.8716 7.00958 19.8501 6.90479 19.8083 6.80729C19.7665 6.70979 19.7054 6.62157 19.6284 6.54786C19.5515 6.47415 19.4604 6.41645 19.3604 6.37819C19.2605 6.33993 19.1538 6.32188 19.0467 6.32511ZM10.6358 5.60675H13.3562V6.23947H10.6358V5.60675ZM15.4593 17.2755C15.4423 17.5329 15.3269 17.7742 15.1365 17.9508C14.9462 18.1273 14.6951 18.2258 14.434 18.2264H9.51105C9.24983 18.2258 8.99859 18.1272 8.80821 17.9505C8.61783 17.7738 8.50253 17.5322 8.48566 17.2747L7.89674 7.97224H16.0483L15.4593 17.2755Z" fill="#3A3A3C" fill-opacity="0.4" />
            </svg>
          </div>
        </div>
      </template>
    </UTable>
  </photo-provider>
  <UModal v-model="isQrCodeActive">
    <div class="flex px-5 pt-5 pb-4">
      <div class="my-auto font-bold text-xl">
        Scan Barang
      </div>
      <UButton class="ms-auto my-auto p-0" variant="ghost" @click="isQrCodeActive = false">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.22705 7.22705L16.773 16.773" stroke="#3A3A3C" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7.22705 16.773L16.773 7.22707" stroke="#3A3A3C" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </UButton>
    </div>
    <div>
      <BaseQrCodeScanner
        :active="isQrCodeActive"
        :qrbox="250"
        :fps="10"
      />
    </div>
  </UModal>
  <ManageGoodsModalAddGoods :show="modalAddGoods" @close="modalAddGoods = false" />
  <ManageGoodsModalDetailGoods :show="modalDetailGoods" @close="modalDetailGoods = false" />
  <BaseModalDelete :show="showModalDelete" @close="showModalDelete = false" />
</template>
