import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainContainer from "../screens/Main";
import Menu from "../screens/Menu";
import Shopping from "../screens/Shopping";
import Search from "../screens/Search";
import Mypage from "../screens/Mypage";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();
export default () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name == "Main") {
            return <Image source={require("../img/bookmark.png")} />;
          } else if (route.name == "Search") {
            return <Image source={require("../img/search.png")} />;
          } else if (route.name == "Menu") {
            return <Image source={require("../img/menu.png")} />;
          } else if (route.name == "Shopping") {
            return focused ? (
              <Ionicons name="cart-sharp" color="#171d52" size={28} />
            ) : (
              <Ionicons name="cart-outline" color="#171d52" size={28} />
            );
          } else {
            return focused ? (
              <Ionicons name="person-sharp" color="#171d52" size={28} />
            ) : (
              <Ionicons name="person-outline" color="#171d52" size={28} />
            );
          }
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "white",
          borderTopColor: "white",
          paddingLeft: 40,
          paddingRight: 40,
        },
        showLabel: false,
      }}
    >
      <Tab.Screen name="Main" component={MainContainer} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Shopping" component={Shopping} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  );
};
