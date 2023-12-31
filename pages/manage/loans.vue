<script setup>
useHead({
  title: 'Kelola Pinjaman',
  script: [
    { src: 'https://unpkg.com/html5-qrcode' },
  ],
})

definePageMeta({
  layout: 'dashboard',
})

const listTabs = [
  {
    id: 1,
    name: 'Peminjaman Barang',
    value: 'borrowing',
  },
  {
    id: 2,
    name: 'Data Pinjaman',
    value: 'loans',
  },
]
const selectedTab = ref('borrowing')
</script>

<template>
  <div>
    <BaseTitle title="Kelola Pinjaman" />
    <UCard class="mt-5">
      <template #header>
        <div class="flex flex-row">
          <div v-for="tab in listTabs" :key="tab" class="d-flex cursor-pointer" @click="selectedTab = tab.value">
            <div
              class="text-base py-3 px-5 max-w-fit font-medium text-diventory-black-secondary"
              :class="[tab.value === selectedTab && 'text-diventory-primary-600 border-b-2 border-diventory-primary-600']"
            >
              {{ tab.name }}
            </div>
          </div>
        </div>
      </template>

      <template v-if="selectedTab === 'borrowing'">
        <ManageLoansBorrowingData />
      </template>
      <template v-else>
        <ManageLoansData />
      </template>
    </UCard>
  </div>
</template>
