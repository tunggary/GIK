import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </>
  ) : (
    <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error} />
  );
}
