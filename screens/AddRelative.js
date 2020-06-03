import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, Image, ImageBackground } from 'react-native';

import Button from '../components/Button';
import Title from '../components/Title';
import Input from '../components/Input';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import InputRelative from '../components/InputRelative';
import InputInfo from '../components/InputInfo';

const { width, height } = Dimensions.get('window');

const cardStyle = {
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
	width: width,
	paddingHorizontal: 20,
	marginTop: 10,
	marginLeft: -20,
};

const buttonStyle = {
	width: width,
	height: 60,
	alignSelf: 'center',
	marginTop: 40,
	backgroundColor: '#1A2ECD',
	padding: 19,
};

const linkTextStyle = {
	color: '#1A2ECD',
	fontWeight: '600',
	fontSize: 13,
};

export default class AddRelative extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<ScrollView style={{ height: '100%', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
					<View style={cardStyle}>
						<View style={{ alignSelf: 'flex-start' }}>
							<View style={{ flexDirection: 'row', height: 32, marginBottom: 10 }}>
								<TouchableOpacity style={{ height: 32 }} onPress={() => this.props.navigation.goBack()}>
									<Image
										source={require('../assets/icons/back.png')}
										style={{ width: 32, height: 32, alignSelf: 'center' }}
									/>
								</TouchableOpacity>
								<View style={{ flex: 8, alignSelf: 'center', width: '100%' }}>
									<Text
										style={{
											fontSize: 13,
											color: '#151522',
											fontWeight: 'bold',
											textAlign: 'center',
											alignSelf: 'center',
										}}
									>
										Введите номер телефона вашего родственника в системе
									</Text>
								</View>
								<View style={{ flex: 1 }} />
							</View>
							<Text
								style={{
									fontSize: 13,
									color: '#9DA2A5',
									fontWeight: '500',
									textAlign: 'center',
									alignSelf: 'center',
								}}
							>
								Ему в приложении будет отправлено уведомление о том, что вы хотите добавить его как
								вашего родственника
							</Text>
							<InputRelative
								label="Номер телефона"
								placeholder="+7 (540) 840-10-84"
								keyboardType="number-pad"
								button="Выбрать из контактов"
							/>
							<InputInfo
								label="Кем вы приходитесь пользователю"
								placeholder="Сестра"
								keyboardType="default"
							/>
						</View>
						<View style={downViewStyle}>
							<Button
								Title="Отправить приглашение"
								onPress={() => this.props.navigation.goBack()}
							/>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
