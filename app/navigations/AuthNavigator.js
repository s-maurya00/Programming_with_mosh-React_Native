import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

import routes from './routes';

const Stack = createStackNavigator();

const AuthNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.WELCOME_SCREEN} component={WelcomeScreen} />

            <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />

            <Stack.Screen name={routes.REGISTER_SCREEN} component={RegisterScreen} />
        </Stack.Navigator>
    )
};

export default AuthNavigator;