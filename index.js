import {
  AppRegistry
} from "react-native";
import React, {
  Component,
} from 'react';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import Base from "./src/Base";
import Home from "./src/Home";
import Login from "./src/pages/Login";
export default class App extends Component{
  render(){
    return(
      <Base/>
    );
  }
};
AppRegistry.registerComponent("FirstApp", () => Home);