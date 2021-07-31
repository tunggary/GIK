import React from "react";
import styled from "styled-components/native";
import Slide from "../../component/Slide";

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 109px;
  height: 72px;
  margin-bottom: 80px;
`;

const LogoContainer = styled.View``;

export default () => {
  return (
    <Container>
      <LogoContainer>
        <Logo source={require("../../img/Layer1.png")} />
      </LogoContainer>
      <Slide />
    </Container>
  );
};
