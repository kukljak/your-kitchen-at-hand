import { StyleSheet, SafeAreaView, ImageBackground, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import Button from '../components/Button';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';

const WelcomeScreen = ({ navigation }) => {
    const onPressHandler = () => {
        navigation.navigate('LoginScreen');
    };

    return (
        <View style={styles.flexOne}>
            <StatusBar style="light" />
            <ImageBackground
                source={require('../../assets/images/welcome-img.jpg')}
                resizeMode="cover"
                style={styles.flexOne}
            >
                <LinearGradient style={styles.flexOne} colors={['#0000008c', Colors.neutral.black]}>
                    <SafeAreaView style={styles.rootContainer}>
                        <View style={styles.headerContainer}>
                            <Image source={require('../../assets/images/cooking-hat.png')} />
                            <View style={styles}>
                                <Text style={styles.headerText}>100K+ Premium Recipe</Text>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <View style={styles.titleContainer}>
                                <View>
                                    <Text style={styles.footerTitle}>Get</Text>
                                    <Text style={styles.footerTitle}>Cooking</Text>
                                </View>
                                <Text style={styles.subTitle}>Simple way to find Tasty Recipe</Text>
                            </View>
                            <View style={styles.footerButton}>
                                <Button size="medium" onPress={onPressHandler} text="Start Cooking" />
                            </View>
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    flexOne: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '25%',
        marginBottom: '20%',
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        gap: 14,
    },
    headerText: {
        color: Colors.neutral.white,
        ...Typography.bold.medium,
    },
    footerContainer: {
        flex: 1,
        gap: '64%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        gap: '20%',
    },
    footerTitle: {
        color: Colors.neutral.white,
        fontSize: 55,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subTitle: {
        color: Colors.neutral.white,
        ...Typography.bold.normal,
    },
    footerButton: {
        width: '70%',
    },
});
