import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

function Rootlayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="meditate/[id]" />
        <Stack.Screen
          name="(modal)/adjust-meditation-duration"
          options={{ presentation: "modal" }}
        />
      </Stack>
      <StatusBar style="light" backgroundColor="transparent" />
    </>
  );
}

export default Rootlayout;
