import create from 'zustand';
import { devtools, redux } from 'zustand/middleware';

const initialState = {
    toast: {
        message: '',
        statusCode: 0,
    }
}

export const actions = {
    TOAST: 'TOAST',
    UNTOAST: 'UNTOAST',
}

export const toastFor = (action, successMessage, successCode = 0) => ({
    message: action.payload?.message || successMessage,
    statusCode: action.payload?.statusCode || successCode
  });

const reducer = (state, action) => {
    switch (action.type) {
        case actions.TOAST:
            return { toast: { ...state.toast, ...action.payload } };
        case actions.UNTOAST:
            return { toast: initialState.toast };
        default:
            return state;
    }
}

export const useStore = create(devtools(redux(reducer, initialState)));