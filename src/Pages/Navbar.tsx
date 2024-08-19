import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { useCart } from '../Cart-Context/Cart';

interface NavbarProps {
    onCategoryChange: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCategoryChange }) => {
    const { cartItems } = useCart();

    return (
        <nav className="flex justify-between items-center p-3 ml-6">
            <div className="flex items-center ml-24">
                <h1 className="text-3xl bg-gray-100 font-bold text-blue-500 p-2 px-3 rounded">M</h1>
                <h1 className="text-2xl font-bold text-blue-500 ml-2">BigMart</h1>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 mr-36">
                <select
                    className="p-2 bg-blue-50 text-black rounded-lg focus:outline-none focus:border-blue-500"
                    onChange={(e) => onCategoryChange(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="jewelery">Jewellery</option>
                    <option value="electronics">Electronics</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
                <div className="relative flex items-center bg-blue-50 min-w-full">
                    <input
                        type="text"
                        placeholder="Search Here..."
                        className="p-2 pl-4 rounded-lg w-full bg-blue-50 border-none focus:outline-none focus:ring-0 focus:border-blue-500"
                    />
                    <CiSearch className="absolute right-2 text-black text-xl text-blue-500" />
                </div>
            </div>
            <div className="flex items-center space-x-2 mr-6">
                <IoCartOutline className="text-2xl text-blue-500 font-bold" />
                <h1 className="font-bold">Cart</h1>
                {cartItems.length > 0 && (
                    <div className="flex items-center justify-center bg-blue-500 text-white w-6 h-6 rounded-full text-xs">
                        {cartItems.length}
                    </div>
                )}
            </div>
        </nav>
    );
};
