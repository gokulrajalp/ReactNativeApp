import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ForgetPassword from './Components/ForgetPassword';
import Profile from './Components/Profile';
import Display from './Components/Display';
import Loading from './Components/Loading';
import Scroll from './Components/Scroll';
import ApiFetch from './Components/ApiFetch';
import Gallerypermission from './Components/Permission/Gallerypermission';

export default function AuthNavigator() {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator initialRouteName="LandingPage">
			<Stack.Screen name="LandingPage" component={LandingPage} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="SignUp" component={SignUp} />
			<Stack.Screen name="ForgetPassword" component={ForgetPassword} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="Display" component={Display} />
			<Stack.Screen name="Scroll" component={Scroll} />
			<Stack.Screen name="Loading" component={Loading} />
			<Stack.Screen name="APIFetch" component={ApiFetch} />
			<Stack.Screen name="Gallery" component={Gallerypermission} />
		</Stack.Navigator>
	);
}
