import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Icon } from "react-native-elements";

const myHeader = (props) => {
  return (
    <Header
      centerComponent={{
        text: props.title,
        style: { color: "#90a5a9", fontSize: 20, fontWeight: "bold" },
      }}
      backgroundColor="#caf8fe"
    />
  );
};

export default myHeader;
