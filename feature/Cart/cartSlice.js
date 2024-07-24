import { createSlice } from "@reduxjs/toolkit";
import dessertData from '/src/New Cart/data.json'




const initialState = {
  desserts : dessertData.map((dessert) => ({ ...dessert, isSelected: false, amount: 1})),
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  isModalOpen: false,
}

const IncreaseamountCount = (amount)=>{
  if(amount === 10) {
    return 1
  } return amount + 1
}

const DecreaseamountCount = (amount) => {
  if (amount > 1) {
    return amount - 1
  }
  return 1
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addProduct : (state,action)=>{
      const {product} = action.payload
    
      const updatedItem = state.desserts.map((dessert) => {
        if (dessert.name === product.name) {
          return { ...dessert, isSelected: product.isSelected }
        }
        return dessert
      })
      state.desserts = updatedItem
      const item = state.cartItems.find((details)=> details.name === product.name)
      if (item) {
        item.amount += product.amount
      } else{
        state.cartItems.push(product)
      }
     state.numItemsInCart += product.amount 
     state.cartTotal += product.price * product.amount
    },
    
    increaseAmount :(state,action)=>{
      const { product} = action.payload
      const updatedItem = state.desserts.map((dessert) => {
        if (dessert.name === product.name) {
                  return {
            ...dessert,
            isSelected:
              product.amount < 10 ?  product.isSelected:!product.isSelected ,
            amount:
              product.amount < 10 ? IncreaseamountCount(product.amount) : 1,
          } 
            
        }
        return dessert
        
      })
      const item = state.cartItems.find(
        (details) => details.name === product.name
      )
      const newItem = updatedItem.find((items) => items.name === item.name)
      item.amount = newItem.amount
      
      if (item) {
         const totalPrice = state.cartItems.reduce((accumulator, item) => {
           return (accumulator += item.amount)
         }, 0)
         state.numItemsInCart = totalPrice
      } 
      if (!newItem.isSelected) {
        state.cartItems = state.cartItems.filter((w) => w.name !== product.name)
          const totalPrice = state.cartItems.reduce((accumulator, item) => {
            return (accumulator += item.amount)
          }, 0)
          state.numItemsInCart = totalPrice 
         
        
      }
 state.desserts = updatedItem
 state.cartTotal = state.cartItems.reduce((accumulator, item) => {
    return (accumulator += item.amount * item.price)
  }, 0)   
  },
  decreaseAmount: (state,action)=>{
    const {product} = action.payload
    const updatedItem = state.desserts.map((dessert) => {
      if (dessert.name === product.name ) {
        return {
          ...dessert,
          isSelected: product.amount <= 1 ? !product.isSelected : product.isSelected,
          amount: product.amount > 1 ? DecreaseamountCount(product.amount) : 1,
        }
      } 
      return dessert
    })
    const item = state.cartItems.find(
      (details) => details.name === product.name
    )
    const newItems = updatedItem.find((items) => items.name === item.name)
    item.amount = newItems.amount
    const newItem = updatedItem.find((items) => items.name === item.name)
      state.desserts = updatedItem
       if (item) {
         state.numItemsInCart -= 1
        
       }
        if (!newItem.isSelected) {
          state.cartItems = state.cartItems.filter(
            (w) => w.name !== product.name
          )
          state.cartTotal -= product.price  
        }
      state.cartTotal += item.price * (newItem.amount - product.amount)
  },
  removeProduct: (state,action)=>{
   const {product} = action.payload
   const newStuff = state.desserts.map((w)=>{
    if (w.name === product.name) {
      return(
        {...w,
        isSelected: !product.isSelected,
        amount: 1
        }
      )
    }
    return w;
   })
   state.desserts = newStuff
   state.cartItems = state.cartItems.filter((i) => i.name !== product.name)
   state.numItemsInCart -= 1
   state.cartTotal -= product.price * product.amount
  },
  OpenModal : (state)=>{
    state.isModalOpen = true;
  },
  CloseModal: (state)=>{
    state.isModalOpen = false,
    state.cartItems = []
    state.numItemsInCart= 0
    state.cartTotal= 0
    state.desserts = dessertData.map((dessert) => ({
      ...dessert,
      isSelected: false,
      amount: 1,
    }))
  },
  }

})







export const {addProduct,increaseAmount,decreaseAmount,removeProduct,OpenModal,CloseModal} = cartSlice.actions

export default cartSlice.reducer