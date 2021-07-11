import React from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from "react-native";
import myHeader from "../components/MyHeader";
import firebase from "firebase";

export default class BookRequestScreen extends React.Component {
  render() {
    return (
      //   <View style={{ flex: 1 }}>
      //     <myHeader title="Request Book" />
      //     <KeyboardAvoidingView style={styles.keyboardStyle}>
      //       <TextInput></TextInput>
      //     </KeyboardAvoidingView>
      //   </View>
      <Text>Book Request scren</Text>
    );
  }
}
