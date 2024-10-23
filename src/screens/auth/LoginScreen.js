import { SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
    return (
        <>
            <StatusBar style="dark" />
            <SafeAreaView>
                <View>
                    <Text>Login screen</Text>
                </View>
            </SafeAreaView>
        </>
    );
};

export default LoginScreen;
