import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../Cart-Context/Cart';

interface CardProps {
    title: string;
    price: number;
    image: string;
    rating: number;
}

const Card: React.FC<CardProps> = ({ title, price, image, rating }) => {
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starColor = i <= Math.round(rating) ? 'text-yellow-500' : 'text-gray-300';
            stars.push(
                <FaStar key={i} className={`${starColor} mr-1`} />
            );
        }
        return stars;
    };

    const { addToCart } = useCart();
    const [isInCart, setIsInCart] = useState(false);

    const handleAddToCart = () => {
        const item = {
            image,
            title,
            price,
            rating
        };

        addToCart(item);
        setIsInCart(true);
    };

    return (
        <div className="max-w-xs w-full h-full rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 group">
            <div className="h-52 w-full flex items-center justify-center bg-gray-100 rounded-t-2xl relative">
                <img className="max-h-full max-w-full object-contain" src={image} alt={title} />
                <button
                    className="hidden group-hover:flex gap-2 items-center bg-white text-base text-mart_heading whitespace-nowrap px-4 py-2 rounded-md absolute z-10 hover:bg-yellow-500 transition-all duration-200 ease-linear"
                    onClick={handleAddToCart}>
                    {isInCart ? (<> <IoCartOutline className="text-2xl font-bold" />View Cart </>) : ('Add to Cart')}
                </button>
            </div>
            <div className="px-6 py-4">
                <h3 className="font-bold w-55 mb-3 truncate">{title}</h3>
                <h1 className="text-gray-700 text-base font-bold mb-3">${price}</h1>
                <div className="flex items-center mt-2 mb-3">
                    {renderStars(rating)}
                </div>
            </div>
        </div>
    );
};

export default Card;
