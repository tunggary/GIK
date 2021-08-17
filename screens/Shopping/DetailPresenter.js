import React, { useState } from "react";
import { Dimensions, TouchableOpacity, View, Text, Animated, ScrollView } from "react-native";
import NavigationBtn from "../../component/NavigationBtn";
import styled from "styled-components/native";
import Purchase from "../../component/Purchase";
import Reviews from "../../component/Reviews";
import Qna from "../../component/Qna";
import { getStatusBarHeight } from "react-native-status-bar-height";
import BottomBar from "../../component/BottomBar";

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ProducerContainer = styled.View`
  margin-top: 30px;
  margin-right: 50px;
  flex-direction: row;
  overflow: visible;
`;

const ProducerImage = styled.View`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: #171d52;
  border-radius: 30px;
`;

const ProducerImageDetail = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
`;

const ProducerName = styled.View`
  position: relative;
  height: 35px;
  top: 10px;
  left: -5px;
  max-width: ${width / 1.7}px;
  border-bottom-width: 2px;
  border-color: #171d52;
  padding: 0 20px;
`;

const ProducerNameDetail = styled.Text`
  font-size: 24px;
  font-weight: 300;
`;

const ImageContainer = styled.View`
  width: ${width / 1.3}px;
  height: ${width / 1.2}px;
  margin-top: 50px;
`;

const ImageDetail = styled.Image`
  width: ${width / 1.3}px;
  height: ${width / 1.3}px;
  border-radius: 30px;
`;

const ImageInfo = styled.View`
  width: ${width / 1.3}px;
  height: 120px;
  padding: 15px 15px;
  border-width: 2px;
  position: relative;
  z-index: -1;
  top: -60px;
  border-radius: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const ImageInfoPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ImageInfoName = styled.Text`
  font-size: 24px;
  font-weight: 300;
`;

const SelectTab = styled.View`
  margin-top: 80px;
  width: ${width / 1.3}px;
  flex-direction: row;
  justify-content: space-around;
`;
const SelectTabText = styled.Text`
  font-size: 18px;
  font-weight: 300;
  border-color: #171d52;
  color: #171d52;
`;
const PurchaseTab = styled.View`
  width: ${width / 3.9}px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-color: #171d52;
`;

const ReviewsTab = styled.View`
  width: ${width / 3.9}px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-color: #171d52;
`;

const QnaTab = styled.View`
  width: ${width / 3.9}px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-color: #171d52;
`;

export default ({ data: { id, name, price } }) => {
  const [purchase, setPurchase] = useState(true);
  const [reviews, setReviews] = useState(false);
  const [qna, setQna] = useState(false);
  const [test, setTest] = useState(0);

  const scrollY = new Animated.Value(0);
  const diffclamp = Animated.diffClamp(scrollY, 0, 80);
  const translateY = diffclamp.interpolate({
    inputRange: [0, 80],
    outputRange: [0, 80],
  });
  const heigthY = diffclamp.interpolate({
    inputRange: [0, 80],
    outputRange: [80, 0],
  });

  const handleScroll = (e) => {
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  };

  const selectPurchase = () => {
    setPurchase(true);
    setReviews(false);
    setQna(false);
  };

  const selectReviews = () => {
    setPurchase(false);
    setReviews(true);
    setQna(false);
  };

  const selectQna = () => {
    setPurchase(false);
    setReviews(false);
    setQna(true);
  };

  const selectTabStyle = () => {
    if (purchase) {
      return [
        { borderWidth: 2, borderTopLeftRadius: 5, borderTopRightRadius: 5 },
        { borderWidth: 0, borderBottomWidth: 2 },
        { borderWidth: 0, borderBottomWidth: 2 },
      ];
    } else if (reviews) {
      return [
        { borderWidth: 0, borderBottomWidth: 2 },
        { borderWidth: 2, borderTopRightRadius: 5, borderTopLeftRadius: 5 },
        { borderWidth: 0, borderBottomWidth: 2 },
      ];
    } else {
      return [
        { borderWidth: 0, borderBottomWidth: 2 },
        { borderWidth: 0, borderBottomWidth: 2 },
        { borderWidth: 2, borderTopLeftRadius: 5, borderTopRightRadius: 5 },
      ];
    }
  };
  return (
    <>
      <Container>
        <ScrollView
          bounces={false}
          style={{
            backgroundColor: "white",
            marginTop: getStatusBarHeight(),
          }}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
          }}
          onScroll={handleScroll}
          scrollEventThrottle="16"
        >
          <NavigationBtn goto={"Clothes"} />
          <ProducerContainer>
            <ProducerImage>
              <ProducerImageDetail source={require("../../img/clothes1.jpeg")} />
            </ProducerImage>
            <ProducerName>
              <ProducerNameDetail>Studio Yoon</ProducerNameDetail>
            </ProducerName>
          </ProducerContainer>
          <ImageContainer>
            <ImageDetail source={require("../../img/clothes1.jpeg")} />
            <ImageInfo>
              <ImageInfoName>{name}</ImageInfoName>
              <ImageInfoPrice>{price}</ImageInfoPrice>
            </ImageInfo>
          </ImageContainer>
          <SelectTab>
            <PurchaseTab style={selectTabStyle()[0]}>
              <TouchableOpacity onPress={selectPurchase}>
                <SelectTabText>구매정보</SelectTabText>
              </TouchableOpacity>
            </PurchaseTab>
            <ReviewsTab style={selectTabStyle()[1]}>
              <TouchableOpacity onPress={selectReviews}>
                <SelectTabText>구매후기</SelectTabText>
              </TouchableOpacity>
            </ReviewsTab>
            <QnaTab style={selectTabStyle()[2]}>
              <TouchableOpacity onPress={selectQna}>
                <SelectTabText>Q {"&"} A</SelectTabText>
              </TouchableOpacity>
            </QnaTab>
          </SelectTab>
          {purchase ? <Purchase /> : reviews ? <Reviews /> : qna ? <Qna /> : null}
        </ScrollView>
      </Container>
      <Animated.View style={{ transform: [{ translateY: translateY }], height: heigthY }}>
        <BottomBar />
      </Animated.View>
    </>
  );
};
