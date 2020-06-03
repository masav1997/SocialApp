import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const cardStyle = {
	width: 246,
	height: 'auto',
	backgroundColor: '#ECF3F7',
	borderRadius: 10,
	marginRight: 10,
	padding: 15,
};

const markTextStyle = {
	fontSize: 13,
	fontWeight: '600',
	color: '#9DA2A5',
	alignSelf: 'flex-start',
	marginTop: 5,
};

export default class FondCard extends React.Component {
	render() {
		const { onPress, title, titleColor, mark } = this.props;
		return (
			<TouchableOpacity style={cardStyle} onPress={onPress}>
				<Text
					style={{
						fontSize: 22,
						fontWeight: 'bold',
						color: titleColor,
						alignSelf: 'flex-start',
					}}
				>
					{title}
				</Text>
				<Text style={markTextStyle}>{mark}</Text>
			</TouchableOpacity>
		);
	}
}
