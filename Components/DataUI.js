import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {
	FlatList,
	Image,
	SafeAreaView,
	Text,
	View,
	StyleSheet,
} from 'react-native';

export default function DataUI(props) {
	return (
		<View>
			<Text style={[tw`m-2`]}>{props.propData.category}</Text>
			<Text style={[tw`m-2`]}>{props.propData.price}</Text>
			<Text style={[tw`m-2`]}>{props.propData.title}</Text>
			<Text style={[tw`m-2`]}>{props.propData.description}</Text>
			<Text style={[tw`m-2`]}>
				Rating: {props.propData.rating.rate} ({props.propData.rating.count})
			</Text>

			<Image
				source={{ uri: props.propData.image }}
				style={{ width: 300, height: 300, resizeMode: 'contain' }}
			/>
			<View style={[tw`border-b border-black my-2`]}></View>
		</View>
	);
}
