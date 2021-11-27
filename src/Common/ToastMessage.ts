import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

enum MessageType{
  INFO="info",
  SUCCESS="success",
  WARNING="warning",
  ERROR="error",
  DEFAULT="default"
  }


 type IToastifyProps={

     position:"top-left"|"top-center"|"top-right"|"bottom-left"|"bottom-center"|"bottom-right",
     messageType:"info"|"success"|"warning"|"error"|"default",
     message:"string",
 }

 export const ToastMessage=(toastDetails:IToastifyProps)=>{
     
     
     
  
       
        let detailContainer={
            position: toastDetails.position,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }

        switch(toastDetails.messageType){

            case MessageType.SUCCESS: return toast.success(toastDetails.message,detailContainer);
            case MessageType.WARNING:return toast.warn(toastDetails.message,detailContainer);
            case MessageType.ERROR: return toast.error(toastDetails.message,detailContainer);
            case MessageType.INFO: return toast.info(toastDetails.message,detailContainer);
                         default : return toast(toastDetails.message,detailContainer);              
                     
        }

      
    
     
 }

 