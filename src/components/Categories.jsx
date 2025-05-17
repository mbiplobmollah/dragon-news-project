import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json())

const Categories = () => {
    
    const categories = use(categoryPromise)
    return (
        <div>
            <h2 className='font-bold'>All Categories ({categories.length})</h2>
            <div className='grid gird-cols-1 mt-5 '>
               {
                 categories.map(category => <NavLink 
                    key={category.id}
                    className={'btn bg-base-100 border-none hover:bg-base-200 font-semibold text-accent'} 
                    to={`/category/${category.id}`}>{category.name}</NavLink>)
               }
            </div>
        </div>
    );
};

export default Categories;