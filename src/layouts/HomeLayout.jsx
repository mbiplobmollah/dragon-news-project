import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomePageLayout/LeftAside';
import RightAside from '../components/HomePageLayout/RightAside';

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
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main-nav col-span-6'>
                    <Outlet></Outlet>
                </section>
              <aside className='col-span-3'>
                <RightAside></RightAside>
              </aside>
            </main>

        </div>
    );
};

export default HomeLayout;