import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: [],
    },
    reducers : {
        addItem : (state,action)=>{
          state.items.push(action.payload)
        },
        removeItem : (state,action)=>{
          state.items = state.items.filter(item => item.id !== action.payload)
        },

        updateItemQuantity: (state, action) => {
            // Find item and update its quantity
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            
            if (existingItem) {
                existingItem.quantity = quantity;
                
                // Remove item if quantity is 0
                if (quantity <= 0) {
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },

        clearCart : (state) =>{
            state.items = []
        }
    }
})

export const {addItem,removeItem, updateItemQuantity,clearCart} = cartSlice.actions

export default cartSlice.reducer