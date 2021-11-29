import { connect } from "react-redux";
import { ApplicationState } from "../../../redux/types";
import * as commonStore from "../../../redux/reducers/counter";
import DashBoard from "./DashBoard";



export default connect(
(state:ApplicationState)=>({

}),
{

}
)(DashBoard as any);