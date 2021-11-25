import * as  React from "react";
import './App.css';
import HomePage from "./Components/HomePage";
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import store from './redux/store';
import {BrowserRouter as Router } from "react-router-dom";
import {Routes} from "./routes";

const history=createBrowserHistory();
function App() {
  return (<>
    <Provider store={store}>
      <Router>
          <Routes/>
        </Router>
      </Provider>
    
  </>
  
  );
}

export default App;
