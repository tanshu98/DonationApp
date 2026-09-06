import HomeScreen from "../screens/HomeScreen";
import SingleDonationItem from '../screens/SingleDonationItem';
// import Routes from './Routes'
// import Routes
import { Routes } from './Routes';

const { createStackNavigator } = require("@react-navigation/stack")

const Stack = createStackNavigator();
const MainNavigation = ()=> {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen  name={Routes.Home} component={HomeScreen} />
            <Stack.Screen name={Routes.SingleDonationItem} component={SingleDonationItem} />
        </Stack.Navigator>
    )

};

export default MainNavigation;