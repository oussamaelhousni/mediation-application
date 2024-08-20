import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { MEDITATION_DATA } from "@/constants/meditationData";
import MEDITATION_IMAGES from "@/constants/meditationImages";
import { Href, router } from "expo-router";
const NatureMeditate = () => {
  console.log("data", MEDITATION_DATA);
  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#161b2e", "#0a4d4a", "#766e67"]}
        className="flex-1"
      >
        <SafeAreaView className="py-12 flex justify-between grow px-6 mb-32">
          <View>
            <Text className="text-white text-4xl text-left">
              Simple meditation
            </Text>
            <Text className="text-indigo-100 text-left text-lg">
              Start your meditation practice today
            </Text>
          </View>

          <View className="">
            <FlatList
              data={MEDITATION_DATA}
              className=""
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable
                  className="h-48 my-3 rounded-md  overflow-hidden"
                  onPress={() =>
                    router.push(`/meditate/${item.id.toString()}` as Href)
                  }
                >
                  <ImageBackground
                    source={MEDITATION_IMAGES[item.id - 1]}
                    resizeMode="cover"
                    className="flex-1 rounded-lg justify-center"
                  >
                    <LinearGradient
                      colors={["rgba(0,0,0,.10)", "rgba(0,0,0,.30)"]}
                      className="flex-1 justify-center"
                    >
                      <Text className="text-3xl text-white text-center">
                        {item.title}
                      </Text>
                    </LinearGradient>
                  </ImageBackground>
                </Pressable>
              )}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default NatureMeditate;
