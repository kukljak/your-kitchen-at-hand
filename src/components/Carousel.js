import { FlatList, Pressable, StyleSheet } from 'react-native';

const Carousel = ({ data, Template }) => {
    return (
        <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.rootContainer}
            horizontal
            renderItem={({ item, index }) => {
                return (
                    <Pressable style={data.length - 1 === index && styles.lastItem}>
                        <Template />
                    </Pressable>
                );
            }}
        />
    );
};

export default Carousel;

const styles = StyleSheet.create({
    rootContainer: {
        gap: 15,
        marginLeft: 30,
    },
    lastItem: {
        marginRight: 30,
    },
});
