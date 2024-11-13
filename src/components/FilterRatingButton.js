import { Pressable, StyleSheet, View } from 'react-native';
import { Colors } from '../constants/Colors';

const FilterRatingButton = ({ children }) => {
    return (
        <Pressable style={({ pressed }) => [styles.rootContainer, pressed && styles.pressed]}>
            <View>{children}</View>
        </Pressable>
    );
};

export default FilterRatingButton;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.primary.primary100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    pressed: {
        opacity: 0.8,
    },
});
