import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Title from '../components/Title';
import InputCode from '../components/InputCode';
import Button from '../components/Button';

const { width } = Dimensions.get('window');

const cardStyle = {
	flexDirection: 'row',
	width: '100%',
	height: '100%',
	backgroundColor: '#FFF',
	borderTopLeftRadius: 30,
	borderTopRightRadius: 30,
	paddingHorizontal: 20,
	paddingTop: 30,
};

const subtitleStyle = {
	fontSize: 16,
	color: '#151522',
	fontWeight: '500',
	textAlign: 'left',
	marginTop: 10,
};

const linkTextStyle = {
	color: '#1A2ECD',
	fontWeight: '600',
	fontSize: 13,
};

const downViewStyle = {
	alignSelf: 'flex-end',
	position: 'absolute',
	width: width,
	paddingHorizontal: 20,
};

export default class AuthorizationCode extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<View style={cardStyle}>
					<View style={{ alignSelf: 'flex-start' }}>
						<Title Title="Авторизация в приложении" />
						<Text style={subtitleStyle}>
							Введите ваш номер телефона, на который будет выслано смс с кодом
						</Text>
						<View style={{ paddingHorizontal: 36 }}>
							<InputCode keyboardType="number-pad" />
						</View>
					</View>
					<View style={downViewStyle}>
						<TouchableOpacity style={{ alignSelf: 'center' }}>
							<Text style={linkTextStyle}>Выслать повторно</Text>
						</TouchableOpacity>
						<Button Title="Авторизироваться" onPress={() => this.props.navigation.navigate('Profile')} />
					</View>
				</View>
			</SafeAreaView>
		);
	}
}
