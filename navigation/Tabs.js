import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screens/Main";
import Shopping from "../screens/Shopping";
import Search from "../screens/Search";
import MyPage from "../screens/MyPage";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
export default () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name == "Main") {
            return focused ? (
              <Image source={require("../img/home_button_clicked.png")} />
            ) : (
              <Image source={require("../img/home_button.png")} />
            );
          } else if (route.name == "Search") {
            return <Image source={require("../img/search_button.png")} />;
          } else if (route.name == "Shopping") {
            return <Image source={require("../img/shopping_button.png")} />;
          } else {
            return focused ? (
              <Image source={require("../img/private_button_clicked.png")} />
            ) : (
              <Image source={require("../img/private_button.png")} />
            );
          }
        },
      })}
      tabBarOptions={{
        style: {
          position: "absolute",
          backgroundColor: "rgba(238,238,238,0.7)",
          borderTopColor: "white",
          paddingBottom: 0,
          paddingLeft: 5,
          marginHorizontal: 25,
          marginBottom: 30,
          borderRadius: 40,
          height: 50,
          elevation: 0,
        },
        showLabel: false,
      }}
    >
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen
        name="Search"
        component={Search}
        listeners={{
          tabPress: (e) => {
            navigation.navigate("Search");
            e.preventDefault();
          },
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={Shopping}
        listeners={{
          tabPress: (e) => {
            navigation.navigate("Shopping");
            e.preventDefault();
          },
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        listeners={{
          tabPress: (e) => {
            if (!isLogin) {
              navigation.navigate("Login");
              e.preventDefault();
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};
