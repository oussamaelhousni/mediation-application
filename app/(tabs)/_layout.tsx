import { Tabs } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="nature-meditate"
        options={{
          headerShown: false,
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="flower-outline" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="affirmations"
        options={{
          headerShown: false,
          tabBarLabel: "Affiramtions",
          tabBarIcon: ({ color }) => {
            return <Entypo name="documents" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
