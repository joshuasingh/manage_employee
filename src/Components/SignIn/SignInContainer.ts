import { connect } from "react-redux";
import { ApplicationState } from "../../redux/types";
import SignIn from "./SignIn";
import * as userStore from "../../redux/reducers/usermanagementStore";



export default connect(
(state:ApplicationState)=>({
    loginState:state.loginState
}),
{
 ...userStore.actionCreators
}
)(SignIn as any);