<script setup>
definePageMeta({
  middleware: ['auth'],
})

useHead({
  title: 'Pengembalian Barang',
})

const returnSuccess = ref(false)
const selectedGood = ref(null)

const userData = process.client && JSON.parse(window.localStorage.getItem('userData'))
const { data: dataGoods } = await useCustomFetch(`/api/pengembalian/${userData?.id}`, { method: 'GET' })

async function returnGood() {
  const { status, error } = await useCustomFetch(`/api/pengembalian/`, { method: 'PUT', body: JSON.stringify({
    id: selectedGood.value.id,
  }) })

  if (status.value === 'success')
    returnSuccess.value = true

  if (error.value) {
    console.error(error.value)
    toast.add({ icon: 'i-heroicons-x-circle-solid', color: 'red', title: 'Gagal meminjam barang!' })
  }
}

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

function convertDate(dateString) {
  const dateObj = new Date(dateString)

  // Customize the formatting options for Indonesian locale
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    locale: 'id-ID', // Specify Indonesian locale
  }

  // Format the date using toLocaleDateString()
  const formattedDate = dateObj.toLocaleDateString('id-ID', options)
  return formattedDate
}
</script>

<template>
  <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-diventory-white-tertiary">
    <LayoutAppInventoryNavbar />
    <main class="container px-6 py-8 mx-auto">
      <div v-if="returnSuccess" class="bg-white max-w-[407px] mx-auto p-8 shadow-md border border-white rounded-[6px] text-center">
        <img class="mb-[28px] mx-auto" src="/image/icon-checklist.svg" alt="">
        <div class="text-xl font-medium text-diventory-black-primary mb-2">
          Barang berhasil dikembalikan
        </div>
        <div class="mb-[28px] text-diventory-black-secondary">
          Terima kasih sudah mengembalikan barang
        </div>
        <UButton type="button" class="bg-diventory-primary-600 hover:bg-diventory-primary-500 py-2 justify-center w-full text-center" @click="returnSuccess = !returnSuccess">
          OK
        </UButton>
      </div>
      <div v-else class="flex justify-center gap-5">
        <div class="p-[20px] flex flex-col shadow max-w[340px] rounded-xl gap-5 bg-white">
          <div class="flex flex-row gap-2">
            <div class="flex flex-col gap-2 my-auto">
              <button class="mb-8 max-w-min" @click="$router.push('/inventory')">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" fill="#FDFDFE" />
                  <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#E5E5EA" />
                  <path d="M12.167 18L17.167 13M12.167 18L17.167 23M12.167 18H23.8337" stroke="#1F4E91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <div class="font-medium text-xl">
                Form Pengembalian Barang
              </div>
              <div class="text-diventory-black-secondary text-base">
                Kembalikan barang sesuai durasi pinjaman
              </div>
            </div>
            <img class="w-[150px] h-[150px]" src="/image/illustration-pengembalian-barang.svg" alt="Pengembalian Barang">
          </div>
          <form class="space-y-4" @submit.prevent="returnGood">
            <ClientOnly>
              <UFormGroup label="Nama Barang" name="name">
                <USelectMenu
                  v-model="selectedGood"
                  searchable
                  searchable-placeholder="Cari nama barang yang akan dikembalikan"
                  select-class="w-full px-[14px] py-[10px] mt-2"
                  placeholder="Cari nama barang yang akan dikembalikan"
                  :options="dataGoods?.message"
                >
                  <template #label>
                    <span v-if="selectedGood" class="truncate">{{ selectedGood?.id_barang.nama_barang }}</span>
                    <span v-else>Cari nama barang yang akan dikembalikan</span>
                  </template>
                  <template #option="{ option: good }">
                    <span class="truncate">{{ good.id_barang.nama_barang }}</span>
                  </template>
                  <template #trailing>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.7548 18.394L16.1277 14.7669C17.0009 13.6043 17.4723 12.1893 17.4707 10.7354C17.4707 7.02151 14.4492 4 10.7354 4C7.02151 4 4 7.02151 4 10.7354C4 14.4492 7.02151 17.4707 10.7354 17.4707C12.1893 17.4723 13.6043 17.0009 14.7669 16.1277L18.394 19.7548C18.5776 19.9189 18.8171 20.0065 19.0632 19.9996C19.3094 19.9927 19.5436 19.8919 19.7177 19.7177C19.8919 19.5436 19.9927 19.3094 19.9996 19.0632C20.0065 18.8171 19.9189 18.5776 19.7548 18.394ZM5.92439 10.7354C5.92439 9.78384 6.20655 8.85369 6.73518 8.06253C7.26382 7.27137 8.01519 6.65473 8.89428 6.2906C9.77337 5.92647 10.7407 5.8312 11.6739 6.01683C12.6072 6.20246 13.4644 6.66066 14.1372 7.33349C14.8101 8.00632 15.2683 8.86355 15.4539 9.79679C15.6395 10.73 15.5442 11.6973 15.1801 12.5764C14.816 13.4555 14.1994 14.2069 13.4082 14.7355C12.617 15.2642 11.6869 15.5463 10.7354 15.5463C9.45988 15.5448 8.23708 15.0374 7.33518 14.1355C6.43328 13.2336 5.92592 12.0108 5.92439 10.7354Z" fill="#3A3A3C" fill-opacity="0.4" />
                    </svg>
                  </template>
                </USelectMenu>
              </UFormGroup>
            </ClientOnly>
            <template v-if="selectedGood">
              <UFormGroup label="Durasi Peminjaman" name="duration">
                <UInput :model-value="convertDayToDuration(selectedGood?.durasi_peminjaman)" disabled />
              </UFormGroup>
              <UFormGroup label="Tanggal Peminjaman" name="borrow_date">
                <UInput :model-value="convertDate(selectedGood?.tanggal_peminjaman)" disabled />
              </UFormGroup>
              <UFormGroup label="Tanggal Pengembalian" name="return_date">
                <UInput :model-value="convertDate(selectedGood?.tanggal_pengembalian)" disabled />
              </UFormGroup>
            </template>
            <UButton type="submit" class="bg-diventory-primary-600 hover:bg-diventory-primary-500 py-2 justify-center w-full text-center">
              Submit
            </UButton>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>
