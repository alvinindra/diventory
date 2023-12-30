<script setup>
useHead({
  title: 'Kelola Barang',
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
    name: 'Data Barang',
    value: 'goods',
  },
  {
    id: 2,
    name: 'Stok Barang',
    value: 'stocks',
  },
]
const selectedTab = ref('goods')
</script>

<template>
  <div>
    <BaseTitle title="Kelola Barang" />
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

      <template v-if="selectedTab === 'goods'">
        <ManageGoodsData />
      </template>
      <template v-else>
        <ManageGoodsStocksData />
      </template>
    </UCard>
  </div>
</template>
