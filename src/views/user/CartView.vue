<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import Close from '@/components/icons/Close.vue'
import {  useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()

const changeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value)
    cartStore.updateQuantity(index, newQuantity)
}
</script>

<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4"> Shopping Cart </h1>

        <div class="flex">
            <div class="flex-auto w-64 bg-base-200 p-4">
                <div v-if="cartStore.items.length === 0">
                    Cart is Empty
                </div>
                <div v-else class="flex" v-for="(item, index) in cartStore.items">
                    <div class="flex-1">
                        <img class="w-full p-10"
                            :src="item.imageUrl"
                            alt="">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col justify-between h-full">
                            <div>
                                <div class="grid grid-cols-2 relative">
                                    <div>
                                        <div><b>{{ item.name }}</b></div>
                                        <div>{{ item.about }}</div>
                                        <div>{{ item.price }}</div>
                                    </div>
                                    <div>
                                        <select v-model="item.quantity" class="select w-1/2" @change="changeQuantity($event, index)">
                                            <option v-for="quantity in [1, 2, 3, 4, 5]">{{ quantity }}</option>
                                        </select>
                                    </div>

                                    <div @click="cartStore.removeItemInCart(index)" class="absolute top-0 right-0">
                                        <Close></Close>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <b>
                                    In stock
                                </b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-auto w-32 bg-slate-200 p-4">
                <div class="text-xl font-bold mb-4">
                    Summary
                </div>
                <div>
                    <div class="flex justify-between ">
                        <div>ราคาสินค้าทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }} </div>
                    </div>
                    <div class="divide-y divide-black">
                        <div class="flex justify-between">
                            <div>ค่าส่ง</div>
                            <div>0</div>
                        </div>
                        <div class="flex justify-between">
                            <div>ราคารวมทั้งหมด</div>
                            <div> {{ cartStore.summaryPrice }} </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </UserLayout>
</template>