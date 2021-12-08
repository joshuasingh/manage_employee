
import * as counterStore from "./reducers/counter";
import * as userStore from "./reducers/usermanagementStore";
import * as dashboardStore from "./reducers/dashBoardManagementStore";

export interface ApplicationState{
counterState: counterStore.IinitialState
loginState:userStore.IinitialState
dashboardState:dashboardStore.IinitialState
}
