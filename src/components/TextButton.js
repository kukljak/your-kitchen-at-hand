import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';

const TextButton = ({ text, onPress }) => {
    const [isPressed, setPressed] = useState(false);
    const onPressIn = () => setPressed(true);
    const onPressOut = () => setPressed(false);

    return (
        <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
            <Text style={[styles.text, isPressed && styles.pressed]}>{text}</Text>
        </Pressable>
    );
};

export default TextButton;

const styles = StyleSheet.create({
    text: { color: Colors.secondary.secondary100, ...Typography.bold.small },
    pressed: { color: Colors.secondary.secondary60 },
});
