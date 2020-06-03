import * as React from 'react';
import { View, TouchableOpacity, Image, Text, ImageBackground } from 'react-native';

const cardStyle = {
	width: 246,
	height: 117,
	backgroundColor: '#ECF3F7',
	borderRadius: 10,
	marginLeft: 10,
	padding: 15,
};

const titleTextStyle = {
	fontSize: 13,
	fontWeight: '600',
	color: '#9DA2A5',
};

const approvalImageStyle = {
	width: 15,
	height: 15,
	alignSelf: 'center',
	marginRight: 4,
};

const descriptionTextStyle = {
	fontSize: 13,
	fontWeight: '500',
	color: '#151522',
	alignSelf: 'flex-start',
};

export default class CardWithoutBg extends React.Component {
	render() {
		const { onPress, statusImg, statusColor, statusTitle, numDoc, numDocColor, description, title } = this.props;
		return (
			<TouchableOpacity style={cardStyle} onPress={onPress}>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1 }}>
						<Text style={titleTextStyle}>{title}</Text>
					</View>
					<TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
						<Image source={statusImg} style={approvalImageStyle} />
						<Text
							style={{
								fontSize: 11,
								fontWeight: '600',
								color: statusColor,
								alignSelf: 'center',
							}}
						>
							{statusTitle}
						</Text>
					</TouchableOpacity>
				</View>
				<Text
					style={{
						fontSize: 22,
						fontWeight: 'bold',
						color: numDocColor,
						alignSelf: 'flex-start',
					}}
				>
					{numDoc}
				</Text>
				<Text style={descriptionTextStyle}>{description}</Text>
			</TouchableOpacity>
		);
	}
}
