import React from "react";


interface Menutype{
    title:string,
    onclick:()=>void
}

type INavbarProps={
 menuItems:Menutype[] 
 }


export const Navbar:React.FC<INavbarProps>=({menuItems})=>{

const renderMenuItems=()=>{
  
    return(<> { menuItems.map((value:Menutype)=>{
             return( <>
             <span onClick={()=>{value.onclick()}} className="menu-items-text">{value.title}</span>
             </>)
     })}
     </>
    )
     
}



    return(<>
    <div className="navbar-container">
     <div className='navbar-title-holder'>
         </div>  
       <div className="navbar-menu-items">
           {renderMenuItems()}
           </div>  
    </div>
    </>)


}