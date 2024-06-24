import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    list: [{
      name: 'phone',
      imageUrl: 'https://fastly.picsum.photos/id/504/200/200.jpg?hmac=uNktbiKQMUD0MuwgQUxt7R2zjHBGFxyUSG3prhX0FWM',
      quantity: 10,
      about: 'testt',
      status: 'open',
      price: 100, 
    },
    {
      name: 'landscape1',
      imageUrl: 'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
      quantity: 10,
      about: 'testt',
      status: 'open',
      price: 100, 
    },
    {
      name: 'sea',
      imageUrl: 'https://fastly.picsum.photos/id/135/200/200.jpg?hmac=uaxfwtA3aJhzzHN36hg2MJi5Rl8nbuqAsipKDDj2seU',
      quantity: 10,
      about: 'testt',
      status: 'open',
      price: 100, 
    }]
  }),
  actions : {
    filterProducts (searchText) {
      return this.list.filter(product => product.name.includes(searchText))
    }
  } 
})
