import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-5 items-center p-3 bg-base-200'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
            <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  |*</p>
            <p className='font-semibold'>Breaking: Weather Alert Issued for Coastal Regions - Expect High Winds and Heavy Rainfall.  |*</p>
            <p className='font-semibold'>Stock Market Update: Tech Sector Sees Gains in Morning Trading - Latest Figures Released.  .|*</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;