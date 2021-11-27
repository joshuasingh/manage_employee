
import * as React from "react";
import {useState,useEffect} from "react";
import * as userStore from "../../redux/reducers/usermanagementStore";
import {ICompanyDetails} from "../../redux/reducers/usermanagementStore";
import {Spinner} from "../../Controls/Spinner";
import {RouteComponentProps} from "react-router-dom";
import { useHistory } from 'react-router-dom';

type ISignInProps={
  loginState:userStore.IinitialState;
}
& typeof userStore.actionCreators
& typeof RouteComponentProps

interface ISignInFormData{
   userName:string,
   password:string
}

interface ISignInErrorData{
    userNameErr:string,
    passwordErr:string
}


const SignIn:React.FC<ISignInProps> = ({loginState,signInCompany})=>{
     
   const history=useHistory();
    const [loginData,setLoginData]=useState<ISignInFormData>({ userName:"",
    password:""
});

    const [loginErr,setLoginErr]=useState<ISignInErrorData>({userNameErr:"",
    passwordErr:""
});


     const receiveCompanyData=(key:any,value:string)=>{
      
       
        let tempLoginData={...loginData,[key]:value};
        
        
        setLoginData({...tempLoginData});
        
        return
        
    }

    useEffect(()=>{

        checkFormError();
    },[])

    
    const handleloginSuccess=()=>{
         history.push("/home")
    }
    
   

    

    const loginToAccount=()=>{
        
         let errValues=Object.values(loginErr).some((value:string)=>{return value.length!==0});
      
       
        if(!errValues)
        { 
            
            signInCompany(loginData,handleloginSuccess);
        }

        return;

    }

    

    const checkFormError=()=>{
       
        
        let tempErrData={ ...loginErr};

        if(loginData.userName.length===0 )
        {
            tempErrData.userNameErr="User Name is Required";
        }
        else{
            tempErrData.userNameErr="";
        }
        
        if(loginData.password.length===0)
        {
            tempErrData.passwordErr="password is Required";
        }
        else{
            tempErrData.passwordErr="";
        }
        
        if(loginData.userName.length===0){
            tempErrData.userNameErr="Username is Required";
        }
        else{
            tempErrData.userNameErr="";
        }

       
  
        setLoginErr(tempErrData);

       
        
        
    }

    const getLoadingStatus=()=>{
        
        if(loginState.loginProcessing)
        {
            return <Spinner type={"Bars"} color="#00BFFF" height={80} width={80}/>;
        }
        else{
            return
        }
    }

    return (<>
    
    
    <div className="signup-form-page">
     {getLoadingStatus()} 
           <div className="signup-form">
            <form >
            <div className="form-group">
    <label >User Name</label>
    <input type="text" className="form-control" value={loginData.userName} onChange={(e)=>{receiveCompanyData("userName",e.target.value)}} onBlur={()=>{checkFormError()}}/>
    <small className="form-text text-muted">{loginErr.userNameErr}</small>
  </div>
   <div className="form-group">
     <label >Password</label>
     <input type="password" className="form-control" 
     value={loginData.password}
     onChange={(e)=>{receiveCompanyData("password",e.target.value)}}
     onBlur={()=>{checkFormError()}}
     />
    <small className="form-text text-muted">{loginErr.passwordErr}</small>
  </div>
  
</form>
<button  className="btn btn-primary" onClick={()=>{loginToAccount()}}>Sign Up</button>
</div>
   </div>
     
    </>)
}

export default SignIn;