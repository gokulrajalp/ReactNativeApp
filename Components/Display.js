// Display with use of FlatList

import React from 'react';
import List from './List';
import { FlatList, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
function Display(props) {
	return (
		<FlatList
			data={List}
			keyExtractor={(List) => List.No.toString()}
			renderItem={({ item }) => (
				<Text style={[tw`p-5`]}>
					{item.No}. {item.Model} - {item.NoOfAvailable}
				</Text>
			)}
		/>
	);
}

export default Display;
