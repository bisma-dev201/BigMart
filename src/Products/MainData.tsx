import React, { useState, useEffect } from 'react';
import Card from './Card';

interface Rating {
    rate: number;
    count: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: Rating;
    category: string;
}

export const MainData: React.FC<{ selectedCategory: string }> = ({ selectedCategory }) => {
    const apiurl = 'https://fakestoreapi.com/products';

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch(apiurl);
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.log('Fetch error:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-blue-500 text-xl font-bold">Loading...</h1>
            </div>
        );
    }

    return (
        <div className="bg-gray-200 pt-1 pb-8">
            <h3 className="font-bold text-blue-500 my-5 ml-28 text-2xl">RESULTS</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {filteredProducts.map((product) => (
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5" key={product.id}>
                        <Card title={product.title} price={product.price} image={product.image} rating={product.rating.rate} />
                    </div>
                ))}
            </div>
        </div>
    );
};
