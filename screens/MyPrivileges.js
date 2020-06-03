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
	height: 'auto',
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

export default class MyPrivileges extends React.Component {
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
								Полученные
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
								<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
									<View style={{ flex: 2 }}>
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
									</View>
									<View style={{ flex: 2, flexDirection: 'row' }}>
										<Image
											source={require('../assets/icons/approval.png')}
											style={{ width: 15, height: 15, alignSelf: 'center', marginRight: 4 }}
										/>
										<Text
											style={{
												fontSize: 11,
												fontWeight: '600',
												color: '#16A085',
												alignSelf: 'center',
											}}
										>
											Подтвержден
										</Text>
									</View>
									<TouchableOpacity style={{ flex: 1, height: '100%', marginRight: -15 }}>
										<Image
											source={require('../assets/icons/dots.png')}
											style={{ width: 20, height: 20, alignSelf: 'flex-end', marginRight: 15 }}
										/>
									</TouchableOpacity>
								</View>
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
								<TouchableOpacity
									style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 5 }}
									onPress={() => this.props.navigation.navigate('Comments')}
								>
									<Image
										source={require('../assets/icons/comment.png')}
										style={{ width: 20, height: 20, alignSelf: 'flex-start' }}
									/>
									<Text
										style={{
											fontSize: 13,
											color: '#151522',
											fontWeight: '500',
											textAlign: 'left',
											alignSelf: 'flex-start',
										}}
									>
										154
									</Text>
								</TouchableOpacity>
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
								<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
									<View style={{ flex: 2 }}>
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
									</View>
									<View style={{ flex: 2, flexDirection: 'row' }}>
										<Image
											source={require('../assets/icons/time.png')}
											style={{ width: 15, height: 15, alignSelf: 'center', marginRight: 4 }}
										/>
										<Text
											style={{
												fontSize: 11,
												fontWeight: '600',
												color: '#F4D03F',
												alignSelf: 'center',
											}}
										>
											На проверке
										</Text>
									</View>
									<TouchableOpacity style={{ flex: 1, height: '100%', marginRight: -15 }}>
										<Image
											source={require('../assets/icons/dots.png')}
											style={{ width: 20, height: 20, alignSelf: 'flex-end', marginRight: 15 }}
										/>
									</TouchableOpacity>
								</View>
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
								<TouchableOpacity
									style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 5 }}
									onPress={() => this.props.navigation.navigate('Comments')}
								>
									<Image
										source={require('../assets/icons/comment.png')}
										style={{ width: 20, height: 20, alignSelf: 'flex-start' }}
									/>
									<Text
										style={{
											fontSize: 13,
											color: '#151522',
											fontWeight: '500',
											textAlign: 'left',
											alignSelf: 'flex-start',
										}}
									>
										154
									</Text>
								</TouchableOpacity>
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
								<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
									<View style={{ flex: 2 }}>
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
									</View>
									<View style={{ flex: 2, flexDirection: 'row' }}>
										<Image
											source={require('../assets/icons/approval.png')}
											style={{ width: 15, height: 15, alignSelf: 'center', marginRight: 4 }}
										/>
										<Text
											style={{
												fontSize: 11,
												fontWeight: '600',
												color: '#16A085',
												alignSelf: 'center',
											}}
										>
											Подтвержден
										</Text>
									</View>
									<TouchableOpacity style={{ flex: 1, height: '100%', marginRight: -15 }}>
										<Image
											source={require('../assets/icons/dots.png')}
											style={{ width: 20, height: 20, alignSelf: 'flex-end', marginRight: 15 }}
										/>
									</TouchableOpacity>
								</View>
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
								<TouchableOpacity
									style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 5 }}
									onPress={() => this.props.navigation.navigate('Comments')}
								>
									<Image
										source={require('../assets/icons/comment.png')}
										style={{ width: 20, height: 20, alignSelf: 'flex-start' }}
									/>
									<Text
										style={{
											fontSize: 13,
											color: '#151522',
											fontWeight: '500',
											textAlign: 'left',
											alignSelf: 'flex-start',
										}}
									>
										154
									</Text>
								</TouchableOpacity>
							</TouchableOpacity>

							<View style={{ flexDirection: 'row', marginTop: 30 }}>
								<View style={{ flex: 1, alignSelf: 'flex-start' }}>
									<Text
										style={{
											fontSize: 18,
											color: '#151522',
											fontWeight: 'bold',
											textAlign: 'left',
											alignSelf: 'flex-start',
										}}
									>
										Рекомендуемые
									</Text>
								</View>
								<TouchableOpacity style={{ flex: 1, alignSelf: 'center' }}>
									<Text
										style={{
											fontSize: 13,
											color: '#1A2ECD',
											fontWeight: '500',
											textAlign: 'right',
											alignSelf: 'flex-end',
										}}
									>
										Все
									</Text>
								</TouchableOpacity>
							</View>
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
								<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
									<View style={{ flex: 2, flexDirection: 'row' }}>
										<Image
											source={require('../assets/icons/time.png')}
											style={{ width: 15, height: 15, alignSelf: 'center', marginRight: 4 }}
										/>
										<Text
											style={{
												fontSize: 11,
												fontWeight: '600',
												color: '#F4D03F',
												alignSelf: 'center',
											}}
										>
											На проверке
										</Text>
									</View>
									<TouchableOpacity style={{ flex: 1, height: '100%', marginRight: -15 }}>
										<Image
											source={require('../assets/icons/dots.png')}
											style={{ width: 20, height: 20, alignSelf: 'flex-end', marginRight: 15 }}
										/>
									</TouchableOpacity>
								</View>
								<Text
									style={{
										fontSize: 13,
										color: '#9DA2A5',
										fontWeight: '600',
										textAlign: 'left',
										marginRight: 10,
									}}
								>
									Паспорт Рф, СНИЛС, ИНН и ещё 3
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
											Льгота по оплате коммунальных услуг
										</Text>
									</View>
									<View style={{ flex: 1, alignSelf: 'center' }}>
										<Image
											source={require('../assets/icons/tap.png')}
											style={{ width: 66, height: 66, alignSelf: 'flex-end' }}
										/>
									</View>
								</View>
								<TouchableOpacity
									style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 5 }}
									onPress={() => this.props.navigation.navigate('Comments')}
								>
									<Image
										source={require('../assets/icons/comment.png')}
										style={{ width: 20, height: 20, alignSelf: 'flex-start' }}
									/>
									<Text
										style={{
											fontSize: 13,
											color: '#151522',
											fontWeight: '500',
											textAlign: 'left',
											alignSelf: 'flex-start',
										}}
									>
										154
									</Text>
								</TouchableOpacity>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
