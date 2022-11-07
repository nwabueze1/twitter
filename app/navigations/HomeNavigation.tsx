import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TweetsScreen from "../screens/TweetsScreen";
import { screens } from "../utils/screens";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import AppText from "../components/AppText";
import { colors } from "../config/colors";
import SearchScreen from "../screens/SearchScreen";
import SpacesScreen from "../screens/SpacesScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Tab = createBottomTabNavigator();
type IIcon = "home" | "search" | "speaker" | "bell" | "mail";
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
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name={screens.tweets}
      component={TweetsScreen}
      options={{
        tabBarIcon: (prop) => <Icon {...prop} name="home" />,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name={screens.search}
      component={SearchScreen}
      options={{
        tabBarIcon: (prop) => <Icon {...prop} name="search" />,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name={screens.spaces}
      component={SpacesScreen}
      options={{
        tabBarIcon: (prop) => <Icon name="speaker" {...prop} />,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name={screens.notification}
      component={NotificationsScreen}
      options={{
        tabBarIcon: (prop) => <Icon name="bell" {...prop} />,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name={screens.messages}
      component={MessagesScreen}
      options={{
        tabBarIcon: (prop) => <Icon name="mail" {...prop} />,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);
