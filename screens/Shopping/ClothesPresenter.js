import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import ScrollContainer from "../../component/ScrollContainer";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const TitleContainer = styled.View`
  width: 121px;
  height: 50px;
  border-bottom-width: 2px;
  border-color: #171d52;
  margin-right: ${width / 2}px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 28px;
  font-weight: 300;
  color: #171d52;
`;

const MainContainer = styled.View`
  width: ${(width / 10) * 9}px;
  background-color: #d6d6d6;
  border-radius: 25px;
  margin-top: 25px;
  margin-bottom: 30px;
  padding: 0 20px 20px 20px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftColumn = styled.View`
  width: ${(width / 10) * 3.8}px;
`;

const RightColumn = styled.View`
  width: ${(width / 10) * 3.8}px;
`;
const ImageCom = styled.Image`
  width: 100%;
  border-radius: 25px;
  margin-top: 20px;
`;
export default () => {
  const navigation = useNavigation();
  const gotoDetail = () =>
    navigation.navigate("ClothesDetail", { id: 123, name: "구찌티셔츠", price: 10000 });
  return (
    <ScrollContainer>
      <TitleContainer>
        <Title>Clothes</Title>
      </TitleContainer>
      <MainContainer>
        <LeftColumn>
          <TouchableOpacity onPress={gotoDetail}>
            <ImageCom source={require("../../img/clothes1.jpeg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageCom source={require("../../img/clothes2.jpeg")} />
          </TouchableOpacity>
        </LeftColumn>
        <RightColumn>
          <TouchableOpacity>
            <ImageCom source={require("../../img/clothes3.jpeg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageCom source={require("../../img/clothes4.jpeg")} />
          </TouchableOpacity>
        </RightColumn>
      </MainContainer>
    </ScrollContainer>
  );
};
