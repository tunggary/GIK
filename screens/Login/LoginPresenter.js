import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import NavigationBtn from "../../component/NavigationBtn";
import ScrollContainer from "../../component/ScrollContainer";

const { height } = Dimensions.get("screen");

const Logo = styled.Image`
  margin-top: ${height / 8}px;
`;

const InputContainer = styled.View`
  width: 80%;
  margin-top: ${height / 14}px;
`;

const Label = styled.Text`
  margin-bottom: 2px;
  margin-top: 20px;
`;

const Input = styled.TextInput`
  border-bottom-width: 1px;
  padding-bottom: 3px;
  font-size: 14px;
  font-weight: 500;
`;

const Alert = styled.Text`
  color: red;
  margin-top: 3px;
`;

const ButtonContainer = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 30px;
`;

const SignUp = styled.TouchableOpacity`
  width: 43%;
  height: 36px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  background-color: #171d52;
`;

const SignUpText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const Login = styled.TouchableOpacity`
  width: 43%;
  height: 36px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-width: 1px;
`;

const LoginText = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: 500;
`;
export default ({ onSubmit }) => {
  const navigation = useNavigation();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [PasswordAlert, setPasswordAlert] = useState(false);
  const [IdAlert, setIdAlert] = useState(false);
  const Password_input = useRef();
  const ID_input = useRef();

  const triggerId = (text) => {
    IdAlert ? setIdAlert(false) : null;
    setId(text);
  };

  const triggerPassword = (text) => {
    PasswordAlert ? setPasswordAlert(false) : null;
    setPassword(text);
  };

  const changeBackground = () =>
    id != "" && password != "" ? { backgroundColor: "#171d52", borderWidth: 0 } : null;

  const changeColor = () => (id != "" && password != "" ? { color: "white" } : null);

  const checkInfo = (id, password) => {
    id || setIdAlert(true);
    password || setPasswordAlert(true);
    if (id != "" && password != "") {
      onSubmit(id, password);
    }
  };
  return (
    <ScrollContainer>
      <NavigationBtn goto={"Tabs"} />
      <Logo source={require("../../img/login_logo.png")} />
      <InputContainer>
        <Label>ID</Label>
        <Input
          ref={ID_input}
          autoCapitalize="none"
          onChangeText={triggerId}
          returnKeyType={"next"}
          autoFocus={true}
          onSubmitEditing={() => Password_input.current.focus()}
        ></Input>
        <Alert style={IdAlert ? { display: "flex" } : { display: "none" }}>ID를 입력하세요</Alert>
        <Label>Password</Label>
        <Input
          ref={Password_input}
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={triggerPassword}
          returnKeyType={"done"}
          onSubmitEditing={() => checkInfo(id, password)}
        ></Input>
        <Alert style={PasswordAlert ? { display: "flex" } : { display: "none" }}>
          Password를 입력하세요
        </Alert>
      </InputContainer>
      <ButtonContainer>
        <SignUp onPress={() => navigation.navigate("SignUp")}>
          <SignUpText>회원가입</SignUpText>
        </SignUp>
        <Login style={changeBackground()} onPress={() => checkInfo(id, password)}>
          <LoginText style={changeColor()}>로그인</LoginText>
        </Login>
      </ButtonContainer>
    </ScrollContainer>
  );
};
