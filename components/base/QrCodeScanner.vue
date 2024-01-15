<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  fps: {
    type: Number,
    default: 10,
  },
  qrbox: {
    type: Number,
    default: 250,
  },
})

const html5QrcodeScanner = ref(null)
const modalDetailGoods = ref(false)
const selectedGood = ref(null)

async function onScanSuccess(qrCodeMessage) {
  const { data: detailGood, status } = await useCustomFetch(`/api/barang/${qrCodeMessage}`, { method: 'GET' })

  if (status.value === 'success') {
    modalDetailGoods.value = true
    selectedGood.value = detailGood.value
  }

  if (status.value === 'error')
    modalDetailGoods.value = true
}

onMounted(() => {
  html5QrcodeScanner.value = new Html5QrcodeScanner('qr-code-full-region', {
    fps: props.fps,
    qrbox: props.qrbox,
  })
  html5QrcodeScanner.value.render(onScanSuccess)
})

watchEffect(() => {
  if (!props.active)
    html5QrcodeScanner.value.clear()
})
</script>

<template>
  <div id="qr-code-full-region" />
  <ManageGoodsModalDetailGoods :show="modalDetailGoods" :selected-good="selectedGood" @close="modalDetailGoods = false" />
</template>
