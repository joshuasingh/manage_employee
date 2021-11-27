import { connect } from "react-redux";
import { ApplicationState } from "../../redux/types";
import * as commonStore from "../../redux/reducers/counter";
import SignUp from "./SignUp";
import * as userStore from "../../redux/reducers/usermanagementStore";



export default connect(
(state:ApplicationState)=>({
    loginState:state.loginState
}),
{
 ...userStore.actionCreators
}
)(SignUp as any);