import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigations/AppNavigator";
import AuthNavigator from "./app/navigations/AuthNavigator";

import navigationTheme from "./app/navigations/navigationTheme";


export default function App() {

    return (
        <NavigationContainer theme={navigationTheme}>
            <AppNavigator />
        </NavigationContainer>
    );
}