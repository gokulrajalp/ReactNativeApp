import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
	Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function ImageInput({ image, setImage }) {
	const handlePress = () => {
		if (!image) {
			getImage();
		} else {
			Alert.alert('Delete', 'Are you sure delete!', [
				{ text: 'Yes', onPress: () => setImage(null) },
				{ text: 'No' },
			]);
		}
	};

	const getImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			if (!result.canceled) {
				setImage(result.assets[0].uri);
			}
		} catch (error) {
			console.log('Error on get Image', error);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!image && (
					<MaterialCommunityIcons name="camera" size={40} color="red" />
				)}
				{image && <Image source={{ uri: image }} style={styles.Image} />}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: 'colors.light',
		borderRadius: 15,
		height: 100,
		width: 100,
		justifyContent: 'center',
	},
	Image: {
		height: '100%',
		width: '100%',
	},
});
