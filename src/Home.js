import {
  StackNavigator,
  TabNavigator,
  TabBarTop,
  TabBarBottom
} from "react-navigation";
import { Image } from "react-native";
import React from "react";

import Main from "./pages/Main";
import Need from "./pages/Need";
import Service from "./pages/Service";
import Mine from "./pages/Mine";

import home_normal from "./image/home_normal.png";
import home_selected from "./image/home_selected.png";
import mine_normal from "./image/mine_normal.png";
import mine_selected from "./image/mine_selected.png";
import need_normal from "./image/need_normal.png";
import need_selected from "./image/need_selected.png";
import service_normal from "./image/service_mormal.png";
import service_selected from "./image/service_selected.png";

/**
 * TabNavigator
 */
export default (Home = TabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: ({ navigation }) => ({
        title: "首页",
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={focused ? home_selected : home_normal}
            style={{ width: 32, height: 32 }}
          />
        )
      })
    },
    Need: {
      screen: Need,
      navigationOptions: ({ navigation }) => ({
        title: "需求",
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={focused ? need_selected : need_normal}
            style={{ width: 32, height: 32 }}
          />
        )
      })
    },
    Service: {
      screen: Service,
      navigationOptions: ({ navigation }) => ({
        title: "服务",
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={focused ? service_selected : service_normal}
            style={{ width: 32, height: 32 }}
          />
        )
      })
    },
    Mine: {
      screen: Mine,
      navigationOptions: ({ navigation }) => ({
        title: "我的",
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={focused ? mine_selected : mine_normal}
            style={{ width: 32, height: 32 }}
          />
        )
      })
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    backBehavior: "none",
    tabBarOptions: {
      activeBackgroundColor: "white",
      inactiveBackgroundColor: "white",
      scrollEnabled: false
    }
  }
));
