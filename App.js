import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

const theme = {
  colors: {
    primary: "rgb(118, 0, 12)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(255, 218, 214)",
    onPrimaryContainer: "rgb(65, 0, 3)",
    secondary: "rgb(156, 65, 60)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(255, 176, 169))",
    onSecondaryContainer: "rgb(65, 0, 3)",
    tertiary: "rgb(134, 83, 0)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 221, 185)",
    onTertiaryContainer: "rgb(43, 23, 0)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(32, 26, 25)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(32, 26, 25)",
    surfaceVariant: "rgb(118, 0, 12)",
    onSurfaceVariant: "rgb(83, 67, 66)",
    outline: "rgb(133, 115, 113)",
    outlineVariant: "rgb(216, 194, 191)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(54, 47, 46)",
    inverseOnSurface: "rgb(251, 238, 236)",
    inversePrimary: "rgb(255, 179, 173)",
    elevation: {
      level0: "transparent",
      level1: "rgb(252, 248, 248)",
      level2: "rgb(241, 237, 236)",
      level3: "rgb(246, 229, 232)",
      level4: "rgb(245, 226, 230)",
      level5: "rgb(244, 222, 226)",
    },
    surfaceDisabled: "rgba(32, 26, 25, 0.12)",
    onSurfaceDisabled: "rgba(32, 26, 25, 0.38)",
    backdrop: "rgba(59, 45, 44, 0.4)",
  },
};