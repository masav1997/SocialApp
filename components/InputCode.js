import * as React from 'react';
import { Text, TextInput, View } from 'react-native';

const labelStyle = {
	fontSize: 13,
	color: '#9DA2A5',
	fontWeight: '600',
	textAlign: 'left',
	marginTop: 20,
};

const inputStyle = {
	fontSize: 15,
	color: '#151522',
	fontWeight: '500',
	textAlign: 'center',
	marginTop: 5,
	width: '100%',
	height: 'auto',
	padding: 11,
	borderRadius: 10,
	backgroundColor: '#ECF3F7',
};

export default class InputCode extends React.Component {
	render() {
		const { label, placeholder, keyboardType } = this.props;
		return (
			<View>
				<Text style={labelStyle}>{label}</Text>
				<TextInput
					style={inputStyle}
					placeholder={placeholder}
					keyboardType={keyboardType}
					maxLength={5}
					selectionColor="#1A2ECD"
				/>
			</View>
		);
	}
}
