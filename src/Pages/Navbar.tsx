import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useCart } from '../Cart-Context/Cart';

interface NavbarProps {
    onCategoryChange: (category: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCategoryChange, searchQuery, onSearchChange }) => {
    const { cartItems } = useCart();

    return (
        <nav className="flex flex-col md:flex-row justify-between items-center p-3 bg-white shadow-md">
            <div className="flex items-center space-x-4 md:space-x-6">
                <h1 className="text-3xl bg-gray-100 font-bold text-blue-500 p-2 px-3 rounded">M</h1>
                <h1 className="text-2xl font-bold text-blue-500">BigMart</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 bg-blue-50 p-2 md:p-0">
                <select
                    className="p-2 bg-blue-50 text-black rounded-lg"
                    onChange={(e) => onCategoryChange(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="mens">Men's Clothing</option>
                    <option value="jewellery">Jewellery</option>
                    <option value="electronics">Electronics</option>
                    <option value="womens">Women's Clothing</option>
                </select>
                <div className="relative flex items-center bg-blue-50">
                    <input
                        type="text"
                        placeholder="Search Here..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="p-2 pl-4 rounded-lg w-full md:w-64 bg-blue-50"
                    />
                    <CiSearch className="absolute right-2 text-black text-xl text-blue-500" />
                </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
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
}
