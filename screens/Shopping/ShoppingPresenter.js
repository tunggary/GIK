import React, { useState } from "react";
import NavigationBtn from "../../component/NavigationBtn";
import styled from "styled-components/native";
import { Dimensions, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const CircleText = styled.Text`
  font-size: 36px;
  font-weight: 300;
`;

const ListTop = styled.View`
  width: ${width}px;
  border-width: 1px;
  border-color: #171d52;
  position: absolute;
  z-index: 50;
  top: ${height / 2 - width / 2.6 - 25}px;
  left: ${width / 2 + width / 8 - width / 2.6}px;
`;

const ListLeft = styled.View`
  width: 170px;
  height: ${width / 2.6 + 240}px;
  padding-top: ${width / 2.6}px;
  border-left-width: 2px;
  border-color: #171d52;
  position: absolute;
  z-index: 50;
  top: ${height / 2 - width / 2.6 - 25}px;
  left: ${width / 2 + width / 8 - width / 2.6}px;
`;
const ListRight = styled.View`
  width: 170px;
  height: ${width / 2.6 + 240}px;
  border-right-width: 2px;
  border-color: #171d52;
  position: absolute;
  z-index: 50;
  bottom: ${height / 2 - width / 2.6 - 25}px;
  right: ${width / 2 + width / 8 - width / 2.6}px;
`;
const ListBottom = styled.View`
  width: ${width}px;
  border-width: 1px;
  border-color: #171d52;
  position: absolute;
  z-index: 10;
  bottom: ${height / 2 - width / 2.6 - 25}px;
  right: ${width / 2 + width / 8 - width / 2.6}px;
`;
const ListContainer = styled.View`
  height: 53px;
  justify-content: center;
  border-bottom-width: 2px;
  border-color: #171d52;
  position: relative;
`;
const List = styled.Text`
  font-size: 22px;
  font-weight: 300;
`;

const styles = StyleSheet.create({
  circleTop: {
    position: "absolute",
    zIndex: 1,
    top: height / 2 - width / 1.7 - 25,
    right: width / 2 - width / 6.8,
    borderWidth: 13,
    borderRadius: width / 3.4,
    borderColor: "#171d52",
    width: width / 1.7,
    height: width / 1.7,
    alignItems: "center",
    justifyContent: "center",
  },
  circleTopBig: {
    position: "absolute",
    zIndex: 100,
    backgroundColor: "white",
    top: height / 2 - width / 1.3 - 25,
    right: width / 2 - width / 8,
    borderWidth: 13,
    borderRadius: width / 2.6,
    borderColor: "#171d52",
    width: width / 1.3,
    height: width / 1.3,
    alignItems: "center",
    justifyContent: "center",
  },
  circleBottom: {
    position: "absolute",
    zIndex: 1,
    top: height / 2 + 25,
    left: width / 2 - width / 6.8,
    borderWidth: 13,
    borderRadius: width / 3.4,
    borderColor: "#171d52",
    width: width / 1.7,
    height: width / 1.7,
    alignItems: "center",
    justifyContent: "center",
  },
  circleBottomBig: {
    position: "absolute",
    zIndex: 100,
    backgroundColor: "white",
    top: height / 2 + 25,
    left: width / 2 - width / 8,
    borderWidth: 13,
    borderRadius: width / 2.6,
    borderColor: "#171d52",
    width: width / 1.3,
    height: width / 1.3,
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    top: 0,
    width: width,
    height: height,
    backgroundColor: "white",
  },
});

const list_content = ["Clothes", "Interior", "Office", "else"];

export default () => {
  const navigation = useNavigation();
  const [topPressed, setTopPressed] = useState(false);
  const [bottomPressed, setBottomPressed] = useState(false);

  const toggleTop = () => (topPressed ? null : setTopPressed(true));
  const toggleBottom = () => (bottomPressed ? null : setBottomPressed(true));
  const toggleBack = () => {
    topPressed ? setTopPressed(false) : null;
    bottomPressed ? setBottomPressed(false) : null;
  };
  const listStyle = () =>
    topPressed ? { left: -20, paddingLeft: 50 } : { right: -20, paddingLeft: 35 };

  return topPressed ? (
    <Container>
      <View style={styles.circleTopBig}>
        <CircleText>Design</CircleText>
        <CircleText>Goods</CircleText>
      </View>
      <ListTop />
      <ListLeft>
        {list_content.map((list, index) => (
          <ListContainer key={index} style={listStyle()}>
            <TouchableOpacity
              onPress={() => {
                list == "Clothes" ? navigation.navigate(list) : null;
              }}
            >
              <List>{list}</List>
            </TouchableOpacity>
          </ListContainer>
        ))}
      </ListLeft>
      <TouchableOpacity style={styles.back} onPress={toggleBack} />
    </Container>
  ) : bottomPressed ? (
    <Container>
      <View style={styles.circleBottomBig}>
        <CircleText>Hongik</CircleText>
        <CircleText>Goods</CircleText>
      </View>
      <ListBottom />
      <ListRight>
        {list_content.map((list, index) => (
          <ListContainer key={index} style={listStyle()}>
            <TouchableOpacity>
              <List>{list}</List>
            </TouchableOpacity>
          </ListContainer>
        ))}
      </ListRight>
      <TouchableOpacity style={styles.back} onPress={toggleBack} />
    </Container>
  ) : (
    <Container>
      <TouchableOpacity style={styles.circleTop} onPress={toggleTop}>
        <CircleText>Design</CircleText>
        <CircleText>Goods</CircleText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleBottom} onPress={toggleBottom}>
        <CircleText>Hongik</CircleText>
        <CircleText>Goods</CircleText>
      </TouchableOpacity>
    </Container>
  );
};
