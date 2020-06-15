import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';

import Button from '../components/Button';
import Title from '../components/Title';
import Input from '../components/Input';
import {} from 'react-native-gesture-handler';
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
	paddingVertical: 30,
	marginBottom: 50
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

export default class Notifications extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<ScrollView style={{ height: '100%', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
					<View style={cardStyle}>
						<View style={{ alignSelf: 'flex-start' }}>
							<Text
								style={{
									fontSize: 18,
									color: '#151522',
									fontWeight: 'bold',
									textAlign: 'left',
									alignSelf: 'flex-start',
								}}
							>
								Напоминания
							</Text>
							<TouchableOpacity
								style={{
									width: width - 40,
									height: 'auto',
									borderRadius: 10,
									backgroundColor: '#ECF3F7',
									padding: 15,
									marginTop: 15,
								}}
							>
								<Text
									style={{
										fontSize: 13,
										color: '#9DA2A5',
										fontWeight: '600',
										textAlign: 'left',
										marginRight: 10,
									}}
								>
									Родственник
								</Text>
								<TouchableOpacity style={{ flexDirection: 'row', marginTop: 9 }}>
									<View style={{ flex: 1, marginRight: 12 }}>
										<Image
											source={require('../assets/icons/avatar2.png')}
											style={{ width: 40, height: 40 }}
										/>
									</View>
									<View style={{ flex: 6 }}>
										<Text
											style={{
												fontSize: 13,
												fontWeight: '600',
												color: '#9DA2A5',
												alignSelf: 'flex-start',
											}}
										>
											Брат
										</Text>
										<Text
											style={{
												fontSize: 16,
												fontWeight: '500',
												color: '#151522',
												alignSelf: 'flex-start',
											}}
										>
											Камчатский Р.П
										</Text>
									</View>
								</TouchableOpacity>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#151522',
										alignSelf: 'flex-start',
										marginTop: 5,
									}}
								>
									Хочет добавить вас в свои родственники
								</Text>
								<View
									style={{
										flexDirection: 'row',
										width: '100%',
										alignItems: 'center',
										marginTop: 5,
									}}
								>
									<TouchableOpacity style={{ marginRight: 20 }}>
										<Text
											style={{
												fontSize: 13,
												fontWeight: '600',
												color: '#1A2ECD',
												alignSelf: 'flex-start',
											}}
										>
											Добавить
										</Text>
									</TouchableOpacity>
									<TouchableOpacity style={{ marginRight: 20 }}>
										<Text
											style={{
												fontSize: 13,
												fontWeight: '600',
												color: '#1A2ECD',
												alignSelf: 'flex-start',
											}}
										>
											Нет
										</Text>
									</TouchableOpacity>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									width: '100%',
									height: 'auto',
									borderRadius: 10,
									backgroundColor: '#ECF3F7',
									padding: 15,
									marginTop: 15,
								}}
							>
								<Text
									style={{
										fontSize: 13,
										color: '#9DA2A5',
										fontWeight: '600',
										textAlign: 'left',
										marginRight: 10,
									}}
								>
									Паспорт РФ
								</Text>
								<View
									style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 5 }}
								>
									<View style={{ flex: 3 }}>
										<Text
											style={{
												fontSize: 22,
												color: '#151522',
												fontWeight: 'bold',
												textAlign: 'left',
											}}
										>
											Обновите данные паспорта
										</Text>
									</View>
									<View style={{ flex: 1, alignSelf: 'center' }}>
										<Image
											source={require('../assets/icons/passport.png')}
											style={{ width: 66, height: 66, alignSelf: 'flex-end' }}
										/>
									</View>
								</View>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#151522',
										alignSelf: 'flex-start',
										marginTop: 5,
									}}
								>
									Сфотографируйте 1-ю и 3-ю страницы документа
								</Text>
								<TouchableOpacity style={{ marginRight: 20 }}>
									<Text
										style={{
											fontSize: 13,
											fontWeight: '600',
											color: '#1A2ECD',
											alignSelf: 'flex-start',
											marginTop: 5,
										}}
									>
										Обновить документ
									</Text>
								</TouchableOpacity>
							</TouchableOpacity>

							<Text
								style={{
									fontSize: 18,
									color: '#151522',
									fontWeight: 'bold',
									textAlign: 'left',
									alignSelf: 'flex-start',
									marginTop: 55,
								}}
							>
								Новые законы и льготы
							</Text>

							<TouchableOpacity
								style={{
									width: '100%',
									height: 'auto',
									borderRadius: 10,
									backgroundColor: '#ECF3F7',
									padding: 15,
									marginTop: 15,
								}}
								onPress={() => this.props.navigation.navigate('AboutPrivilege')}
							>
								<Text
									style={{
										fontSize: 13,
										color: '#9DA2A5',
										fontWeight: '600',
										textAlign: 'left',
										marginRight: 10,
									}}
								>
									до 18 мая 2024
								</Text>
								<View
									style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 5 }}
								>
									<View style={{ flex: 3 }}>
										<Text
											style={{
												fontSize: 22,
												color: '#E55D87',
												fontWeight: 'bold',
												textAlign: 'left',
											}}
										>
											Льгота по уплате гос.пошлины
										</Text>
									</View>
									<View style={{ flex: 1, alignSelf: 'center' }}>
										<Image
											source={require('../assets/icons/money.png')}
											style={{ width: 66, height: 66, alignSelf: 'flex-end' }}
										/>
									</View>
								</View>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									width: '100%',
									height: 'auto',
									borderRadius: 10,
									backgroundColor: '#ECF3F7',
									padding: 15,
									marginTop: 15,
								}}
								onPress={() => this.props.navigation.navigate('AboutPrivilege')}
							>
								<Text
									style={{
										fontSize: 13,
										color: '#9DA2A5',
										fontWeight: '600',
										textAlign: 'left',
										marginRight: 10,
									}}
								>
									до 18 мая 2024
								</Text>
								<View
									style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 5 }}
								>
									<View style={{ flex: 3 }}>
										<Text
											style={{
												fontSize: 22,
												color: '#FD8112',
												fontWeight: 'bold',
												textAlign: 'left',
											}}
										>
											Льгота на проезд в общественном транспорте
										</Text>
									</View>
									<View style={{ flex: 1, alignSelf: 'center' }}>
										<Image
											source={require('../assets/icons/bus.png')}
											style={{ width: 66, height: 66, alignSelf: 'flex-end' }}
										/>
									</View>
								</View>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									width: '100%',
									height: 'auto',
									borderRadius: 10,
									backgroundColor: '#ECF3F7',
									padding: 15,
									marginTop: 15,
								}}
								onPress={() => this.props.navigation.navigate('AboutPrivilege')}
							>
								<Text
									style={{
										fontSize: 13,
										color: '#9DA2A5',
										fontWeight: '600',
										textAlign: 'left',
										marginRight: 10,
									}}
								>
									до 18 мая 2024
								</Text>
								<View
									style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 5 }}
								>
									<View style={{ flex: 3 }}>
										<Text
											style={{
												fontSize: 22,
												color: '#5FC3E4',
												fontWeight: 'bold',
												textAlign: 'left',
											}}
										>
											Получение социальной помощи инвалидом
										</Text>
									</View>
									<View style={{ flex: 1, alignSelf: 'center' }}>
										<Image
											source={require('../assets/icons/pram.png')}
											style={{ width: 66, height: 66, alignSelf: 'flex-end' }}
										/>
									</View>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
