import React from 'react';

import { useFormikContext } from 'formik';
import { Text, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function AppFormField({ name, ...otherProps }) {
	const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
	return (
		<>
			<TextInput
				style={[tw`rounded-full ml-2 justify-between`]}
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
				{...otherProps}
			/>
			<Text style={tw`text-red-500`}>
				{touched[name] ? errors[name] : null}
			</Text>
		</>
	);
}
