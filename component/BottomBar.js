import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { Dimensions, TouchableOpacity } from "react-native";
const { width } = Dimensions.get("window");

const BottomBar = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
  background-color: #dbdbdb;
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
  font-size: 24px;
  font-weight: 300;
  color: #171d52;
`;

export default () => {
  return (
    <BottomBar>
      <BottomBarContainer>
        <TouchableOpacity>
          <FontAwesome name="heart-o" size={28} style={{ color: "#171d52" }} />
        </TouchableOpacity>
      </BottomBarContainer>
      <BottomBarContainer>
        <TouchableOpacity>
          <BottomBarText>OPTIONS</BottomBarText>
        </TouchableOpacity>
      </BottomBarContainer>
      <BottomBarContainer>
        <TouchableOpacity>
          <BottomBarText>BUY</BottomBarText>
        </TouchableOpacity>
      </BottomBarContainer>
    </BottomBar>
  );
};
