import React from 'react'
import { Link } from 'react-router-dom'

export const Cate = (props) => {
    const {listCates} = props
    return (
        <div>
            {
                Array.isArray(listCates) && listCates.map((item) => {
                  return  <Link >{item.category}</Link>
                })
            }
        </div>
    )
}
