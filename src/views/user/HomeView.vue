<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import Product from '@/components/Product.vue'

import { useProductStore } from '@/stores/user/product'

const productStore = useProductStore()
</script>

<template>
    <UserLayout>
        <!-- hero -->
        <div class="hero h-80 bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello to shop</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>

        


        <!-- Product ส่งผ่าน property -->
        <Product :products="productStore.list">
        </Product>

    </UserLayout>
</template>