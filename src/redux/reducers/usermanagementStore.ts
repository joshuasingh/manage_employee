
import { Reducer } from 'redux';
//add this later
import {actionTypes} from "../actionTypes"
import { AppThunkAction } from '../store';
import axios from "axios";
import {NotificationAction,IMessageType,IPostion} from "./NotificationStore";

import { Messages }  from '../../Common/MessagesConstants';

axios.defaults.withCredentials = true;

let url=process.env.REACT_APP_SERVER_URL_DEV;
export interface ICompanyDetails{
    companyName:string,
    email:string,
    userName:string,
    password:string
}

export interface ILoginDetails{
    userName:string,
    password:string
}

type KnownActions=NotificationAction |any;



export const actionCreators={

    testNofity:():AppThunkAction<any>=>(dispatch,getState)=>{
        dispatch({type:actionTypes.SET_NOTIFICATION
            ,data:{message:"Unable to Create Account",
                 position:IPostion.TOPCENTER,
                 messageType:IMessageType.ERROR} })
       },

 isUserNameUnique:(userString:string,callBack:(isUnique:boolean)=>void):AppThunkAction<any>=>(dispatch,getState)=>{

  dispatch({type:actionTypes.CHECK_UNIQUE_USER_NAME});
  console.log(url)
  axios.post(url+"/Company/checkUsername",{userName:userString})
  .then(response=>{
      let {isUnique}=response.data;
      if(isUnique)
      {
          dispatch({type:actionTypes.CHECK_UNIQUE_USER_NAME});
      }
      else{
          dispatch({type:actionTypes.SET_NOT_UNIQUE_NAME_STATUS});
      }
      callBack(isUnique);
  })
  .catch(e=>{
    dispatch({type:actionTypes.SET_NOTIFICATION
        ,data:{message:Messages.userNameCheckFailed,
             position:IPostion.TOPCENTER,
             messageType:IMessageType.SUCCESS} })
     
      dispatch({type:actionTypes.SET_NOT_UNIQUE_NAME_STATUS});
  })

 },
 signUpCompany:(companyDetails:ICompanyDetails,callBack:()=>void):AppThunkAction<KnownActions>=>(dispatch,getState)=>{
     
    dispatch({type:actionTypes.START_SIGNUP_PROCESSING});

    axios.post(url+"/Company/addCompany",companyDetails)
    .then(response=>{
         
        dispatch({type:actionTypes.SET_NOTIFICATION
            ,data:{message:Messages.companyAccountCreated,
                 position:IPostion.TOPCENTER,
                 messageType:IMessageType.SUCCESS} })
         
        dispatch({type:actionTypes.STOP_SIGNUP_PROCESSING});       
 
         callBack();
    })
    .catch(e=>{

        dispatch({type:actionTypes.SET_NOTIFICATION
            ,data:{message:Messages.companyAccountCreationFailed,
                 position:IPostion.TOPCENTER,
                 messageType:IMessageType.ERROR} })
 
                 dispatch({type:actionTypes.STOP_SIGNUP_PROCESSING});
        
    })
     
       
},
 signInCompany:(loginDetail:ILoginDetails,callBack:()=>void):AppThunkAction<KnownActions>=>(dispatch,getState)=>{
     
    dispatch({type:actionTypes.START_LOGIN_PROCESS});

    axios.post(url+"/Company/SignIn",loginDetail)
    .then(response=>{
         
       
         
        dispatch({type:actionTypes.STOP_LOGIN_PROCESS});       
 
         callBack();
    })
    .catch(e=>{

        dispatch({type:actionTypes.SET_NOTIFICATION
            ,data:{message:Messages.loginfailed,
                 position:IPostion.TOPCENTER,
                 messageType:IMessageType.ERROR} })
 
                 dispatch({type:actionTypes.STOP_LOGIN_PROCESS});
        
    })
     
       
}



}

export interface IinitialState{
    uniqueUsername:boolean,
    signUpProcessing:boolean,
    loadingUserName:boolean,
    loginProcessing:boolean
}

let initialState:IinitialState={ 
  uniqueUsername:true,
  loadingUserName:false,
  signUpProcessing:false,
  loginProcessing:false
}

export const reducer:Reducer<IinitialState>=(state=initialState,incomingAction)=>{

    const action=incomingAction;

     switch(action.type){
         case actionTypes.CHECK_UNIQUE_USER_NAME:
                return {...state,loadingUserName:true}
         case actionTypes.SET_UNIQUE_NAME_STATUS:
              return {...state,uniqueUsername:true,loadingUserName:false};
          case actionTypes.SET_NOT_UNIQUE_NAME_STATUS:
              return {...state,uniqueUsername:false,loadingUserName:false} 
          case actionTypes.START_SIGNUP_PROCESSING:
                 return {...state,signUpProcessing:true}
           case actionTypes.STOP_SIGNUP_PROCESSING:
                return {...state,signUpProcessing:false};
           case actionTypes.START_LOGIN_PROCESS:
                    return {...state,loginProcessing:true};
          case actionTypes.STOP_LOGIN_PROCESS:
                        return {...state,loginProcessing:false};    
                         
          default: return state;    
     }

}