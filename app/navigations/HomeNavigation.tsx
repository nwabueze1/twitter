import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TweetsScreen from "../screens/TweetsScreen";
import { screens } from "../utils/screens";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import AppText from "../components/AppText";
import { colors } from "../config/colors";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();
type IIcon = "home" | "search";
interface IconProps {
  name: IIcon;
  size: number;
  color: string;
}
const Icon = (props: IconProps) => <Feather {...props} />;

export const HomeNavigator = () => (
  <Tab.Navigator
    defaultScreenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "white",
      },
    }}
  >
    <Tab.Screen
      name={screens.tweets}
      component={TweetsScreen}
      options={{
        tabBarIcon: (prop) => <Icon {...prop} name="home" />,
        tabBarShowLabel: false,
      }}
    />
    <Tab.Screen
      name={screens.search}
      component={SearchScreen}
      options={{
        tabBarIcon: (prop) => <Icon {...prop} name="search" />,
        tabBarShowLabel: false,
      }}
    />
  </Tab.Navigator>
);
