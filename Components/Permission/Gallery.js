import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
// import * as Permissions from 'expo-permissions';

import * as ImagePicker from 'expo-image-picker';
// import ImageInput from './ImageInput';
import ImageList from './ImageList';

export default function Gallery() {
	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
		if (!granted) {
			alert('No Permission -> No Access! Good Boy:)');
		}
	};

	const [images, setImages] = useState([]);

	// const getImage = async () => {
	// 	try {
	// 		const result = await ImagePicker.launchImageLibraryAsync({
	// 			mediaTypes: ImagePicker.MediaTypeOptions.Images,
	// 			quality: 0.5,
	// 		});
	// 		if (!result.canceled) {
	// 			setImage([...image, result.assets[0].uri]);
	// 		}
	// 	} catch (error) {
	// 		console.log('Error on get Image', error);
	// 	}
	// };

	useEffect(() => {
		requestPermission();
	}, []);

	const handleAdd = async () => {
		setImages([...images, uri]);
		// try {
		// 	const result = await ImagePicker.launchImageLibraryAsync({
		// 		mediaTypes: ImagePicker.MediaTypeOptions.Images,
		// 		quality: 0.5,
		// 	});
		// 	if (!result.canceled) {
		// 		setImage([...(image || []), result.assets[0].uri]);
		// 	}
		// } catch (error) {
		// 	console.log('Error on get Image', error);
		// }
	};
	const handleDelete = (uri) => {
		setImages(images.filter((images) => images !== uri));
	};

	return (
		<View style={styles.container}>
			<ImageList
				images={images}
				onAddImage={handleAdd}
				onRemoveImage={handleDelete}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
