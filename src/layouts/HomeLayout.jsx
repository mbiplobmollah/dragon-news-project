import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className='mt-5'>
            <header>
                <Header></Header>
                <section className='w-11/12 my-3 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 my-3 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <section className='left-nav'></section>
                <section className='main-nav'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>

        </div>
    );
};

export default HomeLayout;