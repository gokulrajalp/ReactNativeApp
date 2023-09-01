import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useState } from 'react';
export default function SignUp({ navigation }) {
	const [name, setName] = useState('');

	return (
		<View style={[tw`flex-1 justify-center items-center `]}>
			<Text>Sign Up</Text>

			<TextInput
				style={[tw`rounded-full ml-2 justify-between`]}
				placeholder="Full Name"
			/>
			<TextInput
				style={[tw`rounded-full ml-2 justify-between`]}
				placeholder="Email"
			/>
			<TextInput
				style={[tw`rounded-full ml-2 justify-between`]}
				placeholder="User Name"
				value={name}
				onChangeText={setName}
			/>
			<TextInput
				style={[tw`rounded-full ml-2 justify-between`]}
				placeholder="Password"
				secureTextEntry
			/>
			<TextInput
				style={[tw`rounded-full ml-2 justify-between`]}
				placeholder="Confirm Password"
				secureTextEntry
			/>

			<Button
				style={[tw`rounded-full`]}
				title="Sign Up"
				onPress={() => navigation.navigate('Profile', { name: name })}
			/>

			<StatusBar style="auto" />
		</View>
	);
}
