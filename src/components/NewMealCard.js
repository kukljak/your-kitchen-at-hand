import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';

const MealCard = () => {
    const RatingIcons = ({ count }) =>
        Array.from({ length: count }).map(() => {
            const id = uuid();

            return <Ionicons key={id} name="star" size={14} color={Colors.rating} />;
        });

    return (
        <View style={styles.rootContainer}>
            <Image style={styles.img} source={require('../../assets/images/welcome-img.jpg')} resizeMode="cover" />
            <View style={styles.cardContainer}>
                <Text style={styles.title}>Steak with tomato...</Text>
                <View style={styles.ratingContainer}>
                    <RatingIcons count={5} />
                </View>
                <View style={styles.footerContainer}>
                    <View style={styles.authorContainer}>
                        <Image
                            style={styles.avatar}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
                        />
                        <Text style={styles.authorName}>By James Milner</Text>
                    </View>
                    <View style={styles.timeDuration}>
                        <Ionicons name="stopwatch-outline" size={17} style={styles.durationIcon} />
                        <Text style={styles.durationText}>20 mins</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default MealCard;

const styles = StyleSheet.create({
    rootContainer: {
        width: 251,
        height: 127,
        flexDirection: 'row',
        marginBottom: 12,
    },
    cardContainer: {
        height: '80%',
        width: '100%',
        alignSelf: 'flex-end',
        justifyContent: 'space-between',
        backgroundColor: Colors.neutral.white,
        borderRadius: 12,
        padding: 10,
        shadowColor: Colors.neutral.gray3,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
    },
    title: {
        color: Colors.neutral.gray1,
        ...Typography.bold.small,
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    img: {
        height: 86,
        width: 86,
        borderRadius: '50%',
        position: 'absolute',
        zIndex: 50,
        right: '5%',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    authorName: {
        color: Colors.neutral.gray3,
        ...Typography.regular.smaller,
    },
    avatar: {
        height: 25,
        width: 25,
        borderRadius: '50%',
    },
    timeDuration: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    durationIcon: {
        color: Colors.neutral.gray3,
    },
    durationText: {
        color: Colors.neutral.gray3,
        ...Typography.regular.smaller,
    },
});
