import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { generateToken } from "../../Functions/functions";

export default Home = ({navigation,route}) => {

  const [token,setToken] = useState(null);

  const handleGenerate = async() => {
    const status = await generateToken('prc22cs037');
    if(status.success){
      console.log("Token Generated succesfully!!");
      setToken(status.token)
    }else{
      console.log("Something went wrong");
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGenerate} style={styles.button}>
       <Text style={styles.formHeader}>Generate Token</Text>
      </TouchableOpacity>
      {
        token && <Text style={styles.token}>Generated token: {token}</Text>
      }
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
  button:{
    backgroundColor: '#9c0f05',
    padding: 15,
    borderRadius: 15
  },
 
  formHeader: {
    fontSize: 35,
    color: "#f7f0ed",
    fontWeight: "500",
  },
  token:{
    color: '#9c0f05',
    fontSize: 15,
    marginTop: 20
  }
 
});
