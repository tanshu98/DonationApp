import HomeScreen from "../screens/HomeScreen";
import SingleDonationItem from '../screens/SingleDonationItem';
import { Routes } from './Routes';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const { createStackNavigator } = require("@react-navigation/stack")

const Stack = createStackNavigator();
const MainNavigation = ()=> {
    return (
        <Stack.Navigator initialRouteName={Routes.Login} screenOptions={{headerShown:false}} >
            <Stack.Screen  name={Routes.Login} component={LoginScreen} />
            <Stack.Screen  name={Routes.Register} component={RegisterScreen } />
            <Stack.Screen  name={Routes.Home} component={HomeScreen} />
            <Stack.Screen name={Routes.SingleDonationItem} component={SingleDonationItem} />
        </Stack.Navigator>
    )

};

export default MainNavigation;