import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { screens } from "../utils/screens";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screens.welcome}
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={screens.login} component={LoginScreen} />
    <Stack.Screen name={screens.register} component={RegisterScreen} />
  </Stack.Navigator>
);
