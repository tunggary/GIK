import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favor from "../screens/Favor";
import Menu from "../screens/Menu";

const Stack = createStackNavigator();
export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Favor} name="Favor" />
      <Stack.Screen component={Menu} name="Menu" />
    </Stack.Navigator>
  );
};
