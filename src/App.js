import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "../src/routes";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //  <Wars/>
    // </div>
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
