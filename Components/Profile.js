import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

export default function Profile({ navigation, route }) {
	return (
		<View style={[tw`flex-1 justify-center items-center `]}>
			<Text>Welcome {route.params.name}</Text>
			<StatusBar style="auto" />
			<Button
				style={[tw`rounded-full`]}
				title="Log out"
				onPress={() => navigation.navigate('LandingPage')}
			/>
		</View>
	);
}
