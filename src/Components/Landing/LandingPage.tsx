
import * as React from "react";
import * as commonStore from "../../redux/reducers/counter";
import AboutUs from "./AboutUs";


type ILandingPageProps={
 
}

const LandingPage:React.FC<ILandingPageProps> = ({})=>{



    return (<>
           <div className="landing-page-container">
             <div className="landing-page-introduction">
               <AboutUs/>
            </div>
            <div className="landing-page-feature-container">
                </div>
              <div className="landing-page-footer-container">
                  </div>  
         </div>
    </>)
}

export default LandingPage;