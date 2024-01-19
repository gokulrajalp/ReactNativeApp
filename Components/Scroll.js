my// Display with use of ScrollView

import React from 'react';
import List from './List';
import { ScrollView, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

function Scroll(props) {
	return (
		// this will make a screen scroll to show all content 
		<ScrollView>
			{List.map((item, i) => (
				<Text style={[tw`p-5`]} key={i}>
					{item.No}. {item.Model} - {item.NoOfAvailable}
				</Text>
			))}
		</ScrollView>
	);
}

export default Scroll;
