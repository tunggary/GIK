import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Search from "../screens/Search";
import Login from "../screens/Login";
import SignUp from "../screens/Login/SignUp";
import SignUpInfo from "../screens/Login/SignUpInfo";
import Shopping from "../screens/Shopping";
import Clothes from "../screens/Shopping/ClothesContainer";
import ClothesDetail from "../screens/Shopping/DetailContainer";
import Question from "../screens/MyPage/QuestionContainer";
import Bookmark from "../screens/MyPage/Bookmark";
import ShoppingList from "../screens/MyPage/ShoppingList";
import Purchase from "../screens/MyPage/Purchase";

const Stack = createStackNavigator();
export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Shopping" component={Shopping} />
      <Stack.Screen name="Clothes" component={Clothes} />
      <Stack.Screen name="ClothesDetail" component={ClothesDetail} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpInfo" component={SignUpInfo} />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="Bookmark" component={Bookmark} />
      <Stack.Screen name="ShoppingList" component={ShoppingList} />
      <Stack.Screen name="Purchase" component={Purchase} />
    </Stack.Navigator>
  );
};
