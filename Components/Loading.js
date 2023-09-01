// Display with use of FlatList

import React, { useState } from 'react';
import List from './List';
import {
	Button,
	FlatList,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
function Loading(props) {
	const [start, useStart] = useState(0);
	const [end, useEnd] = useState(10);

	const renderList = List.slice(start, end);

	return (
		<ScrollView>
			{/* <FlatList
				data={renderList}
				keyExtractor={(List) => List.No.toString()}
				renderItem={({ item }) => (
					<Text style={[tw`p-5`]}>
						{item.No}. {item.Model} - {item.NoOfAvailable}
					</Text>
				)}
			/> */}

			{renderList.map((item, i) => (
				<Text style={[tw`p-5`]} key={i}>
					{item.No}. {item.Model} - {item.NoOfAvailable}
				</Text>
			))}

			<View style={[tw`flex flex-row`]}>
				<TouchableOpacity
					style={tw`${start > 0 ? 'bg-blue-500 m-4 p-2 rounded' : 'hidden'}`}
					onPress={() => {
						if (start >= 10) {
							useStart(start - 10);
							useEnd(end - 10);
						}
					}}
				>
					<Text style={tw`text-white font-bold`}>Previous</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`${
						start + 10 < List.length
							? 'bg-blue-500 m-4 p-2 px-5 rounded'
							: 'hidden'
					}`}
					onPress={() => {
						if (start + 10 < List.length) {
							useStart(start + 10);
							useEnd(end + 10);
						}
					}}
				>
					<Text style={tw`text-white font-bold`}>Next</Text>
				</TouchableOpacity>
			</View>
			{/* <Button
				style={[tw`p-5`]}
				title="Previous"
				onPress={() => {
					if (start >= 10) {
						useStart(start - 10);
						useEnd(end - 10);
					}
				}}
			/> */}
			{/* <Button
				title="Next"
				onPress={() => {
					if (start + 10 < List.length) {
						useStart(start + 10);
						useEnd(end + 10);
					}
				}}
			/> */}
		</ScrollView>
	);
}

export default Loading;
