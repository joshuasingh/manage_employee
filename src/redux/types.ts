
import * as counterStore from "./reducers/counter";
import * as userStore from "./reducers/usermanagementStore";

export interface ApplicationState{
counterState: counterStore.IinitialState
loginState:userStore.IinitialState
}
