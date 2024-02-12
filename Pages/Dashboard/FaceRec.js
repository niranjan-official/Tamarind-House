import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FaceRec = () => {
  return <View style={styles.container}>
    <Text>FaceRecognition</Text>
  </View>;
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f0ed",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default FaceRec;
