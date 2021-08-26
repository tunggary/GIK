import React from "react";
import styled from "styled-components/native";
import NavigationBtn from "../../component/NavigationBtn";
import ScrollContainer from "../../component/ScrollContainer";

const SearchBar = styled.View`
  margin-top: 40%;
  width: 100%;
  align-items: center;
  position: relative;
`;

const TextInputCom = styled.TextInput`
  border-bottom-width: 2px;
  font-size: 20px;
  width: 80%;
  padding: 5px;
  padding-right: 9%;
`;

const SearchButton = styled.TouchableOpacity`
  position: absolute;
  top: 7px;
  right: 12%;
`;

const SearchButtonImage = styled.Image`
  width: 21.6px;
  height: 21.6px;
`;

export default ({ onChange, onSubmit, keyword }) => {
  return (
    <ScrollContainer>
      <NavigationBtn goto={"Tabs"} />
      <SearchBar>
        <TextInputCom
          autoCapitalize="none"
          value={keyword}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          returnKeyType={"search"}
        />
        <SearchButton onPress={onSubmit}>
          <SearchButtonImage source={require("../../img/search_button.png")} />
        </SearchButton>
      </SearchBar>
    </ScrollContainer>
  );
};
