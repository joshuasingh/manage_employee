
import {
    Switch,
  Route
  } from "react-router-dom";

import LandingPageContainer from "./Components/Landing/LandingPageContainer";
import SignUpContainer from "./Components/SignUp/SignUpContainer";
import SignInContainer from "./Components/SignIn/SignInContainer";
import ProtectedRoute from "./Components/ProtectedRoute";
import DashboardContainer from "./Components/ProtectedComponents/DashBoard/DashboardContainer";
import TempCom from "./Components/ProtectedComponents/DashBoard/TempCom";

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
           {/* <Route path="/dashboard" >
                <DashboardContainer/>
           </Route>   */}
           <ProtectedRoute path="/dashboard" Component={DashboardContainer}/>
           <ProtectedRoute path="/temp" Component={TempCom}/>

       </Switch>
   </>
)



}