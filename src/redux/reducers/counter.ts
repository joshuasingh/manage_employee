
import { Reducer } from 'redux';
//add this later
import {actionTypes} from "../actionTypes"
import { AppThunkAction } from '../store';



export const actionCreators={

 signUpCompany:(tempString:string):AppThunkAction<any>=>(dispatch,getState)=>{

        //reducer body
          dispatch({type:actionTypes.CHANGE_THE_NAME,data:tempString});

 }




}

export interface IinitialState{
    name:string
}

let initialState={
name:"joshua singh"

}

export const reducer:Reducer<IinitialState>=(state=initialState,incomingAction)=>{

    const action=incomingAction;

     switch(action.type){
         case actionTypes.CHANGE_THE_NAME:
              return {name:action.data};
          default: return state;    
     }

}