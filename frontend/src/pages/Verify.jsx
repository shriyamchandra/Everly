// src/pages/Verify.jsx
import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Verify = () => {
    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
    const [searchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        try {
            if (!token) {
                toast.error('Authentication required.');
                navigate('/login');
                return;
            }

            const response = await axios.post(
                `${backendUrl}/api/order/verifyStripe`,
                { success, orderId },
                { headers: { token } }
            );

            if (response.data.success) {
                setCartItems({});
                navigate('/orders');
            } else {
                toast.error('Payment verification failed. Redirecting to cart.');
                navigate('/cart');
            }
        } catch (error) {
            console.log(error);
            toast.error('An error occurred during payment verification.');
            navigate('/cart');
        }
    };

    useEffect(() => {
        verifyPayment();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return (
        <div className="flex items-center justify-center h-screen bg-background text-text">
            <p className="text-lg">Verifying your payment, please wait...</p>
        </div>
    );
};

export default Verify;
