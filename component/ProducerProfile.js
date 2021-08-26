import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

const ProducerContainer = styled.View`
  flex-direction: row;
`;

const ProducerImage = styled.View`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 30px;
`;

const ProducerImageSmall = styled.View`
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 23px;
`;

const ProducerImageDetail = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
`;

const ProducerImageDetailSmall = styled.Image`
  width: 31px;
  height: 31px;
  border-radius: 16px;
`;

const ProducerName = styled.View`
  position: relative;
  height: 35px;
  top: 10px;
  left: -5px;
  max-width: ${width / 1.7}px;
  border-bottom-width: 2px;
  padding: 0 20px;
`;

const ProducerNameDetail = styled.Text`
  font-size: 24px;
  font-weight: 300;
`;

const ProducerNameSmall = styled.View`
  position: relative;
  height: 30px;
  top: 5px;
  left: -5px;
  max-width: ${width / 1.7}px;
  border-bottom-width: 2px;
  padding: 0 13px;
`;

const ProducerNameDetailSmall = styled.Text`
  font-size: 18px;
  font-weight: 300;
`;

export default ({ profileImage, profileName, smallsize }) => {
  return smallsize ? (
    <ProducerContainer>
      <ProducerImageSmall>
        <ProducerImageDetailSmall source={profileImage} />
      </ProducerImageSmall>
      <ProducerNameSmall>
        <ProducerNameDetailSmall>{profileName}</ProducerNameDetailSmall>
      </ProducerNameSmall>
    </ProducerContainer>
  ) : (
    <ProducerContainer>
      <ProducerImage>
        <ProducerImageDetail source={profileImage} />
      </ProducerImage>
      <ProducerName>
        <ProducerNameDetail>{profileName}</ProducerNameDetail>
      </ProducerName>
    </ProducerContainer>
  );
};
