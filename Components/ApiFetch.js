import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import DataUI from './DataUI';

export default function ApiFetch() {
	const [Data, useData] = useState([]);
	const [RenderData, useRenderData] = useState([]);
	const [Start, useStart] = useState(0);
	const [End, useEnd] = useState(3);

	const getData = async () => {
		try {
			const response = await fetch('https://fakestoreapi.com/products');
			const data = await response.json();
			useData(data);
			useRenderData(data.slice(Start, End));
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		useRenderData(Data.slice(Start, End));
	}, [End]);

	const FetchData = () => {
		if (End < Data.length) {
			useEnd((prevEnd) => prevEnd + 3);
		}
	};

	return (
		<View>
			<FlatList
				data={RenderData}
				renderItem={({ item }) => <DataUI propData={item} />}
				onEndReached={FetchData}
				onEndReachedThreshold={0.5}
			/>
		</View>
	);
}
