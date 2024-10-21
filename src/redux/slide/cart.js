import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    item: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { productId, name, image, quantity, price } = action.payload;
            const indexProductid = (state.item).findIndex(item => item.productId === productId);
            if (indexProductid >= 0) {
                state.item[indexProductid].quantity += quantity;
            } else {
                state.item.push({ productId, name, image, quantity, price });
            }
        },
        changQuanTity: (state, action) => {
            const { productId, quantity } = action.payload;
            const indexProductid = (state.item).findIndex(item => item.productId === productId);
            if (quantity > 0) {
                state.item[indexProductid].quantity = quantity;
            } else {
               state.item = (state.item).filter(item => item.productId !== productId)
            }
        }
    }
});
export const { addToCart,changQuanTity } = cartSlice.actions
export default cartSlice.reducer