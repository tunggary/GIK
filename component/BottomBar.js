import React from "react";
import styled from "styled-components/native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Dimensions, TouchableOpacity } from "react-native";
const { width } = Dimensions.get("window");

const BottomBar = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BottomBarContainer = styled.View`
  width: ${width / 3.5}px;
  justify-content: center;
  align-items: center;
`;

const BottomBarText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const componentStyle = {
  elevation: 3,
  shadowColor: "black",
  shadowOpacity: 0.2,
  shadowOffset: {
    height: 0,
  },
  backgroundColor: "white",
  padding: 10,
  paddingTop: 15,
  paddingBottom: 15,
  borderRadius: 50,
  flexDirection: "row",
  justifyContent: "center",
};

export default () => {
  return (
    <BottomBar>
      <BottomBarContainer>
        <TouchableOpacity style={{ ...componentStyle, width: 52 }}>
          <FontAwesome name="heart-o" size={22} color={"black"} />
        </TouchableOpacity>
      </BottomBarContainer>
      <BottomBarContainer>
        <TouchableOpacity style={componentStyle}>
          <BottomBarText>OPTIONS</BottomBarText>
        </TouchableOpacity>
      </BottomBarContainer>
      <BottomBarContainer>
        <TouchableOpacity style={componentStyle}>
          <BottomBarText>BUY</BottomBarText>
          <AntDesign name="arrowright" size={20} />
        </TouchableOpacity>
      </BottomBarContainer>
    </BottomBar>
  );
};
