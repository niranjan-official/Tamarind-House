import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default Login = ({navigation}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginSTate, setLoginSTate] = useState(false);

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);
        setLoginSTate(!loginSTate);
        navigation.navigate('Dashboard',{name: username, password: password})
      };
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.text1}>Providence</Text>
        <Text style={styles.text2}>College of Engineering</Text>
      </View>
      <View style={styles.two}>
        <View style={styles.form}>
          <Text style={styles.formHeader}>LOGIN</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.createAccount} onPress={handleLogin}>
            <Text style={styles.link1}>Don't have an account?</Text>
            <Text style={styles.link2}>SIgnup</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  one: {
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  two: {
    height: "70%",
    width: "100%",
    paddingTop: 80,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 30,
  },
  text1: {
    color: "#9c0f05",
    fontSize: 50,
  },
  text2: {
    color: "#9c0f05",
    fontSize: 25,
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    paddingVertical: 40,
    borderRadius: 10,
  },
  formHeader: {
    fontSize: 35,
    color: "#9c0f05",
    fontWeight: "500",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  loginButton: {
    height: 40,
    width: "100%",
    backgroundColor: "#9c0f05",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  createAccount: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    marginTop: 60,
    fontSize: 30,
    fontWeight: "400",
  },
  link1: {
    color: "#9c0f05",
  },
  link2: {
    color: "#9c0f05",
    fontWeight: "bold",
    marginLeft: 5,
  },
});