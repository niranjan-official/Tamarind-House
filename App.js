import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import FaceRec from "./Pages/Dashboard/FaceRec";

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
          name="FaceRecognition" 
          component={FaceRec}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
