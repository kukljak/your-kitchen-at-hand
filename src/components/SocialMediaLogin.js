const { View, Image, StyleSheet, Pressable } = require('react-native');

const { Colors } = require('../constants/Colors');

const SocialMediaLogin = () => {
    return (
        <>
            <Pressable>
                <View style={styles.socialMediaBox}>
                    <Image source={require('../../assets/images/google.png')} />
                </View>
            </Pressable>
            <Pressable>
                <View style={styles.socialMediaBox}>
                    <Image source={require('../../assets/images/facebook.png')} />
                </View>
            </Pressable>
        </>
    );
};

export default SocialMediaLogin;

const styles = StyleSheet.create({
    socialMediaBox: {
        backgroundColor: Colors.neutral.white,
        borderRadius: 10,
        height: 44,
        width: 44,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.neutral.gray3,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 5,
    },
});
