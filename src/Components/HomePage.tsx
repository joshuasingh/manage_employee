
import * as React from "react";


interface IHomePageProps{
  name:string
}

const HomePage:React.FC<IHomePageProps> = ({name})=>{

    return (<>
     <div>this is it {name}</div>
    </>)
}

export default HomePage;