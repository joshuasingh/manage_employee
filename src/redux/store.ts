import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationState } from './types';
import * as commonStore from "./reducers/counter"; 




export const reducers={

    counterState:commonStore.reducer
}


export interface AppThunkAction<TAction>{
    (dispatch:(action:TAction| AppThunkAction<TAction>)=>void,getState:()=>ApplicationState):void;
}

export function configureStore(initialState?:ApplicationState){
    const createStoreWithMiddleware=composeWithDevTools(applyMiddleware(thunk))(createStore);

    //combine all the reducers together
     const allReducers=combineReducers(reducers);
     const store=createStoreWithMiddleware(allReducers,initialState);
     return store
}


const store=configureStore();

export default store;

