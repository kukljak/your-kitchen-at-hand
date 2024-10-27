import { StyleSheet, SafeAreaView, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TextInput from '../../components/TextInput';
import { Typography } from '../../constants/Typography';
import { Colors } from '../../constants/Colors';
import TextButton from '../../components/TextButton';
import Button from '../../components/Button';
import SocialMediaLogin from '../../components/SocialMediaLogin';

const LoginScreen = () => {
    return (
        <>
            <StatusBar style="dark" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.rootContainer}>
                        <View>
                            <Text style={styles.title}>Hello,</Text>
                            <Text style={styles.subTitle}>Welcome Back!</Text>
                        </View>
                        <View>
                            <View style={styles.inputsContainer}>
                                <TextInput placeholder="Enter Email" label="Email" type="email" />
                                <TextInput placeholder="Enter Password" label="Enter Password" />
                            </View>
                            <View style={styles.forgotPassword}>
                                <TextButton text="Forgot Password?" />
                            </View>
                            <Button text="Sign In" size="large" />
                            <View style={styles.otherLoginContainer}>
                                <View style={styles.otherLoginTextContainer}>
                                    <View style={styles.horizontalBar} />
                                    <Text style={styles.otherLoginText}>Or Sign in With</Text>
                                    <View style={styles.horizontalBar} />
                                </View>
                                <View style={styles.socialMediaLoginContainer}>
                                    <SocialMediaLogin />
                                </View>
                            </View>
                        </View>
                        <View style={styles.signUpContainer}>
                            <Text style={styles.signUpText}>Don't have an account? </Text>
                            <TextButton text="Sign up" />
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginHorizontal: '7%',
        marginBottom: '5%',
        justifyContent: 'space-around',
    },
    title: {
        ...Typography.bold.header,
    },
    subTitle: {
        ...Typography.regular.large,
    },
    inputsContainer: {
        gap: '30%',
        marginBottom: '7%',
    },
    forgotPassword: {
        marginBottom: '7%',
    },
    horizontalBar: {
        width: 50,
        height: 1,
        backgroundColor: Colors.neutral.gray4,
    },
    otherLoginContainer: {
        alignItems: 'center',
    },
    otherLoginTextContainer: {
        marginTop: '10%',
        marginBottom: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    otherLoginText: {
        marginHorizontal: '2%',
        color: Colors.neutral.gray4,
        ...Typography.bold.small,
    },
    socialMediaLoginContainer: {
        flexDirection: 'row',
        gap: '30%',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signUpText: {
        ...Typography.bold.smaller,
    },
});
