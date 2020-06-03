import * as React from 'react';
import { Text, Image, View } from 'react-native';

export default class Header extends React.Component {
	render() {
		const { data, statusImg, status, statusColor, title, image } = this.props;
		return (
				<View style={{ flexDirection: 'row', marginTop: 10 }}>
					<View style={{ flex: 3, alignSelf: 'flex-end' }}>
						<View style={{ flexDirection: 'row' }}>
							<Text
								style={{
									fontSize: 13,
									color: '#9DA2A5',
									fontWeight: '600',
									textAlign: 'left',
									marginRight: 10,
								}}
							>
								{data}
							</Text>
							<Image
								source={statusImg}
								style={{ width: 15, height: 15, alignSelf: 'center', marginRight: 4 }}
							/>
							<Text
								style={{
									fontSize: 11,
									fontWeight: '600',
									color: statusColor,
									alignSelf: 'center',
								}}
							>
								{status}
							</Text>
						</View>
						<Text style={{ fontSize: 22, color: '#151522', fontWeight: 'bold', marginTop: 5 }}>
							{title}
						</Text>
					</View>
					<View style={{ flex: 1 }}>
						<Image
							source={image}
							style={{ width: 66, height: 66, alignSelf: 'flex-end' }}
						/>
					</View>
				</View>
		);
	}
}
