
import * as React from "react";
import {Navbar} from "../../../Controls/NavBar";




type IDashboardProps={
 
}

const Dashboard:React.FC<IDashboardProps> = ({})=>{

    return (<>
            <div>
                <Navbar menuItems={[{title:"menu",onclick:()=>{console.log("eorking")}},
            {title:"menu",onclick:()=>{console.log("eorking")}},
            {title:"menu",onclick:()=>{console.log("eorking")}},{title:"menu",onclick:()=>{console.log("eorking")}}]}/>
                in the dashboard
                </div>
    </>)
}

export default Dashboard;