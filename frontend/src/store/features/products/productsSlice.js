import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

export const getProducts = createAsyncThunk('products/getProducts',
    async () => {
        try {
            const {data} = await axios.get('/products');
        
            return data.data;
        } catch(e) {
            console.log(e);
        }
    }
);

export const deleteProduct = createAsyncThunk('products/deleteProduct', 
    async (id) => {
        try {
            await axios.delete(`/products/delete/${id}`);
            return id;
        } catch(e) {
            console.log(e);
        }
    }
)

export const createNewProduct = createAsyncThunk('products/createNewProduct',
    async (product) => {
        try {
            const {data} = await axios.post('/products/create', product);    
            return data;
        } catch(e) {
            console.log(e);
        }
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        error: null,
        isLoading: false,
        status: 'idle'
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
            state.status = 'succsed'
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.status = 'failed'
        })
        .addCase(createNewProduct.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(createNewProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.status = action.payload.message;
        })
        .addCase(createNewProduct.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
        .addCase(deleteProduct.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.status = action.payload.message;
            state.items = state.items.filter((product) => product.id_product !== action.payload)
        })
        .addCase(deleteProduct.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
    }
});

export default productsSlice.reducer;