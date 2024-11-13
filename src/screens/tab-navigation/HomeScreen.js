import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';
import Carousel from '../../components/Carousel';
import CountryFoodSlider from '../../components/CountryFoodSlider';
import FilterRatingButton from '../../components/FilterRatingButton';
import MealCard from '../../components/MealCard';
import NewMealCard from '../../components/NewMealCard';
import SearchInput from '../../components/SearchInput';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <View style={styles.rootContainer}>
                    <View style={styles.headerContainer}>
                        <View style={styles.greetingContainer}>
                            <Text style={styles.greetingTitle}>Hello Jega</Text>
                            <Text style={styles.greetingDescription}>What are you cooking today?</Text>
                        </View>
                        <View style={{ height: 40, width: 40, backgroundColor: 'orange', borderRadius: 12 }}>
                            <Image />
                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={{ flex: 6 }}>
                            <SearchInput />
                        </View>
                        <View style={{ flex: 1 }}>
                            <FilterRatingButton>
                                <Ionicons name="options-outline" size={20} color={Colors.neutral.white} />
                            </FilterRatingButton>
                        </View>
                    </View>
                    <View style={styles.countryFoodSliderContainer}>
                        <CountryFoodSlider />
                    </View>
                    <View style={styles.foodCarousel}>
                        <Carousel data={['a', 'b', 'c', 'd', 'e', 'g']} Template={MealCard} />
                    </View>
                    <Text style={styles.newRecipeTitle}>New Recipes</Text>
                    <View style={styles.newRecipesContainer}>
                        <Carousel data={['1', '2', '3']} Template={NewMealCard} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: Colors.neutral.white,
    },
    rootContainer: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: '40%',
        justifyContent: 'space-between',
        backgroundColor: Colors.neutral.white,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 30,
        marginBottom: 30,
    },
    greetingContainer: {
        gap: 5,
        marginLeft: 30,
    },
    greetingTitle: {
        color: Colors.neutral.black,
        ...Typography.bold.large,
    },
    greetingDescription: {
        color: Colors.neutral.gray3,
        ...Typography.regular.small,
    },
    searchContainer: {
        flexDirection: 'row',
        gap: 20,
        marginHorizontal: 30,
        marginBottom: 15,
    },
    countryFoodSliderContainer: {
        marginBottom: 15,
        paddingVertical: 10,
    },
    newRecipeTitle: {
        marginLeft: 30,
        marginBottom: 5,
        color: Colors.neutral.black,
        ...Typography.bold.normal,
    },
    foodCarousel: {
        marginBottom: 20,
    },
});
