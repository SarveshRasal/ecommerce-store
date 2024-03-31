'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/Product Card";
import product from "../../models/productModel";

const dark_green = '#40513B';

export default function SearchAndFilter() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All')
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/product/search?q=${query}&category=${category}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error Searching: ', error)
        }
    };

    useEffect(() => {
        handleSearch();
    }, [category]);

    // @ts-ignore
    return (
        <main>
            <div className={"grid grid-cols-4"}>
                {/* Search inputs and category dropdown */}
                <div className={`w-[25vw] h-[46.625vh] p-5 text-[${dark_green}] flex flex-col`}>
                    <div className={'rounded-md w-fit h-fit flex flex-col items-start p-5'}>
                        <div className={`flex flex-row border-2 border-[${dark_green}] w-full pl-3 pr-3 pt-1 pb-1 mb-5 rounded-md bg-[#9DC08B21]`}>
                            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={'Search'} className={'bg-[#00000000] w-full'} />
                            <button onClick={handleSearch} className={''}>
                                <svg viewBox="0 0 1024 1024" className={'w-6 h-6 fill-[#40513B]'}>
                                    <path className="outline-[#40513B]" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className={`border-2 border-[${dark_green}] w-full pl-2 pr-3 pt-1 pb-1 mb-5 rounded-md bg-[#9DC08B21]`}>
                            <select value={category} onChange={(e) => setCategory(e.target.value)} className={'bg-[#00000000] font-semibold w-full'}>
                                <option value="All">All</option>
                                <option value="Pots and Planters">Pots and Planters</option>
                                <option value="Coffee and Beans">Coffee and Beans</option>
                            </select>
                        </div>
                        <div>
                            {category === 'Pots and Planters' && <p className={'text-center italic font-medium text-lg'}>“Pots and planters, the silent nurturers, cradle the earth’s verdant dreams, fostering life with every grain they hold.”</p>}
                            {category === 'Coffee and Beans' && <p className={'text-center italic font-medium text-lg'}>“Coffee and its beans, the aromatic alchemists, brew whispers of warmth, transforming silent mornings into symphonies of awakening.”</p>}
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            {category === 'All' && <p className={'text-center italic font-medium text-lg'}>"Planters and coffee, an embrace of earth's nurture and morning's aroma, entwining dreams with whispers of growth and warmth, orchestrating life's symphony."</p>}
                        </div>
                    </div>
                </div>
                {/* Product cards */}
                {results.map(product => (
                    <ProductCard
                        key={product._id}
                        displayImage={product.ImageURL.toString()}
                        displayName={product.Name}
                        displayPrice={product.Price}
                    />
                ))}
            </div>
        </main>
    )
}
