import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: [],
    editUser: {}
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        updateUser: (state,action) => {
        state.editUser = action.payload;
        return [...state]
        },
        loginUser: (state) => {
            return [...state.users]
        },
        logoutUser: (state) => {
            state.users = null
        }
    }

})
export const { registerUser, loginUser,logoutUser } = userSlice.actions
export default userSlice.reducer