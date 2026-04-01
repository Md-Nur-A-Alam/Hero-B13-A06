import React from 'react';
import { toast } from 'react-toastify';

const ToastAleart = (toastMessage) => {
    console.log(toastMessage);
    toast(toastMessage);
};

export default ToastAleart;