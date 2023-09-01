import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
// import * as Permissions from 'expo-permissions';

import * as ImagePicker from 'expo-image-picker';

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

	useEffect(() => {
		requestPermission();
	}, []);

	return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
	container: {},
});
