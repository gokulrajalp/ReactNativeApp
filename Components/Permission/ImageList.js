import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInput from './ImageInput';

export default function ImageList({
	imageUris = [],
	onRemoveImage,
	onAddImage,
}) {
	return (
		<View style={styles.container}>
			{imageUris.map((uri, i) => {
				<ImageInput image={uri} key={i} setImage={() => onRemoveImage(uri)} />;
			})}
			<ImageInput />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
