import { Entypo } from "@expo/vector-icons";
import React from "react";
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import NavigationBtn from "../../../component/NavigationBtn";
import ProducerProfile from "../../../component/ProducerProfile";
import { deduplicating, checkCategoryNum } from "../../../API";
import { useState } from "react";

const { width } = Dimensions.get("window");

const ImageContainer = styled.View``;

const BackgroundImage = styled.Image`
  width: ${width}px;
`;

const ProfileContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: ${width}px;
  padding: 0 30px;
  background-color: rgba(105, 105, 105, 0.5);
  justify-content: center;
`;

const ProfileIntroduction = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: white;
  margin-top: 70px;
  margin-bottom: 30px;
`;

const CategoryContainer = styled.View`
  flex-direction: row;
  height: 48px;
  width: ${width * 0.9}px;
  margin-left: ${width * 0.05}px;
  margin-right: ${width * 0.05}px;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #888888;
`;

const Category = styled.View`
  height: 23px;
  justify-content: center;
  border-width: 1px;
  border-radius: 12px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  margin-right: 20px;
`;

const CategoryText = styled.Text``;

const ProductContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 15px;
  padding-left: ${width * 0.037}px;
`;

const Product = styled.View`
  width: ${width * 0.25}px;
  height: ${width * 0.25}px;
  border-radius: 20px;
  margin: ${width * 0.03}px;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.Image`
  width: ${width * 0.25}px;
  height: ${width * 0.25}px;
  border-radius: 20px;
`;

const boxShadow = {
  elevation: 3,
  shadowColor: "black",
  shadowOpacity: 0.3,
  shadowOffset: {
    height: 2,
  },
  backgroundColor: "white",
};

export default ({ info }) => {
  const [view, setView] = useState(0);

  let category = info.Product.map((each) => each.Category);
  category = deduplicating(category);

  const marginRight = () => (category.length > 3 ? { marginRight: 0 } : { marginRight: 20 });
  const justify = () => (category.length > 3 ? { justifyContent: "space-between" } : null);

  return (
    <ScrollView bounces={false} style={{ backgroundColor: "white" }}>
      <NavigationBtn goto="MyPage" style={{ top: 50 }} />
      <ImageContainer>
        <BackgroundImage source={info.Profile.thumnailImage} />
        <ProfileContainer>
          <ProducerProfile
            profileImage={info.Profile.profileImage}
            profileName={info.Profile.NickName}
            light={true}
            style={{ position: "absolute", top: -7, left: 20 }}
          />
          <ProfileIntroduction>{info.Profile.Introduction}</ProfileIntroduction>
        </ProfileContainer>
      </ImageContainer>
      <CategoryContainer style={justify()}>
        <TouchableOpacity onPress={() => setView(0)}>
          <Category style={[{ backgroundColor: !view ? "#171d52" : "white" }, marginRight()]}>
            <CategoryText style={{ color: !view ? "white" : "black" }}>전체</CategoryText>
          </Category>
        </TouchableOpacity>
        {category.map((each, index) => (
          <TouchableOpacity key={index} onPress={() => setView(each)}>
            <Category
              style={[{ backgroundColor: view == each ? "#171d52" : "white" }, marginRight()]}
            >
              <CategoryText style={{ color: view == each ? "white" : "black" }}>
                {checkCategoryNum(each)}
              </CategoryText>
            </Category>
          </TouchableOpacity>
        ))}
      </CategoryContainer>
      <ProductContainer>
        {info.Product.map((each, index) =>
          view == each.Category || view == 0 ? (
            <TouchableOpacity key={index}>
              <Product style={boxShadow}>
                <ProductImage source={each.thumnail} />
              </Product>
            </TouchableOpacity>
          ) : null
        )}
        <TouchableOpacity>
          <Product style={[boxShadow, { backgroundColor: "#f0f0f0" }]}>
            <Entypo name="plus" size={50} />
          </Product>
        </TouchableOpacity>
      </ProductContainer>
    </ScrollView>
  );
};
