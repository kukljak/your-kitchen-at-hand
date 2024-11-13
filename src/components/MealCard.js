import { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';

const MealCard = () => {
    const [pressedBookmark, setPressedBookmark] = useState(false);

    return (
        <View style={styles.rootContainer}>
            <View style={styles.foodImage}>
                <Image style={styles.img} source={require('../../assets/images/welcome-img.jpg')} resizeMode="cover" />
                <View style={styles.foodImageRating}>
                    <Ionicons name="star" size={14} color={Colors.rating} />
                    <Text> 4.5</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ gap: 20 }}>
                    <View>
                        <Text style={styles.title}>Classic Greek Salad</Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <View style={{ gap: 5 }}>
                            <Text style={styles.timeText}>Time</Text>
                            <Text style={styles.timeDuration}>15 Mins</Text>
                        </View>
                        <Pressable
                            style={styles.bookMarkContainer}
                            onPress={() => setPressedBookmark(!pressedBookmark)}
                        >
                            <View>
                                {pressedBookmark ? (
                                    <Ionicons name={'bookmark'} size={16} color={Colors.primary.primary80} />
                                ) : (
                                    <Ionicons name={'bookmark-outline'} size={16} color={Colors.neutral.gray3} />
                                )}
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default MealCard;

const styles = StyleSheet.create({
    rootContainer: {
        height: 231,
        width: 150,
        justifyContent: 'flex-end',
    },
    foodImage: {
        height: 110,
        width: 110,
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 50,
        top: 0,
    },
    img: {
        height: '100%',
        width: '100%',
        borderRadius: '100%',
    },
    foodImageRating: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '70%',
        bottom: '50%',
        backgroundColor: Colors.secondary.secondary20,
        borderRadius: 10,
        paddingVertical: 3.5,
        paddingHorizontal: 6,
    },
    container: {
        height: '75%',
        padding: 10,
        justifyContent: 'flex-end',
        borderRadius: 12,
        backgroundColor: Colors.neutral.gray4,
    },
    title: {
        alignSelf: 'center',
        textAlign: 'center',
        ...Typography.bold.small,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    timeText: {
        color: Colors.neutral.gray3,
        ...Typography.regular.smaller,
    },
    timeDuration: {
        color: Colors.neutral.gray1,
        ...Typography.bold.small,
    },
    bookMarkContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
        borderRadius: '50%',
        backgroundColor: Colors.neutral.white,
    },
});
