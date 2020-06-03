import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, TextInput } from 'react-native';

import Button from '../components/Button';
import Title from '../components/Title';
import Input from '../components/Input';

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

const titleStyle = {
	fontSize: 18,
	color: '#151522',
	fontWeight: 'bold',
	textAlign: 'left',
};

const subtitleStyle = {
	fontSize: 16,
	color: '#151522',
	fontWeight: '500',
	textAlign: 'left',
	marginTop: 10,
};

const labelStyle = {
	fontSize: 13,
	color: '#9DA2A5',
	fontWeight: '600',
	textAlign: 'left',
	marginTop: 20,
};

const inputStyle = {
	fontSize: 15,
	color: '#9DA2A5',
	fontWeight: 'normal',
	textAlign: 'left',
	marginTop: 5,
	width: '100%',
	height: 'auto',
	padding: 11,
	borderRadius: 10,
	backgroundColor: '#ECF3F7',
};

const textStyle = {
	fontSize: 13,
	color: '#151522',
	fontWeight: 'normal',
	textAlign: 'center',
};

const textLinkStyle = {
	color: '#1A2ECD',
	fontWeight: '500',
};

const downViewStyle = {
	alignSelf: 'flex-end',
	position: 'absolute',
	width: width,
	paddingHorizontal: 20,
};

const buttonStyle = {
	width: width,
	height: 60,
	alignSelf: 'center',
	marginTop: 40,
	backgroundColor: '#1A2ECD',
	padding: 19,
};

const buttonTextStyle = {
	fontSize: 18,
	color: '#FFFFFF',
	fontWeight: '600',
	textAlign: 'center',
};

export default class Authorization extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<View style={cardStyle}>
					<View style={{ alignSelf: 'flex-start' }}>
						<Title Title="Авторизация в приложении" />
						<Text style={subtitleStyle}>
							Введите ваш номер телефона, на который будет выслано смс с кодом
						</Text>
						<Input label="Номер телефона" placeholder="+7 (___) ___-__-__" keyboardType="phone-pad" />
					</View>
					<View style={downViewStyle}>
						<Text style={textStyle}>
							При нажатии на кнопку “Авторизоваться” вы соглашаетесь с{' '}
							<Text style={textLinkStyle}>правилами использования приложения </Text>и{' '}
							<Text style={textLinkStyle}>политикой конфиденциальности</Text>
						</Text>
						<Button
							Title="Получить код"
							onPress={() => this.props.navigation.navigate('AuthorizationCode')}
						/>
					</View>
				</View>
			</SafeAreaView>
		);
	}
}
