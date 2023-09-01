import React from 'react';

import { useFormikContext } from 'formik';
import { Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';
export default function SubmitButton() {
	const { handleSubmit } = useFormikContext();
	return (
		<Button style={[tw`rounded-full`]} title="Login" onPress={handleSubmit} />
	);
}
