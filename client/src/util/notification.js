import React from 'react';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ message, type }) => {
    // Function to show a toast based on type
    const showToast = (msg, toastType) => {
        if (toastType === 'success') {
            toast.success(msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        } else if (toastType === 'error') {
            toast.error(msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        } else {
            console.warn('Invalid toast type provided!');
        }
    };

    // Show the toast when the component is rendered
    showToast(message, type);

    return <ToastContainer />;
};

export default Notification;
