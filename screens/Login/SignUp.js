import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import NavigationBtn from "../../component/NavigationBtn";
import ScrollContainer from "../../component/ScrollContainer";

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
`;

const Logo = styled.Image`
  margin-top: 20px;
`;

export default () => {
  const navigation = useNavigation();
  return (
    <ScrollContainer>
      <NavigationBtn goto={"Login"} />
      <Logo source={require("../../img/logo.png")} />
      <View
        style={{
          width: "80%",
          height: 500,
          backgroundColor: "#c4c4c4",
          marginTop: 50,
          borderRadius: 25,
        }}
      ></View>
      <TouchableOpacity onPress={() => navigation.navigate("SignUpInfo")}>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 240,
            width: 92,
            height: 36,
            backgroundColor: "#171d52",
            color: "white",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </ScrollContainer>
  );
};
