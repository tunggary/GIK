import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import { AntDesign } from "@expo/vector-icons";

const Wrapper = styled.View`
  height: 60%;
  width: 70%;
`;

const Slide1 = styled.View`
  height: 100%;
  background-color: #979797;
`;

const Slide2 = styled.View`
  height: 100%;
  background-color: #97cae5;
`;

const Slide3 = styled.View`
  height: 100%;
  background-color: #92bbd9;
`;

const Slide4 = styled.View`
  height: 100%;
  background-color: #92bbd9;
`;

const TextCom = styled.Text`
  color: white;
  font-size: 30px;
`;

const NextBtn = styled.Image`
  position: absolute;
  top: -20px;
  left: 20px;
  width: 24px;
  height: 9px;
`;

const PrevBtn = styled.Image`
  position: absolute;
  top: -20px;
  right: 20px;
  width: 24px;
  height: 9px;
`;
export default function Slide() {
  return (
    <Wrapper>
      <Swiper
        showsButtons={true}
        dot={
          <View
            style={{
              backgroundColor: "white",
              width: 10,
              height: 10,
              borderWidth: 1,
              borderColor: "#171d52",
              borderRadius: "5px",
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
              borderRadius: "5px",
              margin: 15,
            }}
          />
        }
        paginationStyle={{ position: "absolute", bottom: -40 }}
        nextButton={<NextBtn source={require("../img/slideRight.png")} />}
        prevButton={<PrevBtn source={require("../img/slideLeft.png")} />}
      >
        <Slide1>
          <Image style={{ height: "100%", width: "100%" }} source={require("../img/back2.jpeg")} />
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
