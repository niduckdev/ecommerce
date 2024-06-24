<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import UserLayout from '@/layouts/UserLayout.vue'
import Product from '@/components/Product.vue'

import { useProductStore } from '@/stores/user/product.js'
import { useCartStore } from '@/stores/user/cart'

const route = useRoute()
const router = useRouter()
const productStore = useProductStore()
const searchText = ref('')
const cartStore = useCartStore()

onMounted(() => {
    if (route.query.q){
      searchText.value = route.query.q  
    }
})

watch(() => route.query.q, (newSearchText) => {
    searchText.value = newSearchText
}, { immediate : true })

const filterProducts = computed(() => {
    return productStore.filterProducts(searchText.value)
})

const addToCart = (product) => {
    cartStore.addToCart(product)
    router.push({ name : 'cart'})
}
</script>

<template>
    <UserLayout>
        <div class="text-2xl m-4">
            Search :
            <span class="font-bold"> {{ searchText }}</span>
        </div>
        
        <Product
            :products="filterProducts"
            :addToCart="addToCart"
        ></Product>
    </UserLayout>
</template>