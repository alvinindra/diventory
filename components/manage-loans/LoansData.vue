import type { variants } from '#tailwind-config';
<script setup>
const columns = [{
  key: 'nama_peminjam',
  label: 'Nama Peminjaman',
}, {
  key: 'jabatan',
  label: 'Jabatan',
}, {
  key: 'nama_barang',
  label: 'Nama Barang',
}, {
  key: 'tanggal_peminjaman',
  label: 'Tgl Pinjam',
}, {
  key: 'durasi_peminjaman',
  label: 'Durasi',
}, {
  key: 'tanggal_pengembalian',
  label: 'Tgl Pengembalian',
}, {
  key: 'status_peminjaman',
  label: 'Status',
}]

const people = [{
  id: 1,
  nama_peminjam: 'Jane Doe',
  jabatan: 'Front-end Developer',
  nama_barang: 'Macbook M1 Space Grey',
  tanggal_peminjaman: '2023-12-24',
  tanggal_pengembalian: '-',
  durasi_peminjaman: 5,
  status_peminjaman: 'Dipinjam',
}, {
  id: 2,
  nama_peminjam: 'Jane Doe',
  jabatan: 'Front-end Developer',
  nama_barang: 'Macbook M1 Space Grey',
  tanggal_peminjaman: '2023-12-24',
  tanggal_pengembalian: '2023-12-31',
  durasi_peminjaman: 5,
  status_peminjaman: 'Dikembalikan',
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

function colorStatusPeminjaman(row) {
  let color = ''
  switch (row.status_peminjaman) {
    case 'Dipinjam':
      color = 'primary'
      break
    case 'Dikembalikan':
      color = 'tertiary'
      break
    default:
      color = 'primary'
      break
  }
  return color
}

const filterGoods = ['Tersedia', 'Dipinjam', 'Rusak']

const selectedFilter = ref(null)
const isQrCodeActive = ref(false)
const showModalReject = ref(false)
const showModalAccept = ref(false)
</script>

<template>
  <div class="flex px-3 pb-3.5 border-b border-gray-200 dark:border-gray-700">
    <UInput v-model="q" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search" />
    <USelect v-model="selectedFilter" class="ms-4 min-w-[150px]" :options="filterGoods" placeholder="Filter" />
    <UButton icon="i-mdi-line-scan" class="ms-auto bg-diventory-primary-100 text-diventory-primary-600 hover:bg-diventory-primary-200" variant="solid" label="Scan Barang" @click="isQrCodeActive = !isQrCodeActive" />
  </div>
  <ClientOnly>
    <photo-provider>
      <UTable v-model="selected" :rows="filteredRows" :columns="columns">
        <template #qrcode-data="{ row }">
          <photo-consumer :key="row.qrcode" :intro="row.qrcode" :src="row.qrcode">
            <img :src="row.qrcode" class="w-[40px] h-[40px] view-box cursor-pointer" alt="Discover Nuxt 3">
          </photo-consumer>
        </template>
        <template #durasi_peminjaman-data="{ row }">
          {{ row.durasi_peminjaman }} Tahun
        </template>
        <template #status_peminjaman-data="{ row }">
          <BaseBadge
            :color="colorStatusPeminjaman(row)"
            variant="outline"
            :title="row.status_peminjaman"
          />
        </template>
      </UTable>
    </photo-provider>
  </ClientOnly>
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
  <BaseModalAccept :show="showModalAccept" @close="showModalAccept = false" />
  <BaseModalReject :show="showModalReject" @close="showModalReject = false" />
</template>
