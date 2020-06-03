import * as React from 'react';
import { Text, TextInput, View } from 'react-native';

const labelStyle = {
	fontSize: 13,
	color: '#9DA2A5',
	fontWeight: '600',
	textAlign: 'left',
	marginTop: 20,
};

export default class InputComment extends React.Component {
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
						paddingBottom: this.state.onClick ? 1 : 1,
						borderBottomWidth: this.state.onClick ? 2 : 2,
						borderBottomColor: this.state.onClick ? '#1A2ECD' : '#9DA2A5',
					}}
					placeholder={placeholder}
					placeholderTextColor='#9DA2A5'
					keyboardType={keyboardType}
					onChangeText={() => this.setState({ onClick: true })}
					multiline={true}
					selectionColor="#1A2ECD"
				/>
			</View>
		);
	}
}
