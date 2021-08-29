import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import NavigationBtn from "../../../component/NavigationBtn";
import ScrollContainer from "../../../component/ScrollContainer";
import styled from "styled-components/native";
import Customer from "../../../component/Customer";

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

const info = [
  {
    NickName: "tunggary",
    Product: [
      {
        id: 1,
        Title: "구찌 티셔츠",
        Price: 12400,
        thumnail: require("../../../img/clothes1.jpeg"),
      },
      {
        id: 2,
        Title: "반팔 로고 티셔츠",
        Price: 34000,
        thumnail: require("../../../img/clothes2.jpeg"),
      },
      {
        id: 3,
        Title: "남색 셔츠",
        Price: 54400,
        thumnail: require("../../../img/clothes3.jpeg"),
      },
    ],
    Address: "서울시 관악구 삼성동 1726",
  },
  {
    NickName: "hongik",
    Product: [
      {
        id: 1,
        Title: "구찌 티셔츠",
        Price: 12400,
        thumnail: require("../../../img/clothes1.jpeg"),
      },
      {
        id: 2,
        Title: "반팔 로고 티셔츠",
        Price: 34000,
        thumnail: require("../../../img/clothes2.jpeg"),
      },
    ],
    Address: "부산시 해운대구 개포동",
  },
];
export default () => {
  return (
    <ScrollContainer>
      <NavigationBtn goto="Tabs" />
      <Header>
        <HeaderLogo source={require("../../../img/myPage/receipt.png")} />
        <HeaderTitle>판매 내역</HeaderTitle>
      </Header>
      {info.map((each, index) => (
        <Customer
          key={index}
          NickName={each.NickName}
          Product={each.Product}
          Address={each.Address}
        />
      ))}
    </ScrollContainer>
  );
};
