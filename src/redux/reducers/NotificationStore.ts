
import { Reducer } from 'redux';
//add this later
import {actionTypes} from "../actionTypes"
import { ToastMessage } from '../../Common/ToastMessage';


export enum IMessageType{
    INFO="info",
    SUCCESS="success",
    WARNING="warning",
    ERROR="error",
    DEFAULT="default"
    }

export enum IPostion{
    TOPLEFT="top-left",
    TOPCENTER="top-center",
    TOPRIGHT="top-right",
    BOTTOMLEFT="bottom-left",
    BOTTOMCENTER="bottom-center",
    BOTTOMRIGHT="bottom-right"
}

export interface IToastDetails{
    position:"top-left"|"top-center"|"top-right"|"bottom-left"|"bottom-center"|"bottom-right",
    messageType:"info"|"success"|"warning"|"error"|"default",
    message:"string",
}

export interface NotificationAction{
    type:actionTypes.SET_NOTIFICATION,
    data:IToastDetails
}

export const actionCreators={

}

export interface IinitialState{
  
}

let initialState:IinitialState={ 
 
}

export const reducer:Reducer<IinitialState>=(state=initialState,incomingAction)=>{

    const action=incomingAction;
     switch(action.type){
         case actionTypes.SET_NOTIFICATION:
              ToastMessage(action.data);
                return state;
          default: return state;    
     }

}