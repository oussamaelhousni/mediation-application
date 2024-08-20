import { View, Text, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";

const AdjustMeditationDuration = () => {
  return (
    <View className="flex-1 relative">
      <LinearGradient
        colors={["#161b2e", "#0a4d4a", "#766e67"]}
        className="flex-1 px-4 py-8"
      >
        <Pressable onPress={() => router.back()}>
          <Ionicons
            name="chevron-back-circle-outline"
            size={40}
            color="white"
          />
        </Pressable>
        <View className="justify-center h-4/5">
          <Text className="text-center font-bold text-3xl text-white mb-8">
            Adjust your meditation duration
          </Text>

          <View className="">
            <CustomButton title="10 seconds" containerStyle="mb-4" />
            <CustomButton title="10 seconds" containerStyle="mb-4" />
            <CustomButton title="10 seconds" containerStyle="mb-4" />
            <CustomButton title="10 seconds" containerStyle="mb-4" />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
