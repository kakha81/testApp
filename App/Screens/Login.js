import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import app from "./../../assets/images/app-shoe.png";

export default function Login() {
  return (
    <View>
      <Image style={styles.appImage} source={app} />
    </View>
  );
}
const styles = StyleSheet.create({
  appImage: {
    width: "auto",
    height: 400,
    objectFit: "contain",
  },
});
