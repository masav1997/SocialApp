import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const viewStyle = {
	flexDirection: 'row',
	marginTop: 10,
	alignItems: 'center',
};

const titleTextStyle = {
	fontSize: 16,
	fontWeight: '500',
	color: '#151522',
	alignSelf: 'flex-start',
};

export default class Table extends React.Component {
	render() {
		const { title, statusColor, status } = this.props;
		return (
			<View style={viewStyle}>
				<View style={{ flex: 1 }}>
					<Text style={titleTextStyle}>{title}</Text>
				</View>
				<TouchableOpacity style={{ flex: 2, alignSelf: 'flex-end' }}>
					<Text
						style={{
							fontSize: 16,
							fontWeight: '600',
							color: statusColor,
							textAlign: 'right',
						}}
					>
						{status}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
