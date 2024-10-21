// import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Category } from '../Category/Category'
import { lazy, Suspense, useEffect } from 'react'

export const Hometemplate = () => {

    const Spiner = () => {
        return (
            <>
                <img src="https://loading.io/asset/760139" alt="" sizes="" />
                aaaaaaaaaaaaaaaaa
            </>
        )
    }
    // useEffect(() => {
    //     Spiner()
    // }, setTimeout(5000))
    return (
        <div>
            <Category />

            <Header />
            <div id="detail" style={{ marginTop: '75px' }} className='container'>
                <Suspense fallback={<Spiner />}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    )
}
