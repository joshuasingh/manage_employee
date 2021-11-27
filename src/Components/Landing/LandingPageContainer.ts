import { connect } from "react-redux";
import { ApplicationState } from "../../redux/types";
import * as commonStore from "../../redux/reducers/counter";
import LandingPage from "./LandingPage";



export default connect(
(state:ApplicationState)=>({

}),
{

}
)(LandingPage as any);