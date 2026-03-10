import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number | string
    name: string
    type: string
}

const initialState: Product[] = [];

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (
            state,
            action: PayloadAction<{
                id: number | string,
                name: string,
                type: string,
            }>
        ) => {
            state.push(action.payload)
        }
    }
})

export const { addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;