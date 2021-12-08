import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationState } from './types';
import * as commonStore from "./reducers/counter"; 
import * as usermanagementStore from "./reducers/usermanagementStore";
import * as NotificationStore from "./reducers/NotificationStore";
import * as dashboardStore from "./reducers/dashBoardManagementStore";




export const reducers={

    counterState:commonStore.reducer,
    loginState:usermanagementStore.reducer,
    notifyState:NotificationStore.reducer,
    dashboardState:dashboardStore.reducer
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

