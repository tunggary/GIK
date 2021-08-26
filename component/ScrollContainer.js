import React from "react";
import { ScrollView, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default ({ children, style, contentContainerStyle }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        style={{
          backgroundColor: "white",
          marginTop: getStatusBarHeight(),
          ...style,
        }}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          ...contentContainerStyle,
        }}
      >
        {children}
      </ScrollView>
    </View>
  );
};
