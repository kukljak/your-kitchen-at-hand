import { Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import TextInput from '../../components/TextInput';
import TextButton from '../../components/TextButton';
import Button from '../../components/Button';
import SocialMediaLogin from '../../components/SocialMediaLogin';
import { Typography } from '../../constants/Typography';
import { Colors } from '../../constants/Colors';

const RegisterScreen = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.rootContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.title}>Create an account</Text>
                            <Text style={styles.subTitle}>Let’s help you set up your account, it won’t take long.</Text>
                        </View>
                        <View style={styles.inputsContainer}>
                            <TextInput placeholder="Enter Name" label="Name" />
                            <TextInput placeholder="Enter Email" label="Email" type="email" />
                            <TextInput placeholder="Enter Password" label="Enter Password" secureTextEntry={true} />
                            <TextInput placeholder="Confirm Password" label="Retype Password" secureTextEntry={true} />
                        </View>
                        <View style={styles.termsConditionContainer}>
                            <BouncyCheckbox
                                text="Accept terms & Condition"
                                size={17}
                                fillColor={Colors.secondary.secondary100}
                                textStyle={styles.termsCondition}
                                iconStyle={{ borderRadius: 5 }}
                                innerIconStyle={{ borderRadius: 5 }}
                            />
                        </View>
                        <Button text="Sign Up" size="large" onPress={() => navigation.navigate('TabsNavigator')} />
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
                        <View style={styles.signInContainer}>
                            <Text style={styles.signInText}>Already a member? </Text>
                            <TextButton text="Sign In" onPress={() => navigation.navigate('LoginScreen')} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginHorizontal: '7%',
        marginVertical: '5%',
    },
    headerContainer: {
        width: 180,
        gap: '5%',
        marginBottom: '10%',
    },
    title: {
        ...Typography.bold.large,
    },
    subTitle: {
        letterSpacing: -0.2,
        ...Typography.regular.smaller,
    },
    inputsContainer: {
        gap: '25%',
        marginBottom: '5%',
    },
    termsConditionContainer: {
        marginTop: '3%',
        marginBottom: '7%',
    },
    termsCondition: {
        textDecorationLine: 'none',
        color: Colors.secondary.secondary100,
        ...Typography.regular.small,
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
        marginTop: '5%',
        marginBottom: '7%',
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
    signInContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%',
        marginBottom: '5%',
    },
    signInText: {
        ...Typography.bold.small,
    },
});
