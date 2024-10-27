import { useState } from 'react';
import { StyleSheet, TextInput as Input, Text, View } from 'react-native';

import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';

const TextInput = ({ disabled, label, placeholder, type }) => {
    const [isFocused, setFocused] = useState(false);
    let keyboardType;

    switch (type) {
        case 'email':
            keyboardType = 'email-address';
            break;
        default:
            keyboardType = 'default';
            break;
    }

    return (
        <View>
            <Text style={styles.inputLabel}>{label}</Text>
            <Input
                editable={disabled ? false : true}
                keyboardType={keyboardType}
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                placeholder={placeholder}
                placeholderTextColor={disabled ? Colors.neutral.gray2 : Colors.neutral.gray4}
                style={[styles.input, disabled && styles.disabledInput, isFocused && styles.onFocusInput]}
            />
        </View>
    );
};

export default TextInput;

const styles = StyleSheet.create({
    inputLabel: {
        marginBottom: 5,
        ...Typography.regular.small,
    },
    input: {
        paddingVertical: 17.5,
        paddingHorizontal: 18.5,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: Colors.neutral.gray4,
        color: Colors.neutral.black,
        ...Typography.regular.small,
    },
    disabledInput: {
        backgroundColor: Colors.neutral.gray4,
    },
    onFocusInput: {
        borderColor: Colors.primary.primary80,
    },
});
