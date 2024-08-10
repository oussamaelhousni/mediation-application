import { View, Text, ImageBackground } from "react-native";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
const App = () => {
  return (
    <View className="grow flex">
      <ImageBackground source={beachImage} resizeMode="cover" className="grow">
        <Text>Hello word</Text>
      </ImageBackground>
    </View>
  );
};

export default App;
