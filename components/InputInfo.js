import * as React from 'react';
import { Text, TextInput, View } from 'react-native';

const labelStyle = {
	fontSize: 13,
	color: '#9DA2A5',
	fontWeight: '600',
	textAlign: 'left',
	marginTop: 20,
};

export default class InputInfo extends React.Component {
	state = {
		onClick: false,
	};
	render() {
		const { label, placeholder, keyboardType } = this.props;
		return (
			<View>
				<Text style={labelStyle}>{label}</Text>
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
					}}
					placeholder={placeholder}
					placeholderTextColor='#151522'
					keyboardType={keyboardType}
					onChangeText={() => this.setState({ onClick: true })}
					multiline={true}
					selectionColor="#1A2ECD"
				/>
			</View>
		);
	}
}
