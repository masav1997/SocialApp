import * as React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

export default class Card extends React.Component {
	render() {
		const { onPress, statusImg, status, statusColor, title, typeImg, description, onPress1 } = this.props;
		return (
			<TouchableOpacity
				style={{
					width: '100%',
					height: 'auto',
					borderRadius: 10,
					backgroundColor: '#ECF3F7',
					padding: 15,
					marginTop: 15,
				}}
				onPress={onPress}
			>
				<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
					<View style={{ flex: 2, flexDirection: 'row' }}>
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
					<TouchableOpacity
						style={{ flex: 1, height: '100%', marginRight: -15 }}
						onPress={onPress1}
					>
						<Image
							source={require('../../assets/icons/message.png')}
							style={{ width: 20, height: 20, alignSelf: 'flex-end', marginRight: 15 }}
						/>
					</TouchableOpacity>
				</View>
				<Text style={{ fontSize: 13, fontWeight: '600', color: '#9DA2A5' }}>{description}</Text>
				<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 25 }}>
					<View style={{ flex: 3 }}>
						<Text
							style={{
								fontSize: 22,
								color: '#E55D87',
								fontWeight: 'bold',
								textAlign: 'left',
							}}
						>
							{title}
						</Text>
					</View>
					<View style={{ flex: 1, alignSelf: 'center' }}>
						<Image source={typeImg} style={{ width: 66, height: 66, alignSelf: 'flex-end' }} />
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}
