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

const Logo = styled.Image``;

const LogoContainer = styled.View`
  position: absolute;
  top: ${height * 0.09}px;
  left: ${width * 0.55}px;
`;

const CircleTop = styled.Image`
  width: 259px;
  height: 259px;

  position: absolute;
  top: -${259 - height * 0.19}px;
  left: -${259 - width * 0.44}px;
`;

const CircleBottom = styled.Image`
  width: 259px;
  height: 259px;
  position: absolute;
  bottom: -${259 - height * 0.21}px;
  right: -${259 - width * 0.44}px;
`;

export default () => {
  return (
    <Container>
      <CircleTop source={require("../../img/main_circle.png")} />
      <CircleBottom source={require("../../img/main_circle.png")} />
      <LogoContainer>
        <Logo source={require("../../img/logo.png")} />
      </LogoContainer>
      <Slide />
    </Container>
  );
};
