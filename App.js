import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        FoodRecipe: require('./assets/icons/fonts/FoodRecipe.ttf'),
    });

    if (!fontsLoaded) {
        return (
            <View>
                <Text>App is loading</Text>
            </View>
        );
    }

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
