import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import * as Yup from 'yup';
import { AppFormField, AppForm, SubmitButton } from './Forms/index';

const ValidationSchema = Yup.object().shape({
	Username: Yup.string().required().email().label('username'),
	Password: Yup.string().required().min(4).label('password'),
});

export default function Login({ navigation }) {
	return (
		<View style={[tw`flex-1 justify-center items-center `]}>
		//app form to submit and do submit action
			<AppForm
				initialValues={{ Username: '', Password: '' }}
				onSubmit={(values) =>
					navigation.navigate('Profile', { name: values.Username })
				}
				validationSchema={ValidationSchema}
			>
				<>
					<AppFormField name="Username" placeholder="User Name" />
					<AppFormField
						name="Password"
						placeholder="Password"
						secureTextEntry
					/>
					<SubmitButton />
				</>
			</AppForm>

			<Text onPress={() => navigation.navigate('ForgetPassword')}>
				Forget Password?
			</Text>

			<Text onPress={() => navigation.navigate('SignUp')}>
				New to Kalyani Motors?
			</Text>

			<StatusBar style="auto" />
		</View>
	);
}
