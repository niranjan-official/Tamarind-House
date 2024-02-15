import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OTPInput from "../../components/OTPInput";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const OTP = () => {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;

  useEffect(() => {
    setIsPinReady(otpCode.length === maximumCodeLength);
    return () => {
      setIsPinReady(false);
    };
  }, [otpCode]);

  return (
    <View style={styles.container}>
      <Pressable style={styles.screen} onPress={Keyboard.dismiss}>
        <EvilIcons color={'#9c0f05'} style={styles.icon} name="lock" />
        <Text style={styles.otp}>Verification Code</Text>
        <Text style={styles.otpContent}>We have sent the code verification to your email</Text>
        <OTPInput
          code={otpCode}
          setCode={setOTPCode}
          maximumLength={maximumCodeLength}
          setIsPinReady={setIsPinReady}
        />
        <TouchableOpacity  style={styles.loginButton}>
          <Text style={styles.buttonText}>Submit</Text>
          {/* <ActivityIndicator animating={loading} color={"#eee"} /> */}
        </TouchableOpacity>
      </Pressable>
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon:{
    fontSize: 120
  },
  otp:{
    color: '#9c0f05',
    fontSize: 35,
    fontWeight: "bold",
  },
  otpContent:{
    paddingBottom: 100,
    color: 'grey',
    fontSize: 17,
    paddingHorizontal: 25,
    textAlign: 'center'
  },
  loginButton: {
    height: 40,
    width: 100,
    backgroundColor: "#9c0f05",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 25
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OTP;
