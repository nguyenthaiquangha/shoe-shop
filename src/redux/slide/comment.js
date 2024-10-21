import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    comment:[]
}
export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment: (state, action) => {
            const { idUser,idPro, name, idComment, content } = action.payload;
              const indexPro = (state.comment).findIndex((item) => item.idPro === idPro);
              console.log(indexPro);
              
                state.comment.push({ idUser,idPro, name, idComment, content });
           
        },
        deleteComment: (state, action) => {
            const idComment = action.payload
            const indexComment = (state.comment).findIndex((item) => item.idComment === idComment);
             state.comment.splice(indexComment, 1);
        }
    }
})
export const { addComment, deleteComment } = commentSlice.actions
export default commentSlice.reducer