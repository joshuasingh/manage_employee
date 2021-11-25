
import * as React from "react";
import * as commonStore from "../redux/reducers/counter";


type IHomePageProps={
  counterState:commonStore.IinitialState
}
& typeof commonStore.actionCreators

const HomePage:React.FC<IHomePageProps> = ({counterState,signUpCompany})=>{

    return (<>
     <div onClick={()=>{signUpCompany("singh")}}>this is it {counterState.name}</div>
    </>)
}

export default HomePage;