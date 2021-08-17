import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

export default ({ goto, style }) => {
  const navigation = useNavigation();
  const gotoTabs = () => navigation.navigate(goto);
  return (
    <TouchableOpacity
      onPress={gotoTabs}
      style={{ top: 20, left: 25, position: "absolute", zIndex: 500, ...style }}
    >
      <Image source={require("../img/keyboard_return.png")} />
    </TouchableOpacity>
  );
};
