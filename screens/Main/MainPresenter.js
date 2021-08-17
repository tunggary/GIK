import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Slide from "../../component/Slide";

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 151px;
  height: 68px;
`;

const LogoContainer = styled.View`
  position: absolute;
  top: 89px;
  left: 223px;
`;

const CircleTop = styled.Image`
  width: 180px;
  height: 179px;
  position: absolute;
  top: 0;
  left: 0;
`;

const CircleBottom = styled.Image`
  width: 192px;
  height: 206px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export default () => {
  return (
    <Container>
      <CircleTop source={require("../../img/BackgroundCircleTop.png")} />
      <CircleBottom source={require("../../img/BackgroundCircleBottom.png")} />
      <LogoContainer>
        <Logo source={require("../../img/main_page_logo.png")} />
      </LogoContainer>
      <Slide />
    </Container>
  );
};
