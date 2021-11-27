
import {
    Switch,
  Route
  } from "react-router-dom";

import LandingPageContainer from "./Components/Landing/LandingPageContainer";
import SignUpContainer from "./Components/SignUp/SignUpContainer";
import SignInContainer from "./Components/SignIn/SignInContainer";

export const Routes=()=>{
return(<>
   <Switch>
   <Route  path="/home" >
                <LandingPageContainer/>
           </Route>  
       
           <Route path="/SignUp" >
                <SignUpContainer/>
           </Route>  
           <Route path="/SignIn" >
                <SignInContainer/>
           </Route>  
       </Switch>
   </>
)



}