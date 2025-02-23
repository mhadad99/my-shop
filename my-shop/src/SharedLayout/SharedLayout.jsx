import React from 'react'
import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'
import { MyFooter } from '../components/MyFooter'

export function SharedLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <MyFooter></MyFooter>

        </>
    )
}
