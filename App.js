import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import BookDonateScreen from "./screens/BookDonateScreen";
import BookRequestScreen from "./screens/BookRequestScreen";
import { AppTabNavigator } from "./components/AppTabNavigator";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
  },
  BottomTab: {
    screen: AppTabNavigator,
  },
});

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
