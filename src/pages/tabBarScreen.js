import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./homeScreen";
import SearchScreen from "./searchScreen";
import MapScreen from "./mapScreen";
import SettingScreen from "./settingScreen";
import { PRIMARY, TAB_BAR_ACTIVE_COLOR, TAB_BAR_INACTIVE_COLOR } from "../constants/colors";
import { HOME_TAB, MAP_TAB, SEARCH_TAB, SETTING_TAB } from "../constants/app_string";

export default function TabBarScreen() {
    const Tabs = createBottomTabNavigator();

    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: PRIMARY },
                tabBarActiveTintColor: TAB_BAR_ACTIVE_COLOR,
                tabBarInactiveTintColor: TAB_BAR_INACTIVE_COLOR,
            }}
        >
            <Tabs.Screen
                name={HOME_TAB}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('./.././../assets/homeTabIcon.png')}
                            style={{ width: 26, height: 26, tintColor: color }}
                            resizeMode='contain'
                        />
                    )
                }}
            />
            <Tabs.Screen
                name={SEARCH_TAB}
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('./.././../assets/searchResult.png')}
                            style={{ width: 22, height: 22, tintColor: color }}
                            resizeMode='contain'
                        />
                    )
                }}
            />
            <Tabs.Screen
                name={MAP_TAB}
                component={MapScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('./.././../assets/map.png')}
                            style={{ width: 22, height: 22, tintColor: color }}
                            resizeMode='contain'
                        />
                    )
                }}
            />
            <Tabs.Screen
                name={SETTING_TAB}
                component={SettingScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('./.././../assets/setting.png')}
                            style={{ width: 22, height: 22, tintColor: color }}
                            resizeMode='contain'
                        />
                    )
                }}
            />
        </Tabs.Navigator>
    );
}