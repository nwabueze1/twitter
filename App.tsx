import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { AuthContext, IUser } from "./app/context/AuthContext";
import { AuthNavigator } from "./app/navigations/AccountNavigator";
import { HomeNavigator } from "./app/navigations/HomeNavigation";

export default function App() {
  const [user, setUser] = useState<IUser | null>();

  const createUser = (user: IUser) => setUser(user);
  const handleLogout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{
        logout: handleLogout,
        user,
        createUser,
      }}
    >
      <NavigationContainer>{!user ? <AuthNavigator /> : <HomeNavigator />}</NavigationContainer>
    </AuthContext.Provider>
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
