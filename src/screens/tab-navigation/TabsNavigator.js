import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTabBar from '../../components/BottomTabBar';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const TabsNavigator = (props) => {
    return (
        <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default TabsNavigator;
