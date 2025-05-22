import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/HomePageLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});
    console.log(data,id, news);

    useEffect(()=>{
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails)
    },[data,id])
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-8'>
             <section className='col-span-9'>
                <h2 className='text-2xl font-bold my-5'>News Details</h2>
                <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
                </section>   
                <aside className='col-span-3 mt-5'>
                    <RightAside></RightAside>
                </aside>
            </main>

        </div>
    );
};

export default NewsDetails;