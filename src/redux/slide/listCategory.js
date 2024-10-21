import { createSlice } from "@reduxjs/toolkit";
import { getProductByCateApi } from "../../services/cates.service";


const initialState = {
    listCates: [],
    cateDetail: {}
}

export const CateSlice = createSlice({
    name: 'CateSlice',
    initialState,
    reducers: {
        setListCates: (state, action) => {
            state.listCates = action.payload;
        },
        setCateDetail: (state, action) => {
            state.cateDetail = action.payload
        }
    }
})
export const { setListCates,setCateDetail } = CateSlice.actions;
export default CateSlice.reducer;

export const getCateByAction =  (id) => {
    return async(dispatch) => {
        const res = await getProductByCateApi(id)
        const action = setCateDetail(res.data.content);
        dispatch(action)
    }
}