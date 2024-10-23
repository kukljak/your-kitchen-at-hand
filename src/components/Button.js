import { StyleSheet, Text, Pressable, View } from 'react-native';

import Icon from './Icon';
import { Colors } from '../constants/Colors';

const Button = ({ hasIcon, text, size, onPress, name }) => {
    return (
        <Pressable
            style={({ pressed }) => (pressed ? [styles.buttonContainer, styles.pressedButton] : styles.buttonContainer)}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{text}</Text>
            {hasIcon && (
                <View style={styles.icon}>
                    <Icon name={name} size={size} color={Colors.neutral.white} />
                </View>
            )}
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 50,
        paddingVertical: 15,
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
        color: Colors.neutral.white,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    icon: {
        height: 20,
        color: Colors.neutral.white,
        alignSelf: 'flex-end',
    },
});
