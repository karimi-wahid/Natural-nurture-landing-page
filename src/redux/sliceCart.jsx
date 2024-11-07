import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
    price: 0,
    quantity: 0
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const itemToAdd = action.payload;
            const existingItem = state.cartItem.find((item) => item.id == itemToAdd.id)

            if(existingItem){
                existingItem.quantity += itemToAdd.quantity
            }
            else {  
                // If item does not exist adding it to cart  
                state.cartItem.push({ ...itemToAdd, quantity: itemToAdd.quantity, price: itemToAdd.newPrice });  
            }

            // Update total quantity and price  
            state.quantity = state.cartItem.reduce((total, item) => total + item.quantity, 0);  
            state.price = state.cartItem.reduce((total, item) => total + (item.newPrice * item.quantity), 0); 
        },

        removeFromCart(state, action){
            const itemId = action.payload;
            state.cartItem = state.cartItem.filter(item => item.id !== itemId);

            // Update total quantity and price after removal  
            state.quantity = state.cartItem.reduce((total, item) => total + item.quantity, 0);  
            state.price = state.cartItem.reduce((total, item) => total + (item.price * item.quantity), 0); 
        },

        updateQuantityCart(state, action){
            const {id, quantity} = action.payload;
            const existingItem = state.cartItem.find(item => item.id === id)

            if (existingItem) {  
                // Update quantity if item exists  
                existingItem.quantity = quantity;  
            }  

            // Update total quantity and price  
            state.quantity = state.cartItem.reduce((total, item) => total + item.quantity, 0);  
            state.price = state.cartItem.reduce((total, item) => total + (item.price * item.quantity), 0)
        },

        clearCart(state) {  
            // Clear the cart  
            state.cartItem = [];  
            state.quantity = 0;  
            state.price = 0;  
        }
    }
})

export default cartSlice.reducer
export const {addToCart, removeFromCart, updateQuantityCart, clearCart} = cartSlice.actions