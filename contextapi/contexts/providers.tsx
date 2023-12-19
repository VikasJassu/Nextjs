'use client'; 
import { Toaster } from "react-hot-toast";
import setToast, { ToastContext, ToastProvider } from "./userContext";
import React, { useContext } from 'react'
import useToast from "./userContext";


interface ProvidersProps {
  children: React.ReactNode;
}

const Providers:React.FC<ProvidersProps> = ({children}:ProvidersProps) => {
  const { showToast } = useToast();
  return (
    <ToastProvider value={{showToast}}>
      <Toaster/>
      {children}
    </ToastProvider>
  )
}

export default Providers