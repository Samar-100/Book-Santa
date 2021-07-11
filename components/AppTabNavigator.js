import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import BookDonateScreen from "../screens/BookDonateScreen";
import BookRequestScreen from "../screens/BookRequestScreen";

export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks: {
    screen: BookDonateScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image source={require("../assets/request-list.png")}></Image>
      ),
      tabBarLabel: "Donate Books",
    },
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image source={require("../assets/request-book.png")}></Image>
      ),
      tabBarLabel: "Book Request",
    },
  },
});
