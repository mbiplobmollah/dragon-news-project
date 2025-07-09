import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomePageLayout/LeftAside';
import RightAside from '../components/HomePageLayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigation()
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
            <main className='w-11/12 mx-auto my-3 md:grid md:grid-cols-12'>
                <aside className='md:col-span-3 md:sticky md:top-5 md:h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main-nav md:col-span-6'>
                 {state == 'loading' ? <Loading></Loading> :  <Outlet></Outlet> } 
                </section>
              <aside className='md:col-span-3 md:sticky md:top-5 md:h-fit'>
                <RightAside></RightAside>
              </aside>
            </main>

        </div>
    );
};

export default HomeLayout;