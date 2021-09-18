import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { priceToString } from "../API";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  Container: {
    width: width * 0.8,
    padding: 20,
    paddingTop: 15,
    borderRadius: 20,
    marginBottom: 30,
  },
  boxShadow: {
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 2,
    },
    backgroundColor: "white",
  },
  ButtonToggle: {
    position: "absolute",
    right: 25,
    top: 25,
  },
  IDContainer: {
    flexDirection: "row",
    height: 30,
    alignItems: "center",
    marginLeft: 5,
    marginBottom: 10,
  },
  IDText: {
    color: "#979797",
    marginLeft: 5,
    marginRight: 5,
  },
  ButtonDown:{
    position: "absolute",
    top: -37,
    right: 0
  },
  ButtonUp:{
    position: "absolute",
    top: -3,
    right: -6
  },
  ImageContainer: {
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#979797",
  },
  ImageBox: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 15,
    marginRight: width * 0.05,
  },
  ImageCompenent: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 15,
  },
  ProductContainer: {
    height: 100,
    borderBottomWidth: 1,
    borderColor: "#828282",
    paddingRight: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ProduceTitle: {
    width: width * 0.8 - 232,
    height: 70,
    fontSize: 14,
    fontWeight: "300",
    paddingLeft: 10,
  },
  ProductPrice: {
    fontSize: 16,
    fontWeight: "300",
    color: "#888888",
    marginTop: 30,
  },
  AddressContainer: {
    height: 35,
    paddingLeft: 3,
    borderBottomWidth: 1,
    borderColor: "#979797",
    flexDirection: "row",
    alignItems: "center",
  },
  AddressText: {
    color: "#979797",
    marginLeft: 5,
  },
  TotalContainer: {
    alignItems: "flex-end",
    marginBottom: 30,
  },
  TotalBox: {
    height: 40,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#828282",
    alignItems: "center",
    paddingLeft: 5,
  },
  TotalText: {
    fontSize: 16,
    fontWeight: "300",
  },
  TotalPrice: {
    width: 85,
    textAlign: "right",
    fontSize: 16,
    fontWeight: "300",
    color: "#888888",
    marginRight: 5,
  },
  ButtonContainer: {
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  ButtonDescription: {
    width: width * 0.23,
    fontSize: 12,
    textAlign: "center",
  },
  Button: {
    width: 64,
    height: 34,
    borderColor: "#979797",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ({ NickName, Product, Address }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => (open ? setOpen(false) : setOpen(true));
  const minNumber = Product.length > 3 ? 3 : Product.length;
  const sum = Product.reduce((prev, curr) => prev + curr.Price, 0);

  return open ? (
    <View style={[styles.boxShadow, styles.Container]}>
      <View style={styles.IDContainer}>
        <Text>ID:</Text>
        <Text style={styles.IDText}>{NickName}</Text>
        <Text>님</Text>
      </View>
      <TouchableOpacity style={styles.ButtonToggle} onPress={toggle}>
        <Image source={require("../img/myPage/button_up.png")} style={styles.ButtonUp}/>
      </TouchableOpacity>
      {Product.map((each, index) => (
        <View key={index} style={styles.ProductContainer}>
          <TouchableOpacity>
            <View style={[styles.boxShadow, styles.ImageBox]}>
              <Image style={styles.ImageCompenent} source={each.thumnail} />
            </View>
          </TouchableOpacity>
          <Text style={styles.ProduceTitle}>{each.Title}</Text>
          <Text style={styles.ProductPrice}>{priceToString(each.Price)} 원</Text>
        </View>
      ))}
      <View style={styles.TotalContainer}>
        <View style={styles.TotalBox}>
          <Text style={styles.TotalText}>합계:</Text>
          <Text style={styles.TotalPrice}>{priceToString(sum)} 원</Text>
        </View>
      </View>
      <View style={styles.AddressContainer}>
        <Text>배송 주소:</Text>
        <Text style={styles.AddressText}>{Address}</Text>
      </View>
      <View style={styles.ButtonContainer}>
        <Text style={styles.ButtonDescription}>
          입금확인 후 배송을 보내셨다면 클릭! {"\n"}배송이 도착되었단 메세지확인시 클릭
        </Text>
        <TouchableOpacity style={styles.Button}>
          <Text>배송시작</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Text>배송완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
      <View style={[styles.Container, styles.boxShadow]}>
        <View style={styles.IDContainer}>
          <Text>ID:</Text>
          <Text style={styles.IDText}>{NickName}</Text>
          <Text>님</Text>
        </View>
        <TouchableOpacity onPress={toggle} activeOpacity={0.8}>
          <Image source={require("../img/myPage/button_down.png")} style={styles.ButtonDown}/>
        </TouchableOpacity>
        <View style={styles.ImageContainer}>
          {Product.map((each, index) =>
            index > minNumber - 1 ? null : (
              <View key={index} style={[styles.boxShadow, styles.ImageBox]}>
                <Image source={each.thumnail} style={styles.ImageCompenent} />
              </View>
            )
          )}
        </View>
        <View style={styles.AddressContainer}>
          <Text>배송 주소:</Text>
          <Text style={styles.AddressText}>{Address}</Text>
        </View>
      </View>
  );
};
