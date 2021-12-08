
import { Reducer } from 'redux';
//add this later
import {actionTypes} from "../actionTypes"
import { AppThunkAction } from '../store';
import axios from "axios";
import {NotificationAction,IMessageType,IPostion} from "./NotificationStore";

import { Messages }  from '../../Common/MessagesConstants';
import { menuTypes } from '../../Common/helperFile';

axios.defaults.withCredentials = true;
let url=process.env.REACT_APP_SERVER_URL_DEV;

export interface IdashboardItem{
    dashboarditem:menuTypes
}


type KnownActions=NotificationAction |any;



export const actionCreators={

    testNofity:():AppThunkAction<any>=>(dispatch,getState)=>{
        dispatch({type:actionTypes.SET_NOTIFICATION
            ,data:{message:"Unable to Create Account",
                 position:IPostion.TOPCENTER,
                 messageType:IMessageType.ERROR} })
       },

 getMenuItems:():AppThunkAction<any>=>(dispatch,getState)=>{

  dispatch({type:actionTypes.FETCH_MENU_ITEMS});
  
  axios.get(url+"/dashboard/getDashBoardMenu")
  .then(response=>{
      let {dashItems}=response.data;

      dispatch({type:actionTypes.RECIEVE_MENU_ITEMS,data:dashItems});
  })
  .catch(e=>{
    dispatch({type:actionTypes.SET_NOTIFICATION
        ,data:{message:Messages.menufetchfailed,
             position:IPostion.TOPCENTER,
             messageType:IMessageType.ERROR} })
     
      
  })

 }

}

export interface IinitialState{
   isLoading:boolean,
   menuItems:IdashboardItem[]
}

let initialState:IinitialState={ 
    isLoading:true,
    menuItems:[]
}

export const reducer:Reducer<IinitialState>=(state=initialState,incomingAction)=>{

    const action=incomingAction;

     switch(action.type){
         case actionTypes.FETCH_MENU_ITEMS:
                return {...state,loading:true}
         case actionTypes.RECIEVE_MENU_ITEMS:
              return {...state,isLoading:false,menuItems:action.data};
          default: return state;    
     }

}