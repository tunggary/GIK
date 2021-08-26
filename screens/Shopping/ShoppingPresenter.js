import React, { useState } from "react";
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

const Circle = styled.Image`
  position: absolute;
  border-radius: ${width / 1.7}px;
`;

const CircleText = styled.Text`
  font-size: 36px;
  font-weight: 300;
`;

const ListLeft = styled.View`
  position: absolute;
  z-index: 50;
  top: ${height / 2 - width / 8}px;
  left: ${width / 2}px;
`;
const ListRight = styled.View`
  position: absolute;
  z-index: 50;
  bottom: ${height / 2 - width / 6.8}px;
  right: ${width / 2 + width / 6.8}px;
`;

const ListContainer = styled.View`
  height: 53px;
  justify-content: center;
`;
const List = styled.Text`
  font-size: 22px;
  font-weight: 300;
  padding-left: 17px;
`;

const ListBottomBorder = styled.Image`
  position: absolute;
  top: 40px;
`;

const styles = StyleSheet.create({
  circleTop: {
    position: "absolute",
    zIndex: 1,
    top: height / 2 - width / 1.7 - 25,
    right: width / 2 - width / 6.8,
    width: width / 1.7,
    height: width / 1.7,
    borderRadius: width / 3.4,
    alignItems: "center",
    justifyContent: "center",
  },
  circleTopBig: {
    position: "absolute",
    backgroundColor: "white",
    top: height / 2 - width / 1.3 - 25,
    right: width / 2 - width / 8,
    width: width / 1.3,
    height: width / 1.3,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  circleBottom: {
    position: "absolute",
    zIndex: 1,
    top: height / 2 + 25,
    left: width / 2 - width / 6.8,
    width: width / 1.7,
    height: width / 1.7,
    alignItems: "center",
    justifyContent: "center",
  },
  circleBottomBig: {
    position: "absolute",
    backgroundColor: "white",
    top: height / 2 + 25,
    left: width / 2 - width / 8,
    borderRadius: width / 2.6,
    width: width / 1.3,
    height: width / 1.3,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
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

  return topPressed ? (
    <Container>
      <View style={styles.circleTopBig}>
        <CircleText>Design</CircleText>
        <CircleText>Goods</CircleText>
        <Circle source={require("../../img/main_circle_big.png")} />
      </View>
      <ListLeft>
        {list_content.map((list, index) => (
          <ListContainer key={index}>
            {index == 0 ? (
              <ListBottomBorder
                source={require("../../img/list_border_first.png")}
                style={{
                  left: -35,
                  top: 3,
                }}
              />
            ) : (
              <ListBottomBorder source={require("../../img/list_border.png")} />
            )}
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
        <Circle source={require("../../img/main_circle_big.png")} />
      </View>
      <ListRight>
        {list_content.map((list, index) => (
          <ListContainer key={index}>
            {index == list_content.length - 1 ? (
              <ListBottomBorder source={require("../../img/list_border_last.png")} />
            ) : (
              <ListBottomBorder source={require("../../img/list_border.png")} />
            )}
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
        <Circle source={require("../../img/main_circle.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleBottom} onPress={toggleBottom}>
        <CircleText>Hongik</CircleText>
        <CircleText>Goods</CircleText>
        <Circle source={require("../../img/main_circle.png")} />
      </TouchableOpacity>
    </Container>
  );
};
