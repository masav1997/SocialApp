import * as React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

const touchButtonStyle = {
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'flex-end',
};

const buttonImgStyle = {
	width: 20,
	height: 20,
	alignSelf: 'center',
	marginRight: 7,
};

const buttonTextStyle = {
	fontSize: 13,
	fontWeight: '500',
	color: '#1A2ECD',
	alignSelf: 'center',
};

const titleTextStyle = {
	fontSize: 18,
	fontWeight: 'bold',
	color: '#151522',
};

export default class TitleCard extends React.Component {
	render() {
		const { title, onPress, buttonText } = this.props;
		return (
			<View style={{ flexDirection: 'row' }}>
				<View style={{ flex: 1 }}>
					<Text style={titleTextStyle}>{title}</Text>
				</View>
				<TouchableOpacity style={touchButtonStyle} onPress={onPress}>
					<Image source={require('../../assets/icons/add.png')} style={buttonImgStyle} />
					<Text style={buttonTextStyle}>{buttonText}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
