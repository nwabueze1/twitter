import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { HomeNavigator } from "./app/navigations/HomeNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
