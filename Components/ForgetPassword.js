import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

export default function ForgetPassword() {
	return (
		<View style={[tw`flex-1 justify-center items-center`]}>
			<Text>Enter the Below Details</Text>

			<TextInput
				style={[tw`rounded-full ml-2 justify-between`]}
				placeholder="Email"
			/>

			<Button style={[tw`rounded-full`]} title="Sent OTP" />

			<StatusBar style="auto" />
		</View>
	);
}
