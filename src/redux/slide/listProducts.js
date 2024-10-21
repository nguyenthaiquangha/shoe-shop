import { createSlice } from "@reduxjs/toolkit"
import { getProductByIdApi } from "../../services/products.service"

const initialState = {
    listProducts: [],
    productDetail: [
        {
        },
        {
            comment: []
        }
    ],
    productPerPage: 8,
    currentPage: 1,
}

const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers: {
        setListProducts: (state, action) => {
            state.listProducts = action.payload
        },
        setProductDetail: (state, action) => {
            state.productDetail = action.payload
        },
        setCurrentPages: (state, action) => {
            state.currentPage = action.payload
        },
        onNavigationNext: (state) => {
            state.currentPage++;
        },
        onNavigationPrev: (state) => {
            state.currentPage--;
        },
        onChangeListProductPerpage: (state, action) => {
            state.productPerPage = action.payload
        },
        onclickCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        // addComment: (state, action) => {
        //     const { idUser, idPro, name, idComment, content } = action.payload;
        //     //   const indexPro = (state.comment).findIndex((item) => item.idPro === idPro);
        //     //   console.log(indexPro);
        //     // state.comment.push({idUser, idPro, name, idComment, content });
        //     // console.log(state.productDetail.comment);
        // },
    }
})
export const { setListProducts, setProductDetail, onNavigationNext, onNavigationPrev, onclickCurrentPage, setCurrentPages, addComment } = ProductSlice.actions
export default ProductSlice.reducer;

export const getProductByAction = (id) => {
    return async (dispatch) => {
        const res = await getProductByIdApi(id)

        const action = setProductDetail(res.data.content);
        dispatch(action)
    }
} 