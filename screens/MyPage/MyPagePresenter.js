import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Dimensions, Touchable } from "react-native";
import styled from "styled-components/native";
import ProducerProfile from "../../component/ProducerProfile";
import ScrollContainer from "../../component/ScrollContainer";

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  width: ${width}px;
  flex: 1;
  align-items: center;
`;

const Header = styled.View`
  width: ${width * 0.8}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 5px;
  margin-top: 30px;
`;

const Message = styled.Image``;

const Alert = styled.View`
  position: absolute;
  right: 0;
  top: 3px;
  width: 13px;
  height: 13px;
  background-color: #ff5b5b;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
`;
const AlertText = styled.Text`
  font-size: 9px;
  color: white;
`;

const Box = styled.View`
  width: ${width * 0.8}px;
  height: 121px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  margin-top: 50px;
`;

const Component = styled.View`
  width: 80px;
  height: 65px;
  align-items: center;
  justify-content: space-between;
`;

const ComponentIcon = styled.Image``;

const ComponentTitle = styled.Text`
  font-size: 14px;
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

export default () => {
  const navigation = useNavigation();
  return (
    <ScrollContainer>
      <Container>
        <Header>
          <ProducerProfile
            profileImage={require("../../img/clothes2.jpeg")}
            profileName={"Studio Yoon"}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Question")}>
            <Message source={require("../../img/myPage/message.png")} />
            <Alert>
              <AlertText>2</AlertText>
            </Alert>
          </TouchableOpacity>
        </Header>
        <Box style={boxShadow}>
          <TouchableOpacity onPress={() => navigation.navigate("Bookmark")}>
            <Component>
              <ComponentIcon source={require("../../img/myPage/bookmark.png")} />
              <ComponentTitle>찜목록</ComponentTitle>
            </Component>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ShoppingList")}>
            <Component>
              <ComponentIcon source={require("../../img/myPage/shopping_list.png")} />
              <ComponentTitle>쇼핑 카트</ComponentTitle>
            </Component>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Purchase")}>
            <Component>
              <ComponentIcon source={require("../../img/myPage/receipt.png")} />
              <ComponentTitle>구매 내역</ComponentTitle>
            </Component>
          </TouchableOpacity>
        </Box>
        <Box style={boxShadow}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Component>
              <ComponentIcon source={require("../../img/myPage/sale_list.png")} />
              <ComponentTitle>판매 프로필</ComponentTitle>
            </Component>
          </TouchableOpacity>
          <TouchableOpacity>
            <Component>
              <ComponentIcon source={require("../../img/myPage/revenue.png")} />
              <ComponentTitle>수익 정산</ComponentTitle>
            </Component>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Selling")}>
            <Component>
              <ComponentIcon source={require("../../img/myPage/receipt.png")} />
              <ComponentTitle>판매 내역</ComponentTitle>
            </Component>
          </TouchableOpacity>
        </Box>
        <Box style={boxShadow}>
          <TouchableOpacity>
            <Component>
              <ComponentIcon source={require("../../img/myPage/log_out.png")} />
              <ComponentTitle>로그아웃</ComponentTitle>
            </Component>
          </TouchableOpacity>
          <TouchableOpacity>
            <Component>
              <ComponentIcon source={require("../../img/myPage/question.png")} />
              <ComponentTitle>문의</ComponentTitle>
            </Component>
          </TouchableOpacity>
          <TouchableOpacity>
            <Component>
              <ComponentIcon source={require("../../img/myPage/option.png")} />
              <ComponentTitle>개인 설정</ComponentTitle>
            </Component>
          </TouchableOpacity>
        </Box>
      </Container>
    </ScrollContainer>
  );
};
