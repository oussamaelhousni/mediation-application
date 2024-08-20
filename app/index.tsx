import { View, Text, ImageBackground } from "react-native";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
const App = () => {
  const router = useRouter();
  return (
    <View className="grow flex">
      <ImageBackground source={beachImage} resizeMode="cover" className="grow">
        <LinearGradient
          colors={["rgba(0,0,0,.4)", "rgba(0,0,0,.8)"]}
          className="grow"
        >
          <SafeAreaView className="my-8 flex justify-between grow px-6">
            <View>
              <Text className="text-white text-4xl text-center">
                Simple meditation
              </Text>
              <Text className="text-white text-center text-base">
                Simplifying mediation for everyone
              </Text>
            </View>
            <View>
              <CustomButton
                title="Get started"
                onPress={() => router.push("/nature-meditate")}
              />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
