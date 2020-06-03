import * as React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

const labelStyle = {
	fontSize: 13,
	color: '#9DA2A5',
	fontWeight: '600',
	textAlign: 'left',
	marginTop: 20,
};

export default class InputTopic extends React.Component {
	state = {
		onClick: false,
	};
	render() {
		const { label, placeholder, keyboardType, button } = this.props;
		return (
			<View>
				<View style={{ flexDirection: 'row' }}>
					<TextInput
						style={{
							fontSize: 15,
							color: '#151522',
							fontWeight: 'normal',
							textAlign: 'left',
							width: '100%',
							height: 'auto',
							paddingTop: 3,
							paddingBottom: this.state.onClick ? 1 : 3,
							borderBottomWidth: this.state.onClick ? 2 : 0,
							borderBottomColor: this.state.onClick ? '#1A2ECD' : null,
							flex: 2,
						}}
						placeholder={placeholder}
						placeholderTextColor="#9DA2A5"
						keyboardType={keyboardType}
						onChangeText={() => this.setState({ onClick: true })}
						multiline={true}
					/>
					<View
						style={{
							width: '100%',
							height: 'auto',
							paddingTop: 6,
							borderBottomWidth: this.state.onClick ? 2 : 0,
							borderBottomColor: this.state.onClick ? '#1A2ECD' : null,
							flex: 1,
						}}
					>
						<TouchableOpacity>
							<Text style={{ textAlign: 'right', fontSize: 13, fontWeight: '600', color: '#1A2ECD' }}>
								{button}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}
