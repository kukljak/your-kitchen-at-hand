import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';

import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';

const wordArray = [
    'All',
    'Indian',
    'Italian',
    'Asian',
    'Chinese',
    'Ukrainian',
    'Spanish',
    'French',
    'Danish',
    'German',
];

const CountryFoodSlider = () => {
    const [pressedItem, setPressedItem] = useState(wordArray[0]);

    return (
        <FlatList
            data={wordArray}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.rootContainer}
            horizontal
            renderItem={({ item, index }) => {
                return (
                    <Pressable
                        style={[
                            styles.item,
                            pressedItem === item && styles.pressedItem,
                            wordArray.length - 1 === index && styles.lastItem,
                        ]}
                        onPress={() => setPressedItem(item)}
                    >
                        <Text style={[styles.itemText, pressedItem === item && styles.pressedItemText]}>{item}</Text>
                    </Pressable>
                );
            }}
        />
    );
};

export default CountryFoodSlider;

const styles = StyleSheet.create({
    rootContainer: {
        gap: 20,
        marginLeft: 30,
    },
    item: {
        paddingHorizontal: 20,
        paddingVertical: 7,
    },
    lastItem: {
        marginRight: 30,
    },
    pressedItem: {
        backgroundColor: Colors.primary.primary100,
        borderRadius: 10,
    },
    itemText: {
        color: Colors.primary.primary80,
        ...Typography.bold.small,
    },
    pressedItemText: {
        color: Colors.neutral.white,
    },
});
