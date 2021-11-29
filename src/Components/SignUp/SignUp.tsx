
import * as React from "react";
import {useState,useEffect} from "react";
import * as userStore from "../../redux/reducers/usermanagementStore";
import {ICompanyDetails} from "../../redux/reducers/usermanagementStore";
import {Spinner} from "../../Controls/Spinner";
import {RouteComponentProps} from "react-router-dom";
import { useHistory } from 'react-router-dom';

type ISignUpProps={
  loginState:userStore.IinitialState;
}
& typeof userStore.actionCreators
& typeof RouteComponentProps

interface ISignUpFormData{
    companyName:string,
    email:string,
    userName:string,
    password:string,
    confirmPassword:string
}

interface ISignUpErrorData{
    companyNameErr:string,
    emailErr:string,
    userNameErr:string,
    passwordErr:string,
    confirmPasswordErr:string
}


const SignUp:React.FC<ISignUpProps> = ({isUserNameUnique,loginState,signUpCompany,testNofity})=>{
     
   const history=useHistory();
    const [companyData,setCompanyData]=useState<ISignUpFormData>({  companyName:"",
    userName:"",
    email:"",
    password:"",
    confirmPassword:""});

    const [companyErr,setCompanyErr]=useState<ISignUpErrorData>({  companyNameErr:"",
    userNameErr:"",
    emailErr:"",
    passwordErr:"",
    confirmPasswordErr:""});


     const receiveCompanyData=(key:any,value:string)=>{
      
       
        let tempCompanyData={...companyData,[key]:value};
        
        
        setCompanyData({...tempCompanyData});
        
        return
        
    }

    useEffect(()=>{

        checkFormError();
    },[])

    const handleAccountCreatedSuccess=()=>{
         history.push("/home")
    }
    
    const setUserNameStatus=(isUnique:boolean)=>{
        let tempErrData={...companyErr};

        if(!isUnique)
        {
            tempErrData.userNameErr="Enter a unique username";
            setCompanyErr(tempErrData);
         }
        else{
            let companyDetails:ICompanyDetails={...companyData};

              signUpCompany(companyDetails,handleAccountCreatedSuccess);
        }


        
        
        return;
    }

    

    const signUpCompanyDetails=()=>{
        
         let errValues=Object.values(companyErr).some((value:string)=>{return value.length!==0});
      
       
        if(!errValues)
        { 
            
            isUserNameUnique(companyData.userName,setUserNameStatus);
        }

        return;

    }

    

    const checkFormError=()=>{
       
        
        let tempErrData={ ...companyErr};

        if(companyData.companyName.length===0 )
        {
            tempErrData.companyNameErr="Company Name is Required";
        }
        else{
            tempErrData.companyNameErr="";
        }
        
        if(companyData.email.length===0)
        {
            tempErrData.emailErr="Company Email is Required";
        }
        else{
            tempErrData.emailErr="";
        }
        
        if(companyData.userName.length===0){
            tempErrData.userNameErr="Username is Required";
        }
        else{
            tempErrData.userNameErr="";
        }

       

        if(companyData.password.length===0)
        {
            tempErrData.passwordErr="password is required";
        }
        else if(companyData.password.length<8)
        {
            tempErrData.passwordErr="password length should be atleast 8 characters";
        }
        else{
            tempErrData.passwordErr="";
        }

        if(companyData.confirmPassword.length===0)
        {
            tempErrData.confirmPasswordErr="Please re-enter the password";
        }
       else if(companyData.confirmPassword!==companyData.password)
        {
            tempErrData.confirmPasswordErr="passwords do not match";
        }
        else{
            tempErrData.confirmPasswordErr="";
        }
  
        setCompanyErr(tempErrData);

       
        
        
    }

    const getLoadingStatus=()=>{
        
        if(loginState.signUpProcessing)
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
            <form autoComplete="false">
            <div className="form-group">
    <label >Company Name</label>
    <input type="text" className="form-control" value={companyData.companyName} onChange={(e)=>{receiveCompanyData("companyName",e.target.value)}} onBlur={()=>{checkFormError()}}/>
    <small className="form-text text-muted">{companyErr.companyNameErr}</small>
  </div>
  <div className="form-group">
    <label >Provide a valid Email.</label>
    <input type="email" className="form-control" value={companyData.email}
     onChange={(e)=>{receiveCompanyData("email",e.target.value)}}
     onBlur={()=>{checkFormError()}}
    />
    <small className="form-text text-muted">{companyErr.emailErr}</small>
  </div>
  <div className="form-group">
    <label >Provide a unique username.</label>
    <input type="text" className="form-control" value={companyData.userName}
     onChange={(e)=>{receiveCompanyData("userName",e.target.value)}}
     onBlur={()=>{checkFormError()}}
     autoComplete="false"
    />
    <small className="form-text text-muted">{companyErr.userNameErr}</small>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" 
    value={companyData.password}
    onChange={(e)=>{receiveCompanyData("password",e.target.value)}}
    onBlur={()=>{checkFormError()}}
    
    />
    <small className="form-text text-muted">{companyErr.passwordErr}</small>
  </div>
  <div className="form-group">
    <label >Confirm Password</label>
    <input type="password" className="form-control" 
     value={companyData.confirmPassword}
     onChange={e=>{receiveCompanyData("confirmPassword",e.target.value)}}
     onBlur={()=>{checkFormError()}}
    />
    <small className="form-text text-muted">{companyErr.confirmPasswordErr}</small>
  </div>
  
</form>
<div className="form-button-container">
<button  className="btn btn-primary" onClick={()=>{signUpCompanyDetails()}}>Sign Up</button>
<button  className="btn btn-primary" onClick={()=>{history.push("/home")}}>Back</button>
</div>
</div>
   </div>
     
    </>)
}

export default SignUp;