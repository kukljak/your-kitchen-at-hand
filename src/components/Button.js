import { StyleSheet, Text, Pressable, View } from 'react-native';
import FontAwesom6Icon from 'react-native-vector-icons/FontAwesome6';

import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';

const Button = ({ onPress, text, size }) => {
    return (
        <Pressable
            style={({ pressed }) => [styles.buttonContainer, styles[size], pressed && styles.pressedButton]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{text}</Text>
            {size !== 'small' && (
                <View style={styles.icon}>
                    <FontAwesom6Icon name="arrow-right-long" size={18} color={Colors.neutral.white} />
                </View>
            )}
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.primary.primary100,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 9,
    },
    pressedButton: {
        opacity: 0.8,
    },
    buttonText: {
        minWidth: 114,
        color: Colors.neutral.white,
        textAlign: 'center',
        ...Typography.bold.normal,
    },
    icon: {
        color: Colors.neutral.white,
        alignSelf: 'flex-end',
    },
    large: {
        paddingHorizontal: 85,
        paddingVertical: 18,
    },
    medium: {
        paddingHorizontal: 50,
        paddingVertical: 15,
    },
    small: {
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
});
