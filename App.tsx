import SplashScreen from "./src/pages/splash";
import TabBarScreen from "./src/pages/tabBarScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="TabBar" component={TabBarScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}