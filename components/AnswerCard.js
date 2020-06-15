import * as React from 'react';
import { View, Dimensions, StatusBar, Text, Image, TouchableOpacity, TextInput, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class AnswerCard extends React.Component {
	state = {
		switchValue: false,
		switchValue1: false,
		switchValue2: false,
		switchValue3: false,
		bool: false,
		answer: false,
	};

	toggleSwitch = (value) => {
		this.setState({ switchValue: value });
	};

	toggleSwitch1 = (value) => {
		this.setState({ switchValue1: value });
	};

	toggleSwitch2 = (value) => {
		this.setState({ switchValue2: value });
	};

	toggleSwitch3 = (value) => {
		this.setState({ switchValue3: value });
	};
	render() {
		const { onPress, onPress1 } = this.props;
		const viewStyle = {
			width: width - 30,
			height: 'auto',
			padding: 10,
			borderWidth: 1.5,
			borderColor: '#EFF4FC',
			borderRadius: 10,
			marginTop: 15,
			marginBottom: -10,
		};

		const viewStyle1 = {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf: 'flex-start',
			top: '10%',
		};

		const textStyle = {
			fontWeight: 'bold',
			fontSize: 9,
			textAlign: 'center',
		};

		const batteryStyle = {
			width: 32,
			height: 10,
			borderRadius: 2,
			borderColor: '#000',
			borderWidth: 0.5,
			alignItems: 'flex-start',
			justifyContent: 'center',
			padding: 1,
		};

		const batteryStyle1 = {
			width: '95%',
			height: 6,
			backgroundColor: '#000',
		};

		const viewStyle2 = {
			flex: 3,
			alignItems: 'center',
			justifyContent: 'center',
		};

		const viewStyle3 = {
			flexDirection: 'row',
			width: width,
			height: 'auto',
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 30,
			marginTop: -20,
		};

		const viewStyle4 = {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf: 'center',
		};

		const viewStyle5 = {
			flexDirection: 'row',
			width: width,
			height: 'auto',
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 30,
			marginTop: 5,
		};

		const viewStyle6 = {
			flexDirection: 'row',
			width: width,
			height: 'auto',
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 30,
			marginTop: 10,
		};

		const viewStyle7 = {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf: 'center',
			marginBottom: 10,
		};
		return (
			<View style={{ width: '100%' }}>
				<View
					style={{
						flexDirection: 'row',
						width: '100%',
						justifyContent: 'flex-start',
						marginBottom: 5,
					}}
				>
					{this.state.bool ? (
						<View
							style={{
								height: 39,
								backgroundColor: '#ECF3F7',
								borderRadius: 10,
								flex: 3,
								alignSelf: 'center',
								marginRight: 10,
								fontSize: 16,
								flexDirection: 'row',
								marginTop: 10,
								paddingLeft: 5
							}}
						>
							<TextInput
								placeholderTextColor="#9DA2A5"
								placeholder="Комментарий"
								selectionColor="#1A2ECD"
								multiline={true}
								style={{ fontSize: 16, flex: 2, marginRight: 20, marginTop: Platform.OS === 'android' ? 0 : 5 }}
							/>
							<TouchableOpacity
								style={{
									width: '100%',
									flex: 1,
									alignSelf: 'center',
									height: 39,
									backgroundColor: '#1A2ECD',
									borderTopRightRadius: 10,
									borderBottomRightRadius: 10,
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Text
									style={{
										fontSize: 13,
										color: 'white',
										fontWeight: '600',
										textAlign: 'center',
									}}
								>
									Отправить
								</Text>
							</TouchableOpacity>
						</View>
					) : (
						<TextInput
						style={{
							width: '100%',
							height: 39,
							backgroundColor: '#ECF3F7',
							borderRadius: 10,
							marginTop: 10,
							fontSize: 16,
							paddingLeft: 5
						}}
						placeholder="Комментарий"
						placeholderTextColor="#9DA2A5"
						selectionColor="#1A2ECD"
						onChangeText={() => this.setState({ bool: !this.state.bool })}
					/>
					)}
				</View>
				<View style={{ flexDirection: 'row', width: '100%', marginBottom: 10 }}>
					<TouchableOpacity
						onPress={onPress}
						style={{ flexDirection: 'row', width: '40%', alignItems: 'center' }}
					>
						<Image
							source={require('../assets/icons/email.png')}
							style={{ width: 20, height: 20, marginRight: 5 }}
						/>

						<Text
							style={{
								fontSize: 13,
								color: '#1A2ECD',
								width: 'auto',
								fontWeight: 'normal',
								textAlign: 'left',
								flex: 1,
							}}
						>
							Упомянуть
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={onPress}
						style={{ flexDirection: 'row', width: '60%', alignItems: 'center' }}
					>
						<Image
							source={require('../assets/icons/attach.png')}
							style={{ width: 20, height: 20, marginRight: 5, tintColor: '#1A2ECD' }}
						/>

						<Text
							style={{
								fontSize: 13,
								color: '#1A2ECD',
								width: 'auto',
								fontWeight: 'normal',
								textAlign: 'left',
								flex: 2,
							}}
						>
							Прикрепить фото
						</Text>
					</TouchableOpacity>
					<View />
				</View>
				<TouchableOpacity>
					<View style={{ flexDirection: 'row', width: '100%' }}>
						<Image
							source={require('../assets/icons/avatar2.png')}
							style={{ width: 24, height: 24, borderRadius: 24 }}
						/>
						<View style={{ flex: 2, alignSelf: 'center' }}>
							<Text
								style={{
									fontSize: 13,
									color: '#0C0D0B',
									fontWeight: '500',
									textAlign: 'left',
									marginLeft: 5,
									marginBottom: 2,
								}}
							>
								Ted M.
							</Text>
						</View>
						<View style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'row' }}>
							<Text
								style={{
									fontSize: 13,
									color: '#BBC5D0',
									fontWeight: 'normal',
									alignSelf: 'flex-end',
									marginRight: 10,
									alignSelf: 'center',
								}}
							>
								18 Янв 2020 23:45
							</Text>
						</View>
					</View>
					<View
						style={{
							flexDirection: 'row',
							flexWrap: 'wrap',
							width: '100%',
							marginTop: 5,
						}}
					>
						<Text
							style={{
								fontSize: 15,
								color: '#0C0D0B',
								fontWeight: 'normal',
								textAlign: 'left',
								marginLeft: 29,
							}}
						>
							Когда будет обновление программы?
						</Text>
					</View>
				</TouchableOpacity>
				<View style={{ padding: 15, borderLeftWidth: 2.5, borderLeftColor: '#EFF4FC' }}>
					<TouchableOpacity onPress={() => this.setState({ answer: !this.state.answer })}>
						<View style={{ flexDirection: 'row', width: '100%' }}>
							<Image
								source={require('../assets/icons/avatar2.png')}
								style={{ width: 24, height: 24, borderRadius: 24 }}
							/>
							<View style={{ flex: 2, alignSelf: 'center' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#0C0D0B',
										fontWeight: '500',
										textAlign: 'left',
										marginLeft: 5,
									}}
								>
									Редактор
								</Text>
								<Text
									style={{
										fontSize: 13,
										color: '#05C53B',
										fontWeight: '500',
										textAlign: 'left',
										marginLeft: 5,
										marginBottom: 2,
									}}
								>
									Создатель
								</Text>
							</View>
							<View style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'row' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#BBC5D0',
										fontWeight: 'normal',
										alignSelf: 'flex-end',
										marginRight: 10,
										alignSelf: 'center',
									}}
								>
									18 Янв 2020 23:45
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								flexWrap: 'wrap',
								width: '100%',
								marginTop: 5,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									marginLeft: 29,
								}}
							>
								В ближайшее время мы планируем выпустить новую версию нашего приложения.
							</Text>
						</View>
					</TouchableOpacity>
					{this.state.answer && (
						<View>
							<View
								style={{
									height: 40,
									padding: Platform.OS === 'android' ? 10 : 15,
									backgroundColor: '#F1F4FC',
									borderRadius: 10,
									flex: 3,
									alignSelf: 'center',
									marginRight: 10,
									paddingTop: Platform.OS === 'android' ? null : 10,
									fontSize: 16,
									flexDirection: 'row',
									marginLeft: 29,
									marginTop: 10,
								}}
							>
								<TextInput
									placeholderTextColor="#9DA2A5"
									placeholder="Комментарий"
									selectionColor="#1A2ECD"
									multiline={true}
									style={{ fontSize: 16, flex: 2, marginRight: 20 }}
								/>
								<TouchableOpacity
									style={{
										width: '100%',
										flex: 1,
										alignSelf: 'center',
										height: 39,
										margin: Platform.OS === 'android' ? -10 : -15,
										marginTop: Platform.OS === 'android' ? null : -10,
										backgroundColor: '#1A2ECD',
										borderTopRightRadius: 10,
										borderBottomRightRadius: 10,
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Text
										style={{
											fontSize: 13,
											color: 'white',
											fontWeight: '600',
											textAlign: 'center',
										}}
									>
										Отправить
									</Text>
								</TouchableOpacity>
							</View>
							<View style={{ flexDirection: 'row', width: '100%', marginBottom: 10, marginLeft: 29, marginTop: 5 }}>
								<TouchableOpacity
									onPress={onPress}
									style={{ flexDirection: 'row', width: '40%', alignItems: 'center' }}
								>
									<Image
										source={require('../assets/icons/email.png')}
										style={{ width: 20, height: 20, marginRight: 5 }}
									/>

									<Text
										style={{
											fontSize: 13,
											color: '#1A2ECD',
											width: 'auto',
											fontWeight: 'normal',
											textAlign: 'left',
											flex: 1,
										}}
									>
										Упомянуть
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={onPress}
									style={{ flexDirection: 'row', width: '60%', alignItems: 'center' }}
								>
									<Image
										source={require('../assets/icons/attach.png')}
										style={{ width: 20, height: 20, marginRight: 5, tintColor: '#1A2ECD' }}
									/>

									<Text
										style={{
											fontSize: 13,
											color: '#1A2ECD',
											width: 'auto',
											fontWeight: 'normal',
											textAlign: 'left',
											flex: 2,
										}}
									>
										Прикрепить фото
									</Text>
								</TouchableOpacity>
								<View />
							</View>
						</View>
					)}
					<View
						style={{
							padding: 15,
							borderLeftWidth: 2.5,
							borderLeftColor: '#EFF4FC',
							marginBottom: 10,
						}}
					>
						<View style={{ flexDirection: 'row', width: '100%' }}>
							<Image
								source={require('../assets/icons/avatar2.png')}
								style={{ width: 24, height: 24, borderRadius: 24 }}
							/>
							<View style={{ flex: 2, alignSelf: 'center' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#0C0D0B',
										fontWeight: '500',
										textAlign: 'left',
										marginLeft: 5,
										marginBottom: 2,
									}}
								>
									Ted M.
								</Text>
							</View>
							<View style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'row' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#BBC5D0',
										fontWeight: 'normal',
										alignSelf: 'flex-end',
										marginRight: 10,
										alignSelf: 'center',
									}}
								>
									18 Янв 2020 23:45
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								flexWrap: 'wrap',
								width: '100%',
								marginTop: 5,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#0C0D0B',
									fontWeight: 'normal',
									textAlign: 'left',
									marginLeft: 29,
								}}
							>
								Спасибо за ответ. Буду ждать с нетерпением.
							</Text>
							<TouchableOpacity
								style={{ flexDirection: 'row', width: '100%', marginTop: 5, marginLeft: 29 }}
								onPress={onPress1}
							>
								<Image
									source={require('../assets/icons/message.png')}
									style={{ width: 16, height: 16, marginRight: 5 }}
								/>

								<Text
									style={{
										fontSize: 13,
										color: '#1A2ECD',
										width: 'auto',
										fontWeight: 'normal',
										textAlign: 'left',
										flex: 1,
									}}
								>
									Еще комментарии
								</Text>
								<View />
							</TouchableOpacity>
						</View>
					</View>
					<View style={{ flexDirection: 'row', width: '100%' }}>
						<Image
							source={require('../assets/icons/avatar2.png')}
							style={{ width: 24, height: 24, borderRadius: 24 }}
						/>
						<View style={{ flex: 2, alignSelf: 'center' }}>
							<Text
								style={{
									fontSize: 13,
									color: '#0C0D0B',
									fontWeight: '500',
									textAlign: 'left',
									marginLeft: 5,
									marginBottom: 2,
								}}
							>
								Mark E.
							</Text>
						</View>
						<View style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'row' }}>
							<Text
								style={{
									fontSize: 13,
									color: '#BBC5D0',
									fontWeight: 'normal',
									alignSelf: 'flex-end',
									marginRight: 10,
									alignSelf: 'center',
								}}
							>
								18 Янв 2020 23:45
							</Text>
						</View>
					</View>
					<View
						style={{
							flexDirection: 'row',
							flexWrap: 'wrap',
							width: '100%',
							marginTop: 5,
						}}
					>
						<Text
							style={{
								fontSize: 15,
								color: '#0C0D0B',
								fontWeight: 'normal',
								textAlign: 'left',
								marginLeft: 29,
							}}
						>
							Меня тоже интересует вопрос этот вопрос.
						</Text>
					</View>
				</View>
			</View>
		);
	}
}
