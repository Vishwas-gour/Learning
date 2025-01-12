import React from 'react'

import Header from "./Component/Header"
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout