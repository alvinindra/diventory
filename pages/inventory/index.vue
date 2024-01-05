<script setup>
definePageMeta({
  middleware: ['auth'],
})

useHead({
  title: 'Selamat Datang',
})
</script>

<template>
  <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ">
    <LayoutAppInventoryNavbar />
    <main class="container text-center px-6 py-12 mx-auto">
      <h1 class="font-bold text-[28px]">
        Selamat Datang!
      </h1>
      <div class="mb-[36px]">
        Pilih menu yang ingin Anda lakukan
      </div>
      <div class="flex justify-center gap-6">
        <div class="group p-[20px] flex flex-col border-2 border-diventory-black-quartenary max-w[340px] rounded-[20px] cursor-pointer hover:border-diventory-primary-500 hover:border-2" @click="$router.push('/inventory/borrow')">
          <img class="w-[300px] h-[300px]" src="/image/illustration-peminjaman-barang.svg" alt="Peminjaman Barang">
          <div class="group-hover:text-diventory-primary-600 font-medium text-2xl">
            Peminjaman Barang
          </div>
        </div>
        <div class="group p-[20px] flex flex-col border-2 border-diventory-black-quartenary max-w[340px] rounded-[20px] cursor-pointer hover:border-diventory-primary-500 hover:border-2" @click="$router.push('/inventory/return')">
          <img class="w-[300px] h-[300px]" src="/image/illustration-pengembalian-barang.svg" alt="Pengembalian Barang">
          <div class="group-hover:text-diventory-primary-600 font-medium text-2xl">
            Pengembalian Barang
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
