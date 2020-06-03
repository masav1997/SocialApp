import * as React from 'react';
import { View, Text, Image } from 'react-native';

const viewStyle = {
	flexDirection: 'row',
	width: '100%',
	alignItems: 'center',
	marginTop: 10,
};

const avatarStyle = {
	width: 24,
	height: 24,
	borderRadius: 24,
};

const titleStyle = {
	fontSize: 13,
	color: '#0C0D0B',
	fontWeight: 'normal',
	textAlign: 'left',
	marginLeft: 5,
	marginBottom: 2,
};

const dataStyle = {
	fontSize: 13,
	color: '#9DA2A5',
	fontWeight: '600',
	textAlign: 'left',
	marginLeft: 5,
};

const summaStyle = {
	fontSize: 13,
	color: '#05C53B',
	fontWeight: '600',
	textAlign: 'left',
	marginLeft: 5,
	flex: 1,
};

export default class HistoryCard extends React.Component {
	render() {
		const { avatar, title, data, summa } = this.props;
		return (
			<View style={viewStyle}>
				<Image source={avatar} style={avatarStyle} />
				<View style={{ flexDirection: 'column', flex: 3 }}>
					<Text style={titleStyle}>{title}</Text>
					<Text style={dataStyle}>{data}</Text>
				</View>
				<Text style={summaStyle}>{summa}</Text>
			</View>
		);
	}
}
