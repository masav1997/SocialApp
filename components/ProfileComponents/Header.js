import * as React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

const viewStyle = {
	flexDirection: 'row',
	paddingHorizontal: 20,
	paddingTop: 20,
};

const avatarImgStyle = { width: 55, height: 55, borderRadius: 55 };

const touchEditStyle = {
	flex: 1,
	alignSelf: 'center',
	height: 35,
	justifyContent: 'center',
};

const editImgStyle = {
	width: 25,
	height: 25,
	alignSelf: 'flex-end',
};

const viewStyle1 = {
	paddingHorizontal: 20,
	marginTop: 15,
};

const nameTextStyle = {
	fontSize: 28,
	color: '#151522',
	fontWeight: 'bold',
	textAlign: 'left',
};

const viewStyle2 = {
	flexDirection: 'row',
	marginTop: 10,
};

const viewStyle3 = {
	flex: 1,
	alignSelf: 'flex-start',
};

const titleTableTextStyle = {
	fontSize: 13,
	color: '#9DA2A5',
	fontWeight: '600',
	textAlign: 'left',
};

const descTableTextStyle = {
	fontSize: 16,
	color: '#151522',
	fontWeight: '500',
	textAlign: 'left',
};

export default class Header extends React.Component {
	render() {
		const { avatar, onEditPress, name, title1, title2, data, city } = this.props;
		return (
			<View>
				<View style={viewStyle}>
					<View style={{ flex: 1, alignSelf: 'flex-start' }}>
						<Image source={avatar} style={avatarImgStyle} />
					</View>
					<TouchableOpacity style={touchEditStyle} onPress={onEditPress}>
						<Image source={require('../../assets/icons/edit.png')} style={editImgStyle} />
					</TouchableOpacity>
				</View>
				<View style={viewStyle1}>
					<Text style={nameTextStyle}>{name}</Text>
					<View style={viewStyle2}>
						<View style={viewStyle3}>
							<Text style={{ titleTableTextStyle }}>{title1}</Text>
							<Text style={descTableTextStyle}>{data}</Text>
						</View>
						<View style={viewStyle3}>
							<Text style={titleTableTextStyle}>{title2}</Text>
							<Text style={descTableTextStyle}>{city}</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
