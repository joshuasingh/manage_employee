import React from "react";
import {
    Redirect,
    Switch,
    Route
  } from "react-router-dom";


import HomeContainer from "./Components/HomeContainer"
import HomePage from "./Components/HomePage";

export const Routes=()=>{
return(<>
   <Switch>
       <Route  path="/home" >
           <HomeContainer/>
           </Route>
           <Route path="/homessss" >
           
           </Route>  
       </Switch>
   </>
)



}