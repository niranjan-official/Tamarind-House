import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import OTP from "./Pages/Dashboard/OTP";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} /> 
        <Stack.Screen
        options={{ headerShown: false }}
          name="Dashboard" 
          component={Dashboard}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="OTP" 
          component={OTP}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
