import * as React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

const avatarImgStyle = { width: 40, height: 40, borderRadius: 40 };

const labelTextStyle = {
	fontSize: 13,
	fontWeight: '600',
	color: '#9DA2A5',
	alignSelf: 'flex-start',
};

const nameTextStyle = {
	fontSize: 16,
	fontWeight: '500',
	color: '#151522',
	alignSelf: 'flex-start',
};

export default class CardRelative extends React.Component {
	render() {
		const { img, label, name } = this.props;
		return (
			<TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, marginRight: 30 }}>
				<View style={{ flex: 1, marginRight: 12 }}>
					<Image source={img} style={avatarImgStyle} />
				</View>
				<View style={{ flex: 1 }}>
					<Text style={labelTextStyle}>{label}</Text>
					<Text style={nameTextStyle}>{name}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
