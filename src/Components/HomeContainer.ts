import { connect } from "react-redux";
import { ApplicationState } from "../redux/types";
import * as commonStore from "../redux/reducers/counter";
import HomePage from "./HomePage";



export default connect(
(state:ApplicationState)=>({
    counterState:state.counterState
}),
{
 ...commonStore.actionCreators
}
)(HomePage as any);