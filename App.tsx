/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { createDrawerNavigator } from "@react-navigation/drawer";
import FlatDetails from "./src/components/screen/flat/Flat";
import Flour from "./src/components/screen/flour/Flour";
import HomePage from "./src/components/screen/home/HomePage";
import Login from "./src/components/screen/login/Login";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Flour: { heightsId: string; label: string };
  Flat: { flatId: string; label: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomePage">
      <Drawer.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={HomeDrawer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Flour"
              component={Flour}
              options={({ route }) => ({
                title: route.params?.label ?? "Floors",
                headerStyle: {
                  backgroundColor: "#0098FF",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 22,
                },
                headerTitleAlign: "center",
              })}
            />
            <Stack.Screen
              name="Flat"
              component={FlatDetails}
              options={({ route }) => ({
                title: route.params?.label ?? "Flat",
                headerStyle: {
                  backgroundColor: "#0098FF",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 22,
                },
                headerTitleAlign: "center",
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
