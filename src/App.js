import React,{createContext,useEffect, useState} from "react";
import { Routes } from "./routes";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/index";


function App() {
  return (
      <Provider store={store}>
      <Routes />
      </Provider>
  );
}

export default App;
