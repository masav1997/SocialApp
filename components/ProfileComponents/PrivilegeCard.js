import * as React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

const imgStyle = {
	width: 40,
	height: 40,
	alignSelf: 'flex-start',
	marginRight: 4,
};

const titleTextStyle = {
	fontSize: 13,
	fontWeight: '500',
	color: '#151522',
	alignSelf: 'flex-start',
};

const buttonTextStyle = {
	fontSize: 16,
	fontWeight: '600',
	color: '#1A2ECD',
	alignSelf: 'flex-start',
	marginTop: 10,
};

export default class PrivilegeCard extends React.Component {
	render() {
		const { onPress, img, textButton, title } = this.props;
		return (
			<View style={{ flexDirection: 'row', marginTop: 10 }}>
				<View style={{ flex: 1 }}>
					<Image source={img} style={imgStyle} />
				</View>
				<View style={{ flex: 5 }}>
					<Text style={titleTextStyle}>{title}</Text>
					<TouchableOpacity onPress={onPress}>
						<Text style={buttonTextStyle}>{textButton}</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
