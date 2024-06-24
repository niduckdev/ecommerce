import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    getters : {
        summaryQuantity (state) {
            return state.items.reduce((acc, item) => {
                return acc + item.quantity
            }, 0)
        },
        summaryPrice (state) {
            return state.items.reduce((acc, item) => {
                return acc + (item.price * item.quantity)
            }, 0) 
        }
    },
    actions: {
        loadCart () {
            const previousCart = localStorage.getItem('cart-data')
            if (previousCart) {
                this.items = JSON.parse(previousCart)
            }
        },
        addToCart (productData) {

            const findProductIndex = this.items.findIndex(item => {
                return item.name === productData.name
            })

            // findProductIndex เป็น -1 ; หาชื่อไม่เจอ add ใหม่เลย
            if (findProductIndex < 0) {
                productData.quantity = 1
                this.items.push(productData)
            } else {
                this.updateQuantity(findProductIndex, this.items[findProductIndex].quantity+1)
            }

            
            localStorage.setItem('cart-data', JSON.stringify(this.items))
        },
        updateQuantity (index, newQuantity) {
            this.items[index].quantity = newQuantity
            localStorage.setItem('cart-data', JSON.stringify(this.items))
        },
        removeItemInCart (index) {
            this.items.splice(index, 1)
            localStorage.setItem('cart-data', JSON.stringify(this.items))
        }
    }
})