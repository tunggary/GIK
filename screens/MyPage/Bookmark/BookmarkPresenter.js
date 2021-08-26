import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import NavigationBtn from "../../../component/NavigationBtn";
import ScrollContainer from "../../../component/ScrollContainer";
import styled from "styled-components/native";
import ProducerProfile from "../../../component/ProducerProfile";

const { width, height } = Dimensions.get("window");

const Header = styled.View`
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 25px;
  width: ${width * 0.7}px;
  align-items: center;
`;

const HeaderLogo = styled.Image`
  width: 14px;
  height: 18px;
`;

const HeaderTitle = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 2px;
`;

const MainContainer = styled.View``;

const ProducerContainer = styled.View`
  width: 90%;
  margin-top: 12px;
`;

const MessageContainer = styled.View`
  width: ${width * 0.8}px;
  height: 140px;
  border-radius: 20px;
  align-items: center;
  margin-bottom: 40px;
`;

const boxShadow = {
  elevation: 3,
  shadowColor: "#E5E5E5",
  shadowOpacity: 1,
  shadowOffset: {
    height: 2,
  },
  backgroundColor: "white",
};

const MessageBox = styled.View`
  width: 90%;
  height: 37px;
  background-color: #f2f2f2;
  justify-content: center;
  padding: 0 10px;
  border-radius: 7px;
  margin-top: 15px;
`;

const Message = styled.Text`
  font-size: 14px;
  font-weight: 300;
`;

const Alert = styled.View`
  position: absolute;
  right: -10px;
  top: -10px;
  width: 30px;
  height: 30px;
  background-color: #ff5b5b;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

const AlertText = styled.Text`
  font-size: 16px;
  color: white;
`;

export default () => {
  return (
    <ScrollContainer>
      <NavigationBtn goto="Tabs" />
      <Header>
        <HeaderLogo source={require("../../../img/myPage/bookmark.png")} />
        <HeaderTitle>찜목록</HeaderTitle>
      </Header>
      <MainContainer>
        <TouchableOpacity>
          <MessageContainer style={boxShadow}>
            <ProducerContainer>
              <ProducerProfile
                profileImage={require("../../../img/clothes3.jpeg")}
                profileName="Studio Yoon"
                smallsize={true}
              />
            </ProducerContainer>
            <MessageBox>
              <Message>안녕하세요 지난번에 문의드렸던</Message>
            </MessageBox>
            <Alert>
              <AlertText>2</AlertText>
            </Alert>
          </MessageContainer>
        </TouchableOpacity>
        <TouchableOpacity>
          <MessageContainer style={boxShadow}>
            <ProducerContainer>
              <ProducerProfile
                profileImage={require("../../../img/clothes2.jpeg")}
                profileName="Jeong"
                smallsize={true}
              />
            </ProducerContainer>
            <MessageBox>
              <Message>안녕하세요 지난번에 문의드렸던</Message>
            </MessageBox>
            <Alert>
              <AlertText>2</AlertText>
            </Alert>
          </MessageContainer>
        </TouchableOpacity>
      </MainContainer>
    </ScrollContainer>
  );
};
