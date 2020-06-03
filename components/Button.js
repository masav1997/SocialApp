import * as React from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const buttonStyle = {
	width: width,
	height: 60,
	alignSelf: 'center',
	marginTop: 40,
	backgroundColor: '#1A2ECD',
	padding: 19,
};

const buttonTextStyle = {
	fontSize: 18,
	color: '#FFFFFF',
	fontWeight: '600',
	textAlign: 'center',
};

export default class Button extends React.Component {
	render() {
		const { onPress, Title } = this.props;
		return (
			<TouchableOpacity style={buttonStyle} onPress={onPress}>
				<Text style={buttonTextStyle}>{Title}</Text>
			</TouchableOpacity>
		);
	}
}
