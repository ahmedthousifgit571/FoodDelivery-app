import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants/api';
import { removeItem, clearCart, updateItemQuantity } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    
    // Calculate total price
    const getTotal = () => {
        return cartItems.reduce((acc, item) => {
            const itemPrice = item.price || 0;
            const itemQuantity = item.quantity || 1;
            return acc + (itemPrice * itemQuantity);
        }, 0);
    };
    
    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };
    
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    
    const handleUpdateQuantity = (itemId, newQuantity) => {
        if (newQuantity >= 1) {
            dispatch(updateItemQuantity({ id: itemId, quantity: newQuantity }));
        }
    };
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
                {cartItems.length > 0 && (
                    <button 
                        className="px-4 py-2 text-sm text-red-600 hover:text-red-800"
                        onClick={()=> handleClearCart()}
                    >
                        Clear Cart
                    </button>
                )}
            </div>
            
            {cartItems.length > 0 ? (
                <div className="bg-white rounded-lg shadow-md">
                    <div className="p-6">
                        {/* Cart Items */}
                        <div className="divide-y">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex py-6">
                                    {/* Item Image */}
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                                        {item.imageId ? (
                                            <img
                                                src={`${IMG_CDN_URL}${item.imageId}`}
                                                alt={item.name}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                                                <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    {/* Item Details */}
                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                                                <p className="mt-1 text-sm text-gray-500 line-clamp-1">{item.description}</p>
                                            </div>
                                            <p className="text-right font-medium text-gray-900">
                                                ₹{((item.price || 0) / 100).toFixed(2)}
                                            </p>
                                        </div>

                                        {/* Quantity and Remove */}
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center border border-gray-300 rounded-md">
                                                <button 
                                                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                                    onClick={() => handleUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                                                >
                                                    -
                                                </button>
                                                <span className="px-3 py-1 text-gray-800">{item.quantity || 1}</span>
                                                <button 
                                                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                                    onClick={() => handleUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button 
                                                className="text-sm font-medium text-red-600 hover:text-red-800"
                                                onClick={() => handleRemoveItem(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cart Summary */}
                        <div className="border-t border-gray-200 pt-6 mt-6">
                            <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                                <p>Subtotal</p>
                                <p>₹{(getTotal() / 100).toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                                <p>Delivery Fee</p>
                                <p>₹40.00</p>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-gray-900 pt-4 border-t">
                                <p>Total</p>
                                <p>₹{((getTotal() / 100) + 40).toFixed(2)}</p>
                            </div>
                            <div className="mt-6">
                                <button
                                    className="w-full bg-green-600 px-6 py-3 text-base font-medium text-white rounded-lg hover:bg-green-700"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center bg-white rounded-lg shadow-md">
                    <div className="w-64 h-64 mb-6">
                        <img 
                            src="/empty-cart.svg" 
                            alt="Empty Cart" 
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNGOUY5RjkiLz48cGF0aCBkPSJNMTQ2IDUwSDU0QzUxLjc5MSA1MCA1MCA1MS43OTEgNTAgNTRWMTQ2QzUwIDE0OC4yMDkgNTEuNzkxIDE1MCA1NCAxNTBIMTQ2QzE0OC4yMDkgMTUwIDE1MCAxNDguMjA5IDE1MCAxNDZWNTRDMTUwIDUxLjc5MSAxNDguMjA5IDUwIDE0NiA1MFoiIHN0cm9rZT0iI0NBQ0FDQSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTEyNSA4OEMxMjUgMTAyLjM2IDExMy4zNiAxMTQgOTkgMTE0Qzg0LjY0IDExNCA3MyAxMDIuMzYgNzMgODhDNzMgNzMuNjQgODQuNjQgNjIgOTkgNjJDMTEzLjM2IDYyIDEyNSA3My42NCAxMjUgODhaIiBzdHJva2U9IiNDQUNBQ0EiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xMTUuNjg3IDEyMUg4Mi4zMTNDNzcuMDQgMTIxIDcyLjMyIDEyNC40NiA3MC40MjcgMTI5LjQ2N0w2NSAxNDRIMTMzTDEyNy41NzMgMTI5LjQ2N0MxMjUuNjggMTI0LjQ2IDEyMC45NiAxMjEgMTE1LjY4NyAxMjFaIiBzdHJva2U9IiNDQUNBQ0EiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==";
                            }}
                        />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
                    <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet</p>
                    <Link to="/" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-200">
                        Browse Restaurants
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;