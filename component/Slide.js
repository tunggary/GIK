import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";

const Wrapper = styled.View`
  height: 50%;
  width: 88%;
  margin-bottom: 5%;
`;

const Slide1 = styled.View`
  border-radius: 35px;
  overflow: hidden;
  height: 100%;
  background-color: #979797;
`;

const Slide2 = styled.View`
  border-radius: 35px;
  overflow: hidden;
  height: 100%;
  background-color: #97cae5;
`;

const Slide3 = styled.View`
  border-radius: 35px;
  overflow: hidden;
  height: 100%;
  background-color: #92bbd9;
`;

const Slide4 = styled.View`
  border-radius: 35px;
  overflow: hidden;
  height: 100%;
  background-color: #92bbd9;
`;

const TextCom = styled.Text`
  color: white;
  font-size: 30px;
`;

const NextBtn = styled.Image`
  width: 12px;
  height: 14px;
`;

const PrevBtn = styled.Image`
  width: 12px;
  height: 14px;
`;

const SwiperContainer = styled.Image`
  position: relative;
  width: 100%;
  height: 100%;
`;
const SwiperFrame = styled.Image`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;
export default function Slide() {
  return (
    <Wrapper>
      <Swiper
        autoplay={true}
        showsButtons={true}
        style={{ borderRadius: 40 }}
        dot={
          <View
            style={{
              backgroundColor: "white",
              width: 10,
              height: 10,
              borderWidth: 1,
              borderColor: "#171d52",
              borderRadius: 5,
              margin: 15,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#171d52",
              width: 10,
              height: 10,
              borderRadius: 5,
              margin: 15,
            }}
          />
        }
        nextButton={<NextBtn source={require("../img/swiperRight.png")} />}
        prevButton={<PrevBtn source={require("../img/swiperLeft.png")} />}
      >
        <Slide1>
          <SwiperContainer source={require("../img/back2.jpeg")} />
          <SwiperFrame source={require("../img/Swiper_blur_frame.png")} />
        </Slide1>
        <Slide2>
          <TextCom>Beautiful</TextCom>
        </Slide2>
        <Slide3>
          <TextCom>And simple</TextCom>
        </Slide3>
        <Slide4>
          <TextCom>And simple</TextCom>
        </Slide4>
      </Swiper>
    </Wrapper>
  );
}
