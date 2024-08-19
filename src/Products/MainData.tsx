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
    category: string; // Add category property here
}

interface MainDataProps {
    selectedCategory: string;
    searchQuery: string;
}

export const MainData: React.FC<MainDataProps> = ({ selectedCategory, searchQuery }) => {
    const apiurl = 'https://fakestoreapi.com/products';

    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch(apiurl);
            const data = await response.json();
            setProducts(data);
            setFilteredProducts(data);
            setLoading(false);
        } catch (error) {
            console.log('Fetch error:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        let filtered = products;

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        if (searchQuery !== '') {
            const lowercasedQuery = searchQuery.toLowerCase();
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(lowercasedQuery)
            );
        }

        setFilteredProducts(filtered);
    }, [selectedCategory, searchQuery, products]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-blue-500 text-xl font-bold">Loading...</div>
            </div>
        );
    }

    return (
        <div className='bg-gray-200 pt-1 pb-8 min-h-screen'>
            <h3 className='font-bold text-blue-500 my-5 ml-28 text-2xl'>RESULTS</h3>
            {filteredProducts.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-4">
                    {filteredProducts.map((product) => (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center" key={product.id}>
                            <Card 
                                title={product.title} 
                                price={product.price} 
                                image={product.image} 
                                rating={product.rating.rate} 
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 text-xl">No products found</div>
            )}
        </div>
    );
};
