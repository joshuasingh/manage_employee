
import * as React from "react";



type IAboutUsProps={
 
}

const AboutUs:React.FC<IAboutUsProps> = ({})=>{

    return (<>
           <div className="about-us-container about-us-container-dimension">
             <div className="about-us-title">About Us</div>   
             <div className="landing-company-title">Manage-With-Us</div>         
            <div className="about-us-content">Our product will simplify your complex paper handled work for managing 
                                               your work and employeed asdga asgd agsd asd haks dhasd adhakd ashdak dashdk
                                               asdhjasd haskdh </div>
              <div className="landing-page-button-holder"> 
             
               <button type="button" className="btn btn-primary">SignIn</button>
               <button type="button" className="btn btn-primary">SignUp</button>
               </div>                                 
         </div>
    </>)
}

export default AboutUs;