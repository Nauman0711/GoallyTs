import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '../theme/colors';
import Routines from '../screens/routines';
import { HomeIcon, SettingIcon } from '../theme/assets/svg';


const Navigation: React.FC = () => {
    const Stack = createStackNavigator();

    return (
        // you can pass root navigation ref here to pass navigation in all over the app functions
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.headerBlue, height: 125 }, headerTintColor: colors.white, headerLeft: () => <HomeIcon />, headerRight: () => <SettingIcon /> }} initialRouteName="Routines">
                <Stack.Screen name="Routines" component={Routines} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation