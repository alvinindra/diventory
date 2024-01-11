<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'outline',
  },
  color: {
    type: String,
    default: 'primary',
  },
})
</script>

<template>
  <div
    class="border border-solid max-w-min py-[5px] px-2 rounded-lg text-sm font-medium capitalize"
    :class="[
      props.color === 'primary' && 'border-diventory-primary-500 text-diventory-primary-500',
      props.color === 'tertiary' && 'border-diventory-tertiary-500 text-diventory-tertiary-500',
      props.color === 'danger' && 'border-diventory-red-500 text-diventory-red-500',
      props.color === 'success' && 'border-diventory-green-500 text-diventory-green-500',
    ]"
  >
    {{ props.title }}
  </div>
</template>
