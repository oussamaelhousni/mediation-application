import {
  View,
  Text,
  ImageBackground,
  Pressable,
  StatusBar as statusBar,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { GalleryPreviewData } from "@/constants/models/affirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affiramtionGallery";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const [affiramtion, setAffiramtion] = useState<GalleryPreviewData | null>(
    null
  );

  useEffect(() => {
    for (let aff of AFFIRMATION_GALLERY) {
      const affirmationData = aff.data;
      const affirmationToStart = affirmationData?.find(
        (f) => f.id === Number(itemId)
      );
      if (affirmationToStart) {
        setAffiramtion(affirmationToStart);
        console.log("affirmation found");
        return;
      }
    }
  }, [itemId]);
  return (
    <View
      className="grow"
      style={{
        paddingTop: Platform.OS === "android" ? statusBar.currentHeight : 0,
      }}
    >
      <ImageBackground
        source={affiramtion?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          colors={["rgba(0,0,0,.7)", "rgba(0,0,0,.3)"]}
          className="flex-1 p-4"
        >
          <Pressable onPress={() => router.back()}>
            <Ionicons
              name="chevron-back-circle-outline"
              size={40}
              color="white"
            />
          </Pressable>
          <View className="flex-1 justify-center">
            <Text className="text-white text-center text-3xl leading-[200%]">
              {affiramtion?.text}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
