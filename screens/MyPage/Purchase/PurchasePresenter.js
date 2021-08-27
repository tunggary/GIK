import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import NavigationBtn from "../../../component/NavigationBtn";
import ScrollContainer from "../../../component/ScrollContainer";
import styled from "styled-components/native";
import ProducerProfile from "../../../component/ProducerProfile";

const { width } = Dimensions.get("window");

const Header = styled.View`
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 25px;
  width: ${width * 0.7}px;
  align-items: center;
`;

const HeaderLogo = styled.Image`
  width: 19px;
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
  margin-bottom: 30px;
`;

const ProducerContainer = styled.View`
  margin-left: 5px;
  margin-bottom: 10px;
`;

const Content = styled.View`
  height: 100px;
  border-bottom-width: 1px;
  border-color: #828282;
  padding-right: 5px;
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

const ProcessContainer = styled.View`
  width: 155px;
  height: 30px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
`;

const ProcessIcon = styled.View`
  width: 120px;
`;

const ProcessText = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const ProcessBar = styled.View`
  border-width: 1px;
  border-color: #171d52;
`;

const IconStyle = {
  width: 10,
  height: 10,
  borderRadius: 5,
  borderWidth: 2,
  backgroundColor: "white",
  borderColor: "#171d52",
  position: "absolute",
  top: -4,
};

const TextStyle = {
  fontSize: 12,
  color: "#888888",
};

const QuestionContaier = styled.View`
  width: 47px;
  height: 34px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #979797;
  align-items: center;
  justify-content: center;
`;

const QuestionText = styled.Text`
  font-size: 16px;
`;

const QuestionPostion = {
  position: "absolute",
  bottom: 40,
  left: 40,
};
export default () => {
  return (
    <ScrollContainer>
      <NavigationBtn goto="Tabs" />
      <Header>
        <HeaderLogo source={require("../../../img/myPage/receipt.png")} />
        <HeaderTitle>구매 내역</HeaderTitle>
      </Header>
      <MainContainer style={boxShadow}>
        <ProducerContainer>
          <ProducerProfile
            profileImage={require("../../../img/clothes2.jpeg")}
            profileName="Studio Yoon"
            smallsize={true}
          />
        </ProducerContainer>
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
          <TotalContainer>
            <TotalPriceText>합계:</TotalPriceText>
            <TotalPrice>4,000,000 원</TotalPrice>
          </TotalContainer>
          <ProcessContainer>
            <ProcessIcon>
              <ProcessBar />
              <View style={{ ...IconStyle, left: 0 }} />
              <View style={{ ...IconStyle, left: 55, backgroundColor: "#171d52" }} />
              <View style={{ ...IconStyle, left: 110 }} />
            </ProcessIcon>
            <ProcessText>
              <Text style={{ ...TextStyle }}>주문확인</Text>
              <Text style={{ ...TextStyle, color: "black" }}>배송중</Text>
              <Text style={{ ...TextStyle }}>배송완료</Text>
            </ProcessText>
          </ProcessContainer>
        </PriceContainer>
        <TouchableOpacity style={QuestionPostion}>
          <QuestionContaier>
            <QuestionText>문의</QuestionText>
          </QuestionContaier>
        </TouchableOpacity>
      </MainContainer>
      <MainContainer style={boxShadow}>
        <ProducerContainer>
          <ProducerProfile
            profileImage={require("../../../img/clothes2.jpeg")}
            profileName="Studio Yoon"
            smallsize={true}
          />
        </ProducerContainer>
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
          <TotalContainer>
            <TotalPriceText>합계:</TotalPriceText>
            <TotalPrice>4,000,000 원</TotalPrice>
          </TotalContainer>
          <ProcessContainer>
            <ProcessIcon>
              <ProcessBar />
              <View style={{ ...IconStyle, left: 0 }} />
              <View style={{ ...IconStyle, left: 55, backgroundColor: "#171d52" }} />
              <View style={{ ...IconStyle, left: 110 }} />
            </ProcessIcon>
            <ProcessText>
              <Text style={{ ...TextStyle }}>주문확인</Text>
              <Text style={{ ...TextStyle, color: "black" }}>배송중</Text>
              <Text style={{ ...TextStyle }}>배송완료</Text>
            </ProcessText>
          </ProcessContainer>
        </PriceContainer>
        <TouchableOpacity style={QuestionPostion}>
          <QuestionContaier>
            <QuestionText>문의</QuestionText>
          </QuestionContaier>
        </TouchableOpacity>
      </MainContainer>
    </ScrollContainer>
  );
};
