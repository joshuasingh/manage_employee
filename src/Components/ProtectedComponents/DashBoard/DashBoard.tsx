
import * as React from "react";
import { useEffect } from "react";
import {Navbar} from "../../../Controls/NavBar";
import * as userStore from "../../../redux/reducers/usermanagementStore";
import { FaUsers } from "react-icons/fa";
import {menuTypes} from "../../../Common/helperFile";
import * as dashBoardStore from "../../../redux/reducers/dashBoardManagementStore";
import {Spinner} from "../../../Controls/Spinner";
import {IdashboardItem} from "../../../redux/reducers/dashBoardManagementStore";

type IDashboardProps={
    dashboardState:dashBoardStore.IinitialState
}
& typeof userStore.actionCreators
& typeof dashBoardStore.actionCreators


const Dashboard:React.FC<IDashboardProps> = ({getMenuItems,dashboardState})=>{

   
    useEffect(()=>{

        getMenuItems();
    },[])



   const renderMenuCard=(menuItem:IdashboardItem)=>{
    
   let menuIcon=<></>;
   
   switch(menuItem.dashboarditem)
   {
       case menuTypes.EmployeeManagement:menuIcon=<FaUsers size={"150px"}/>
                                          break;
               default:<></>                            
   }


    return (
        <div className="dashboard-card">
        {menuIcon}
        </div>
    )
       

      
   }



    return (<>
            <div>
                <Navbar menuItems={[{title:"menu",onclick:()=>{console.log("eorking")}},
                    {title:"menu",onclick:()=>{console.log("eorking")}},
                    {title:"menu",onclick:()=>{console.log("eorking")}},{title:"menu",onclick:()=>{console.log("eorking")}}]}/>
                
                <div className='dashboard-menu-container'>
                {
                    dashboardState.isLoading?
                    <Spinner type={"Bars"} color="#00BFFF" height={80} width={80}/>
                    :
                    dashboardState.menuItems.map((dashItem)=>{
                    return renderMenuCard(dashItem);

                })
            }
                    </div>
                </div>
    </>)
}

export default Dashboard;