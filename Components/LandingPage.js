import { StatusBar } from 'expo-status-bar';
import { Text, View, Touch, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

export default function LandingPage({ navigation }) {
	return (
		<View style={[tw`flex-1 justify-center items-center`]}>
			<Text>Welcome and Get Start</Text>

			<TouchableOpacity
				style={[tw`bg-blue-500 m-4 p-2 px-5 rounded`]}
				onPress={() => navigation.navigate('Login')}
			>
				<Text style={tw`text-white font-bold`}>Login</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[tw`bg-blue-500 m-4 p-2 px-5 rounded`]}
				onPress={() => navigation.navigate('Display')}
			>
				<Text style={tw`text-white font-bold`}>Flat List</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[tw`bg-blue-500 m-4 p-2 px-5 rounded`]}
				onPress={() => navigation.navigate('Scroll')}
			>
				<Text style={tw`text-white font-bold`}>Scroll View</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[tw`bg-blue-500 m-4 p-2 px-5 rounded`]}
				onPress={() => navigation.navigate('Loading')}
			>
				<Text style={tw`text-white font-bold`}>Pagination</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[tw`bg-blue-500 m-4 p-2 px-5 rounded`]}
				onPress={() => navigation.navigate('APIFetch')}
			>
				<Text style={tw`text-white font-bold`}>API_Fetch (Load More)</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[tw`bg-blue-500 m-4 p-2 px-5 rounded`]}
				onPress={() => navigation.navigate('Gallery')}
			>
				<Text style={tw`text-white font-bold`}>Gallery</Text>
			</TouchableOpacity>

			<StatusBar style="auto" />
		</View>
	);
}
