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

function onScanSuccess(qrCodeMessage) {
  console.log(qrCodeMessage)
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
</template>
