import {
  View,
  Text,
  ScrollView,
  StatusBar as statusBar,
  SafeAreaView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AFFIRMATION_GALLERY from "@/constants/affiramtionGallery";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";

const affirmations = () => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{
        marginTop: Platform.OS === "android" ? statusBar.currentHeight : 0,
      }}
    >
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
        <StatusBar style="dark" />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default affirmations;
