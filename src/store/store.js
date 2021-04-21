import create from 'zustand';
import { devtools, redux } from 'zustand/middleware';
import { toast } from "react-toastify";


const initialState = {
    toast: {
        message: '',
        statusCode: 0,
    },
    user: { token: "", userName: "", id: "" }
}

export const actions = {
    TOAST: 'TOAST',
    UNTOAST: 'UNTOAST',
    LOGIN: 'LOGIN'
}

export const toastFor = (action, successMessage, successCode = 0) => {
    // message: action.payload?.message || successMessage,
    // statusCode: action.payload?.statusCode || successCode
    if(action.payload?.message){
        toast.error(action.payload.message)
    }else{
        toast.success(successMessage)
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case actions.TOAST:
            return { toast: { ...state.toast, ...action.payload } };
        case actions.UNTOAST:
            return { toast: initialState.toast };
        case actions.LOGIN:
            return { user: action.payload }
        default:
            return state;
    }
}

export const useStore=create(devtools(redux(reducer, initialState)));
