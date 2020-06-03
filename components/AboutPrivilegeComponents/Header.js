import * as React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

export default class Header extends React.Component {
	render() {
		const { onPress } = this.props;
		return (
			<View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingTop: 10 }}>
				<TouchableOpacity
					style={{ flex: 1, alignSelf: 'flex-start', height: 32 }}
					onPress={onPress}
				>
					<Image source={require('../../assets/icons/back.png')} style={{ width: 32, height: 32 }} />
				</TouchableOpacity>
				<View style={{ flex: 1, alignSelf: 'center', height: 35, justifyContent: 'center' }} />
			</View>
		);
	}
}
