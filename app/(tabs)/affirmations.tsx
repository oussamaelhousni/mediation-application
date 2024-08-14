import { View, Text, ScrollView, StatusBar } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AFFIRMATION_GALLERY from "@/constants/affiramtionGallery";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";

const affirmations = () => {
  return (
    <View className="flex-1 " style={{ marginTop: StatusBar.currentHeight }}>
      <LinearGradient
        colors={["#2e1f58", "#54426b", "#a790af"]}
        className="flex-1 p-4"
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zink-50 text-3xl font-bold text-white">
            Change your beliefs with affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => {
              return (
                <GuidedAffirmationsGallery
                  key={g.title}
                  previews={g.data}
                  title={g.title}
                />
              );
            })}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default affirmations;
