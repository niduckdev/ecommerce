<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '@/stores/user/cart';

const cartStroe = useCartStore()

onMounted(() => {
  cartStroe.loadCart()
})
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
