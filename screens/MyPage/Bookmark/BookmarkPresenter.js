import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import NavigationBtn from "../../../component/NavigationBtn";
import ScrollContainer from "../../../component/ScrollContainer";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

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
  width: ${width * 0.8 - 162}px;
  height: 70px;
  font-size: 14px;
  font-weight: 300;
  padding-left: 10px;
`;

const ContentWishBox = styled.View``;

const ContentWish = styled.Image``;

export default () => {
  return (
    <ScrollContainer>
      <NavigationBtn goto="Tabs" />
      <Header>
        <HeaderLogo source={require("../../../img/myPage/bookmark.png")} />
        <HeaderTitle>찜목록</HeaderTitle>
      </Header>
      <MainContainer style={boxShadow}>
        <Content>
          <TouchableOpacity>
            <ContentImageBox style={boxShadow}>
              <ContentImage source={require("../../../img/clothes3.jpeg")} />
            </ContentImageBox>
          </TouchableOpacity>
          <ContentTitle>여름 셔츠</ContentTitle>
          <ContentWishBox>
            <TouchableOpacity>
              <ContentWish source={require("../../../img/myPage/Wish.png")} />
            </TouchableOpacity>
          </ContentWishBox>
        </Content>
        <Content>
          <TouchableOpacity>
            <ContentImageBox style={boxShadow}>
              <ContentImage source={require("../../../img/clothes3.jpeg")} />
            </ContentImageBox>
          </TouchableOpacity>
          <ContentTitle>여름 셔츠</ContentTitle>
          <ContentWishBox>
            <TouchableOpacity>
              <ContentWish source={require("../../../img/myPage/Wish_no.png")} />
            </TouchableOpacity>
          </ContentWishBox>
        </Content>
        <Content>
          <TouchableOpacity>
            <ContentImageBox style={boxShadow}>
              <ContentImage source={require("../../../img/clothes3.jpeg")} />
            </ContentImageBox>
          </TouchableOpacity>
          <ContentTitle>여름 셔츠</ContentTitle>
          <ContentWishBox>
            <TouchableOpacity>
              <ContentWish source={require("../../../img/myPage/Wish.png")} />
            </TouchableOpacity>
          </ContentWishBox>
        </Content>
      </MainContainer>
    </ScrollContainer>
  );
};
