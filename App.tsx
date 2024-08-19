import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./src/navigation/StackNavigationContainer";

export default function App() {
  return <StackNavigation />;
}
