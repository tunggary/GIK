import React, { useRef } from "react";
import styled from "styled-components/native";
import NavigationBtn from "../../component/NavigationBtn";
import ScrollContainer from "../../component/ScrollContainer";

const Logo = styled.Image`
  margin-top: 20px;
`;

const InputContainer = styled.View`
  width: 80%;
  margin-top: 30px;
`;

const Label = styled.Text`
  font-size: 14px;
  font-weight: 300;
  margin-top: 15px;
`;

const TextInputCom = styled.TextInput`
  border-bottom-width: 1px;
  font-size: 14px;
  padding-bottom: 3px;
  margin-top: 3px;
`;

export default () => {
  const nameInput = useRef();
  const birthInput = useRef();
  const nickNameInput = useRef();
  const idInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();
  return (
    <ScrollContainer>
      <NavigationBtn goto={"SignUp"} />
      <Logo source={require("../../img/main_page_logo.png")} />
      <InputContainer>
        <Label>이름</Label>
        <TextInputCom
          ref={nameInput}
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => birthInput.current.focus()}
        />
        <Label>생년월일</Label>
        <TextInputCom
          ref={birthInput}
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => nickNameInput.current.focus()}
        />
        <Label>닉네임</Label>
        <TextInputCom
          ref={nickNameInput}
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => idInput.current.focus()}
        />
        <Label style={{ marginTop: 70 }}>ID</Label>
        <TextInputCom
          ref={idInput}
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => passwordInput.current.focus()}
        />
        <Label>Password</Label>
        <TextInputCom
          ref={passwordInput}
          returnKeyType="next"
          autoCapitalize="none"
          secureTextEntry={true}
          onSubmitEditing={(e) => passwordConfirmInput.current.focus()}
        />
        <Label>Password confirm</Label>
        <TextInputCom
          ref={passwordConfirmInput}
          returnKeyType={"done"}
          autoCapitalize="none"
          secureTextEntry={true}
          onSubmitEditing={() => console.log("end")}
        />
      </InputContainer>
    </ScrollContainer>
  );
};
