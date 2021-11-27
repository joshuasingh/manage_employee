import * as  React from "react";
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import store from './redux/store';
import {BrowserRouter as Router } from "react-router-dom";
import {Routes} from "./routes";
import { ToastContainer} from "react-toastify";

require('dotenv').config();
const history=createBrowserHistory();
function App() {
  return (<>
    <Provider store={store}>
      <Router >
          <Routes/>
        </Router>
        <ToastContainer/>
      </Provider>
    
  </>
  
  );
}

export default App;
