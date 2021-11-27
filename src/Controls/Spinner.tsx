import React from "react";
import Loader from "react-loader-spinner";


type ISpinnerProps={
 type:"Circles"|"Bars"|"Grid"
 color:string,
 height:number,
 width:number
}


export const Spinner:React.FC<ISpinnerProps>=({type,color,height,width})=>{

    return(<>
    <div className="spinner-container">
    <Loader type={type} color={color} height={height} width={width}/>
    </div>
    </>)


}