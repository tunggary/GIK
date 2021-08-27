import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import NavigationBtn from "../../../component/NavigationBtn";
import ScrollContainer from "../../../component/ScrollContainer";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Header = styled.View`
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 25px;
  width: ${width * 0.7}px;
  align-items: center;
`;

const HeaderLogo = styled.Image`
  width: 22px;
  height: 19px;
`;

const HeaderTitle = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`;

const MainContainer = styled.View`
  width: ${width * 0.8}px;
  padding: 20px;
  border-radius: 20px;
`;

const Content = styled.View`
  height: 100px;
  border-bottom-width: 1px;
  border-color: #828282;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const boxShadow = {
  elevation: 3,
  shadowColor: "black",
  shadowOpacity: 0.2,
  shadowOffset: {
    height: 2,
  },
  backgroundColor: "white",
};

const ContentImageBox = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

const ContentImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

const ContentTitle = styled.Text`
  width: ${width * 0.8 - 232}px;
  height: 70px;
  font-size: 14px;
  font-weight: 300;
  padding-left: 10px;
`;

const ContentPriceBox = styled.View`
  height: 50px;
  justify-content: flex-end;
`;

const ContentPrice = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: #888888;
`;

const PriceContainer = styled.View`
  align-items: flex-end;
`;

const DeliveryContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding-right: 10px;
`;

const DeliveryText = styled.Text`
  font-size: 16px;
  color: #888888;
  font-weight: 300;
`;

const DeliveryPrice = styled.Text`
  font-size: 16px;
  color: #888888;
  font-weight: 300;
  width: 105px;
  text-align: right;
`;

const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 10px;
  border-bottom-width: 1px;
  border-color: #828282;
`;

const TotalPriceText = styled.Text`
  font-size: 16px;
  color: #888888;
  font-weight: 300;
`;

const TotalPrice = styled.Text`
  font-size: 16px;
  color: #888888;
  font-weight: 300;
  width: 105px;
  text-align: right;
`;

const Purchase = styled.View`
  margin-top: 10px;
  flex-direction: row;
  border-width: 1px;
  border-color: #979797;
  width: 126px;
  height: 34px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;

const PurchaseText = styled.Text`
  font-size: 18px;
`;

export default () => {
  return (
    <ScrollContainer>
      <NavigationBtn goto="Tabs" />
      <Header>
        <HeaderLogo source={require("../../../img/myPage/shopping_list.png")} />
        <HeaderTitle>쇼핑 카트</HeaderTitle>
      </Header>
      <MainContainer style={boxShadow}>
        <Content>
          <TouchableOpacity>
            <ContentImageBox style={boxShadow}>
              <ContentImage source={require("../../../img/clothes3.jpeg")} />
            </ContentImageBox>
          </TouchableOpacity>
          <ContentTitle>여름 셔츠 한정판 특가</ContentTitle>
          <ContentPriceBox>
            <ContentPrice>1,000,000 원</ContentPrice>
          </ContentPriceBox>
        </Content>
        <Content>
          <TouchableOpacity>
            <ContentImageBox style={boxShadow}>
              <ContentImage source={require("../../../img/clothes3.jpeg")} />
            </ContentImageBox>
          </TouchableOpacity>
          <ContentTitle>여름 셔츠 한정판 특가</ContentTitle>
          <ContentPriceBox>
            <ContentPrice>1,000,000 원</ContentPrice>
          </ContentPriceBox>
        </Content>
        <Content>
          <TouchableOpacity>
            <ContentImageBox style={boxShadow}>
              <ContentImage source={require("../../../img/clothes3.jpeg")} />
            </ContentImageBox>
          </TouchableOpacity>
          <ContentTitle>여름 셔츠 한정판 특가</ContentTitle>
          <ContentPriceBox>
            <ContentPrice>1,000,000 원</ContentPrice>
          </ContentPriceBox>
        </Content>
        <PriceContainer>
          <DeliveryContainer>
            <DeliveryText>배송비:</DeliveryText>
            <DeliveryPrice>4,000,000 원</DeliveryPrice>
          </DeliveryContainer>
          <TotalContainer>
            <TotalPriceText>합계:</TotalPriceText>
            <TotalPrice>4,000,000 원</TotalPrice>
          </TotalContainer>
          <TouchableOpacity>
            <Purchase>
              <PurchaseText>구매하기</PurchaseText>
              <AntDesign name="arrowright" size={20} style={{ color: "#171d52", marginLeft: 10 }} />
            </Purchase>
          </TouchableOpacity>
        </PriceContainer>
      </MainContainer>
    </ScrollContainer>
  );
};
