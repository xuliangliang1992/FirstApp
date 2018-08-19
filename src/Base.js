import { StackNavigator } from "react-navigation";
import { Image } from "react-native";
import React from "react";

import Login from "./pages/Login";
import Home from "./Home";
export default (Base = StackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
}));
