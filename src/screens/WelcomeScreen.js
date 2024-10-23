import { StyleSheet, SafeAreaView, ImageBackground, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import Button from '../components/Button';
import { Colors } from '../constants/Colors';

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
                                <Button
                                    name="icon-arrow-right-outline"
                                    text="Start Cooking"
                                    size={18}
                                    hasIcon
                                    onPress={onPressHandler}
                                />
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
        alignItems: 'center',
        gap: 14,
    },
    headerText: {
        color: Colors.neutral.white,
        fontSize: 17,
        fontWeight: 'bold',
    },
    footerContainer: {
        width: '70%',
        gap: 64,
        alignItems: 'center',
    },
    titleContainer: {
        gap: 20,
    },
    footerTitle: {
        color: Colors.neutral.white,
        fontSize: 60,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subTitle: {
        color: Colors.neutral.white,
        fontSize: 20,
        fontWeight: '300',
    },
    footerButton: {
        width: '100%',
    },
});
