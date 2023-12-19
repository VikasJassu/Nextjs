'use client'
import { createContext, useContext} from "react";
import toast from "react-hot-toast";


export const ToastContext = createContext({
    showToast: (type: string, message: string) => {
        type === "error" ? (toast.error(message)) : (type === "success") ? (toast.success(message)) : (toast.loading(message))
    }
});

export const ToastProvider = ToastContext.Provider;

export default function useToast() {
    return useContext(ToastContext);
}