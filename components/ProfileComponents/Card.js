import * as React from 'react';
import { View, TouchableOpacity, Image, Text, ImageBackground } from 'react-native';

const bgStyle = {
	width: 246,
	height: 'auto',
	padding: 15,
	paddingBottom: 20
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

export default class Card extends React.Component {
	state = {
		touch: false,
	};
	render() {
		const {
			onPress,
			statusImg,
			statusColor,
			statusTitle,
			numDoc,
			numDocColor,
			description,
			description1,
			title,
		} = this.props;
		return (
			<TouchableOpacity onPress={onPress}>
				<ImageBackground source={require('../../assets/icons/cardPassport.png')} style={bgStyle}>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<Text style={titleTextStyle}>{title}</Text>
						</View>
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
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
						</View>
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
					<TouchableOpacity onPress={() => this.setState({ touch: !this.state.touch })}>
						{this.state.touch ? (
							<Text style={descriptionTextStyle}>{description1}</Text>
						) : (
							<Text style={descriptionTextStyle}>{description}</Text>
						)}
					</TouchableOpacity>
				</ImageBackground>
			</TouchableOpacity>
		);
	}
}
