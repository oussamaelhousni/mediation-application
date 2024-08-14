import { View, Text, Pressable, Image, FlatList } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/models/affirmationCategory";

import { Link } from "expo-router";

interface GuidedAffirmationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          horizontal
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <Link href={`/affirmattions/${item.id}`} asChild>
                <Pressable>
                  <View className="h-36 w-32 rounded-md mr-4">
                    <Image
                      source={item.image}
                      resizeMode="cover"
                      className="h-full w-full"
                    />
                  </View>
                </Pressable>
              </Link>
            );
          }}
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;
