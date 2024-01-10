<script setup>
definePageMeta({
  middleware: ['auth'],
})

useHead({
  title: 'Pengembalian Barang',
})

const returnSuccess = ref(false)
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
          <UForm class="space-y-4">
            <UFormGroup label="Nama Barang" name="name">
              <USelectMenu
                searchable
                searchable-placeholder="Cari nama barang yang akan dikembalikan"
                select-class="w-full px-[14px] py-[10px] mt-2"
                placeholder="Cari nama barang yang akan dikembalikan"
                :options="['Macbook M2 Silver', 'Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']"
                model-value="Macbook M2 Silver"
              />
            </UFormGroup>
            <UFormGroup label="Durasi Peminjaman" name="duration">
              <UInput model-value="1 Tahun" disabled />
            </UFormGroup>
            <UFormGroup label="Tanggal Peminjaman" name="borrow_date">
              <UInput model-value="8 November 2022" disabled />
            </UFormGroup>
            <UFormGroup label="Tanggal Pengembalian" name="return_date">
              <UInput model-value="8 November 2023" disabled />
            </UFormGroup>
          </UForm>
          <UButton type="submit" class="bg-diventory-primary-600 hover:bg-diventory-primary-500 py-2 justify-center w-full text-center" @click="returnSuccess = !returnSuccess">
            Submit
          </UButton>
        </div>
      </div>
    </main>
  </div>
</template>
