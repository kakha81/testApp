import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Login from "./App/Screens/Login";

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});

export default App;
