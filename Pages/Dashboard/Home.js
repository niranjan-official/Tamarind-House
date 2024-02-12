import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default Home = ({navigation,route}) => {

  const handleLogin = () => {
    navigation.navigate('Login')
  };
  return (
    <View style={styles.container}>
       <Text style={styles.formHeader}>Home Page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f0ed",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
 
  formHeader: {
    fontSize: 35,
    color: "#9c0f05",
    fontWeight: "500",
    marginBottom: 15,
  },
 
});
