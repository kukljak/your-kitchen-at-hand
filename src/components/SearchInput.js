import { useState } from 'react';
import { TextInput as Input, StyleSheet, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';

const SearchInput = ({ disabled, label, placeholder, type, ...props }) => {
    const [isFocused, setFocused] = useState(false);

    return (
        <View>
            <FeatherIcon name="search" size={20} style={styles.icon} />
            <Input
                editable={disabled ? false : true}
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                placeholder="Placeholder"
                placeholderTextColor={disabled ? Colors.neutral.gray2 : Colors.neutral.gray4}
                style={[styles.input, disabled && styles.disabledInput, isFocused && styles.onFocusInput]}
                {...props}
            />
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: '25%',
        left: 10,
        color: Colors.neutral.gray4,
    },
    input: {
        paddingVertical: 10.2,
        paddingLeft: 37,
        paddingRight: 9,
        borderRadius: 10,
        borderWidth: 1.3,
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
