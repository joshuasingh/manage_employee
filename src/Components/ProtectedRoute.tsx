import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useCookies } from "react-cookie";



const ProtectedRoute:React.FC<any>=({ Component, ...restOfProps })=>{
  
  
const [cookies] = useCookies(['Comp_Token']);
    const isAuthenticated = cookies.Comp_Token;
  
  return (
    <Route
      {...restOfProps}
      render={(props:any) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
}

export default ProtectedRoute;