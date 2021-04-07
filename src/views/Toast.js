import React, { useEffect } from 'react';
import '../asset/Toast.css';

import { actions, useStore } from '../store/store';

const Toast = () => {
const dispatch = useStore((state) => state.dispatch);
const toast = useStore((state) => state.toast); 
const fadeClass = toast?.message ? 'toast-show' : '';

  // When the toast state changes
    useEffect(() => {
    let anim = null;
    if (toast.message) {
    anim = setTimeout(() => dispatch({ type: actions.UNTOAST }), 5000);
    }

    return () => {
    clearTimeout(anim);
    };
}, [toast]);

return (
    <div className={`custom-toast toast-${toast.statusCode} ${fadeClass}`}>
    <p>{toast.message}</p>
    </div>
);
};

export default Toast;