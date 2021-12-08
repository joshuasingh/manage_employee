import { connect } from "react-redux";
import { ApplicationState } from "../../../redux/types";
import * as commonStore from "../../../redux/reducers/counter";
import DashBoard from "./DashBoard";
import * as userStore from "../../../redux/reducers/usermanagementStore";
import * as dashBoardStore from "../../../redux/reducers/dashBoardManagementStore";

export default connect(
(state:ApplicationState)=>({
    dashboardState:state.dashboardState
}),
{
    ...userStore.actionCreators,
    ...dashBoardStore.actionCreators

}
)(DashBoard as any);