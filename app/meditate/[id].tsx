import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import meditationImages from "@/constants/meditationImages";
import { LinearGradient } from "expo-linear-gradient";
import { Href, router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { Audio } from "expo-av";

import { AUDIO_FILES, MEDITATION_DATA } from "@/constants/meditationData";
const meditate = () => {
  const { id } = useLocalSearchParams();
  const [secondsRemaining, setSecondsremaining] = useState(10);
  const [startCounter, setStartCounter] = useState(false);
  const [audioSound, setAudioSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      startCounter && setStartCounter(false);
      return;
    }
    if (startCounter) {
      timerId = setTimeout(() => {
        setSecondsremaining(secondsRemaining - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemaining, startCounter]);

  useEffect(() => {
    return () => {
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  const initializeSound = async () => {
    const audiFileName = MEDITATION_DATA[Number(id) - 1].audio;

    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audiFileName]);
    setAudioSound(sound);
    return sound;
  };

  const togglePlayPause = async () => {
    const sound = audioSound ? audioSound : await initializeSound();
    const status = await sound?.getStatusAsync();
    if (status?.isLoaded && !isPlayingAudio) {
      await sound.playAsync();
      setIsPlayingAudio(true);
    } else {
      await sound.pauseAsync();
      setIsPlayingAudio(false);
    }
  };
  const minutes = Math.floor(secondsRemaining / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(secondsRemaining % 60)
    .toString()
    .padStart(2, "0");

  const toggleMeditaion = async () => {
    if (secondsRemaining === 0) setSecondsremaining(10);

    setStartCounter(!startCounter);
    await togglePlayPause();
  };
  return (
    <View className="flex-1">
      <ImageBackground
        source={meditationImages[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,.8)"]}
          className="flex-1 px-4 py-8"
        >
          <Pressable onPress={() => router.back()}>
            <Ionicons
              name="chevron-back-circle-outline"
              size={40}
              color="white"
            />
          </Pressable>

          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 items-center justify-center">
              <Text className=" text-blue-600 text-3xl">
                {minutes}:{seconds}
              </Text>
            </View>
          </View>
          {!startCounter && (
            <CustomButton
              title={"Adjust timing"}
              onPress={() =>
                router.push("/(modal)/adjust-meditation-duration" as Href)
              }
              containerStyle="mb-4"
            />
          )}
          <CustomButton
            title={startCounter ? "Stop meditation" : "Start meditation"}
            onPress={toggleMeditaion}
          />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default meditate;
