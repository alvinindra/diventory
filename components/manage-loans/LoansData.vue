<script setup>
const columns = [{
  key: 'id_akun.nama_lengkap',
  label: 'Nama Peminjaman',
}, {
  key: 'id_barang.nama_barang',
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

const { data: loansData } = await useCustomFetch('/api/peminjaman/', { method: 'GET' })

const q = ref('')
const filteredRows = computed(() => {
  if (!q.value)
    return loansData.value

  return loansData.value.filter((person) => {
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

function convertDayToDuration(number) {
  const years = Math.floor(number / 365)
  const months = Math.floor((number % 365) / 30)
  const days = number % 30

  let result = ''

  if (years > 0)
    result += `${years} Tahun `

  if (months > 0)
    result += `${months} Bulan `

  if (days > 0)
    result += `${days} Hari`

  return result ? result.trim() : '-'
}

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
  <UTable :rows="filteredRows" :columns="columns">
    <template #durasi_peminjaman-data="{ row }">
      {{ convertDayToDuration(row.durasi_peminjaman) }}
    </template>
    <template #status_peminjaman-data="{ row }">
      <BaseBadge
        :color="colorStatusPeminjaman(row)"
        variant="outline"
        :title="row.status_peminjaman"
      />
    </template>
  </UTable>
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
