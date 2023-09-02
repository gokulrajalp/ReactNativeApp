import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
// import * as Permissions from 'expo-permissions';

import * as ImagePicker from 'expo-image-picker';
import ImageInput from './ImageInput';

export default function Gallerypermission() {
	const requestPermission = async () => {
		// const { granted } = await Permissions.askAsync(
		// 	Permissions.CAMERA_ROLL,
		// 	Permissions.LOCATION
		// );
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
		if (!granted) {
			alert('No Permission -> No Access! Good Boy:)');
		}
	};

	const [image, setImage] = useState();

	useEffect(() => {
		requestPermission();
	}, []);

	// const getImage = async () => {
	// 	try {
	// 		const result = await ImagePicker.launchImageLibraryAsync();
	// 		if (!result.canceled) {
	// 			setImage(result.assets[0].uri);
	// 		}
	// 	} catch (error) {
	// 		console.log('Error on get Image', error);
	// 	}
	// };

	return (
		<View style={styles.container}>
			{/* <Button title="Select Image" onPress={getImage} />

			<Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> */}
			<ImageInput image={image} setImage={setImage} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
