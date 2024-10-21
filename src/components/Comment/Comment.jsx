import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, deleteComment } from '../../redux/slide/comment';
import { useNavigate } from 'react-router-dom';

export const Comment = (props) => {
    const [comment, setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const listComment = useSelector((state) => state.commentSlice.comment);
    const product = useSelector((state) => state.ProductSlice.productDetail);
    const navigation = useNavigate()


    const dipatch = useDispatch()
    const handleComment = () => {
        if (user) {
            dipatch(addComment({
                idUser: user.id,
                idPro: product.id,
                name: user.username,
                idComment: (new Date).getTime(),
                content: comment
            }))
        } else {
            alert('login để comment');
            navigation('/login')
        }
    };
    const handleDelelteComment = (idComment) => {


        dipatch(deleteComment(idComment))

    }
    return (
        <div>
            <div className="input-group-text " >
                <area shape="" coords="" href="" alt="" />
                <area shape="rect" coords="" href="" alt="" />
                <input type="text" className="form-control" aria-label="Text input with checkbox" value={comment} onChange={(e) => setComment(e.target.value)} />
                <button type=' button' className='btn-primary' onClick={handleComment}>Post comment</button>
            </div>
            <div className='comment-content mt-5 p-3' style={{ background: '#E1E8EE', borderRadius: '10px' }}>
                {

                    listComment.map((item, key) => {

                        if (product.id === item.idPro) {
                            return <div key={key}>
                                <button className="btn" style={{ float: 'right' }} onClick={() => handleDelelteComment(item.idComment)}>Delete</button>
                                <strong>{item.name}</strong>
                                <p>{item.content}</p>
                                <hr></hr>
                            </div>
                        }

                    })
                }

            </div>
        </div>
    )
}
