import { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, View, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';

import { Colors } from '../constants/Colors';

const BottomTabBar = (props) => {
    const {
        state: { index: screenIndex, routeNames },
    } = props;
    const [currentScreen, setCurrentScreen] = useState(routeNames[screenIndex]);
    const iconSize = 30;

    useEffect(() => {
        setCurrentScreen(routeNames[screenIndex]);
    }, [routeNames, screenIndex]);

    return (
        <View style={styles.rootcontainer}>
            <Pressable style={({ pressed }) => [styles.addReceptButton, pressed && styles.pressedButton]}>
                <View>
                    <FeatherIcons name="plus" size={iconSize} color={Colors.neutral.white} />
                </View>
            </Pressable>
            <ImageBackground
                source={require('../../assets/images/bottom-navigation-container.png')}
                style={styles.navBarImageContainer}
            >
                <View style={styles.navBarIconsContainer}>
                    <Pressable onPress={() => props.navigation.navigate('HomeScreen')}>
                        <Ionicons
                            name={currentScreen === 'HomeScreen' ? 'home' : 'home-outline'}
                            size={iconSize}
                            color={currentScreen === 'HomeScreen' ? Colors.green : Colors.neutral.black}
                        />
                    </Pressable>
                    <Pressable>
                        <Ionicons
                            name={currentScreen === 'ScreenName' ? 'bookmark' : 'bookmark-outline'}
                            size={iconSize}
                            color={currentScreen === 'ScreenName' ? Colors.green : Colors.neutral.black}
                        />
                    </Pressable>
                </View>
                <View style={styles.blankSpaceInsteadButton} />
                <View style={styles.navBarIconsContainer}>
                    <SimpleLineIcons
                        name="bell"
                        size={iconSize}
                        color={currentScreen === 'ScreenName' ? Colors.green : Colors.neutral.black}
                    />
                    <Ionicons
                        name={currentScreen === 'ScreenName' ? 'person' : 'person-outline'}
                        size={iconSize}
                        color={currentScreen === 'ScreenName' ? Colors.green : Colors.neutral.black}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

export default BottomTabBar;

const styles = StyleSheet.create({
    rootcontainer: {
        height: '15%',
        width: '100%',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 0,
    },
    navBarImageContainer: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    navBarIconsContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    blankSpaceInsteadButton: {
        flex: 1,
    },
    addReceptButton: {
        height: 55,
        width: 55,
        backgroundColor: Colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'center',
        bottom: '75%',
        borderRadius: '50%',
        zIndex: 99999,
    },
    pressedButton: {
        opacity: 0.8,
    },
});
