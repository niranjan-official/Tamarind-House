import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Dashboard/Home";
import History from "./Dashboard/History";
import Profile from "./Dashboard/Profile";

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "History") {
            iconName = focused ? "reorder-four" : "reorder-four-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#9c0f05",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Tab.Screen options={{ headerShown: false }} name="History" component={History} />
      <Tab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
