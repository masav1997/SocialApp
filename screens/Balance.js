import * as React from 'react';
import { View, Dimensions, ScrollView, SafeAreaView, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal';

const { width } = Dimensions.get('window');

const cardStyle = {
	width: '100%',
	height: '100%',
	backgroundColor: '#FFF',
	borderTopLeftRadius: 30,
	borderTopRightRadius: 30,
	paddingTop: 19,
};

export default class Balance extends React.Component {
	state = {
		switchValue: false,
		isModalVisible: false,
		isModalVisible1: false,
		cat1: true,
		cat2: false,
		cat3: false,
		mon1: false,
		mon2: false,
		mon3: false,
		mon4: false,
		card1: true,
		card2: false,
	};

	toggleSwitch = (value) => {
		this.setState({ switchValue: value });
	};

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};

	toggleModal1 = () => {
		this.setState({ isModalVisible1: !this.state.isModalVisible1 });
	};

	toggleCat1 = () => {
		this.setState({ cat1: !this.state.cat1 });
	};

	toggleCat2 = () => {
		this.setState({ cat2: !this.state.cat2 });
	};

	toggleCat3 = () => {
		this.setState({ cat3: !this.state.cat3 });
	};

	toggleMon1 = () => {
		this.setState({ mon1: !this.state.mon1 });
	};

	toggleMon2 = () => {
		this.setState({ mon2: !this.state.mon2 });
	};

	toggleMon3 = () => {
		this.setState({ mon3: !this.state.mon3 });
	};

	toggleMon4 = () => {
		this.setState({ mon4: !this.state.mon4 });
	};

	toggleCard1 = () => {
		this.setState({ card1: !this.state.card1 });
	};

	toggleCard2 = () => {
		this.setState({ card2: !this.state.card2 });
	};
	render() {
		return (
			<SafeAreaView>
				<ScrollView style={{ height: '100%', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
				<View style={cardStyle}>
					<View style={{ flexDirection: 'row', height: 32, marginBottom: 10, paddingHorizontal: 20 }}>
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
								История средств
							</Text>
						</View>
						<View style={{ flex: 1 }} />
					</View>
					
						<View
							style={{
								width: width,
								height: 'auto',
								backgroundColor: 'white',
								marginTop: 0,
								alignSelf: 'center'
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									width: '100%',
									flex: 1,
									justifyContent: 'center',
									marginBottom: 20,
								}}
							>
								<Text
									style={{
										fontSize: 28,
										color: '#151522',
										fontWeight: 'bold',
										textAlign: 'center',
									}}
								>
									255,000.00 $
								</Text>
							</View>

							<View
								style={{
									flexDirection: 'row',
									width: '100%',
									flex: 1,
									justifyContent: 'center',
									marginBottom: 10,
									marginTop: 15,
								}}
							>
								<TouchableOpacity
									style={{
										width: '100%',
										alignSelf: 'center',
										flex: 1,
										height: 60,
										backgroundColor: '#1A2ECD',
										justifyContent: 'center',
										alignItems: 'center',
									}}
									onPress={this.toggleModal1}
								>
									<Text
										style={{
											fontSize: 17,
											color: 'white',
											fontWeight: '600',
											textAlign: 'center',
										}}
									>
										Пополнить
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										width: '100%',
										flex: 1,
										alignSelf: 'center',
										height: 60,
										backgroundColor: 'rgba(26, 46, 205, 0.15)',
										justifyContent: 'center',
										alignItems: 'center',
									}}
									onPress={this.toggleModal}
								>
									<Text
										style={{
											fontSize: 17,
											color: '#1A2ECD',
											fontWeight: '600',
											textAlign: 'center',
										}}
									>
										Вывести
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View
							style={{
								width: width,
								height: 'auto',
								padding: 20,
								paddingTop: 15,
								backgroundColor: 'white',
								marginTop: 0,
								alignSelf: 'center',
								marginBottom: 10,
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									width: '100%',
									flex: 1,
									justifyContent: 'flex-start',
									marginBottom: 25,
								}}
							>
								<ScrollView
									showsHorizontalScrollIndicator={false}
									horizontal={true}
									style={{
										flexDirection: 'row',
										width: '100%',
									}}
								>
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 11,
											paddingVertical: 11,
											borderRadius: 10,
											justifyContent: 'center',
											marginRight: 5,
											backgroundColor: 'rgba(26, 46, 205, 0.15)'
										}}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#1A2ECD',
												fontWeight: '600',
												textAlign: 'center',
											}}
										>
											Все
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 11,
											paddingVertical: 11,
											borderRadius: 10,
											justifyContent: 'center',
											marginRight: 5,
											backgroundColor: 'rgba(26, 46, 205, 0.15)'
										}}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#9DA2A5',
												fontWeight: '600',
												textAlign: 'center',
											}}
										>
											Пополнения
										</Text>
									</TouchableOpacity>

									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 11,
											paddingVertical: 11,
											borderRadius: 10,
											justifyContent: 'center',
											marginRight: 5,
											backgroundColor: 'rgba(26, 46, 205, 0.15)'
										}}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#9DA2A5',
												fontWeight: '600',
												textAlign: 'center',
											}}
										>
											Пожертвования
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 11,
											paddingVertical: 11,
											borderRadius: 10,
											justifyContent: 'center',
											marginRight: 5,
											backgroundColor: 'rgba(26, 46, 205, 0.15)'
										}}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#9DA2A5',
												fontWeight: '600',
												textAlign: 'center',
											}}
										>
											Пополнения
										</Text>
									</TouchableOpacity>
								</ScrollView>
							</View>
							<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
								<View
									style={{
										flexDirection: 'row',
										width: '100%',
										flex: 1,
										justifyContent: 'center',
										marginBottom: 15,
									}}
								>
									{this.state.cat1 ? (
										<TouchableOpacity
											style={{
												height: 38,
												width: 'auto',
												paddingHorizontal: 10,
												paddingVertical: 5,
												borderWidth: 1.5,
												borderColor: '#1A2ECD',
												borderRadius: 20,
												justifyContent: 'center',
												marginRight: 5,
											}}
											onPress={this.toggleCat1}
										>
											<Text
												style={{
													fontSize: 16,
													color: '#1A2ECD',
													fontWeight: '500',
													textAlign: 'center',
												}}
											>
												Все
											</Text>
										</TouchableOpacity>
									) : (
										<TouchableOpacity
											style={{
												height: 38,
												width: 'auto',
												paddingHorizontal: 10,
												paddingVertical: 5,
												borderWidth: 1.5,
												borderColor: '#9DA2A5',
												borderRadius: 20,
												justifyContent: 'center',
												marginRight: 5,
											}}
											onPress={this.toggleCat1}
										>
											<Text
												style={{
													fontSize: 16,
													color: '#9DA2A5',
													fontWeight: '500',
													textAlign: 'center',
												}}
											>
												Все
											</Text>
										</TouchableOpacity>
									)}
									{this.state.cat2 ? (
										<TouchableOpacity
											style={{
												height: 38,
												width: 'auto',
												paddingHorizontal: 10,
												paddingVertical: 5,
												borderWidth: 1.5,
												borderColor: '#1A2ECD',
												borderRadius: 20,
												justifyContent: 'center',
												marginRight: 5,
											}}
											onPress={this.toggleCat2}
										>
											<Text
												style={{
													fontSize: 16,
													color: '#1A2ECD',
													fontWeight: '500',
													textAlign: 'center',
												}}
											>
												Пополнения
											</Text>
										</TouchableOpacity>
									) : (
										<TouchableOpacity
											style={{
												height: 38,
												width: 'auto',
												paddingHorizontal: 10,
												paddingVertical: 5,
												borderWidth: 1.5,
												borderColor: '#9DA2A5',
												borderRadius: 20,
												justifyContent: 'center',
												marginRight: 5,
											}}
											onPress={this.toggleCat2}
										>
											<Text
												style={{
													fontSize: 16,
													color: '#9DA2A5',
													fontWeight: '500',
													textAlign: 'center',
												}}
											>
												Пополнения
											</Text>
										</TouchableOpacity>
									)}
									{this.state.cat3 ? (
										<TouchableOpacity
											style={{
												height: 38,
												width: 'auto',
												paddingHorizontal: 10,
												paddingVertical: 5,
												borderWidth: 1.5,
												borderColor: '#1A2ECD',
												borderRadius: 20,
												justifyContent: 'center',
												marginRight: 5,
											}}
											onPress={this.toggleCat3}
										>
											<Text
												style={{
													fontSize: 16,
													color: '#1A2ECD',
													fontWeight: '500',
													textAlign: 'center',
												}}
											>
												Пожертвования
											</Text>
										</TouchableOpacity>
									) : (
										<TouchableOpacity
											style={{
												height: 38,
												width: 'auto',
												paddingHorizontal: 10,
												paddingVertical: 5,
												borderWidth: 1.5,
												borderColor: '#9DA2A5',
												borderRadius: 20,
												justifyContent: 'center',
												marginRight: 5,
											}}
											onPress={this.toggleCat3}
										>
											<Text
												style={{
													fontSize: 16,
													color: '#9DA2A5',
													fontWeight: '500',
													textAlign: 'center',
												}}
											>
												Пожертвования
											</Text>
										</TouchableOpacity>
									)}
								</View>
							</ScrollView>
							<View
								style={{
									width: '100%',
									height: '100%',
								}}
							>
								<View
									style={{
										flexDirection: 'row',
										width: '100%',
										alignItems: 'center',
										marginBottom: 15,
									}}
								>
									<Image
										source={require('../assets/icons/avatar2.png')}
										style={{ width: 24, height: 24, borderRadius: 24 }}
									/>
									<View style={{ flexDirection: 'column', flex: 3 }}>
										<Text
											style={{
												fontSize: 13,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'left',
												marginLeft: 5,
												marginBottom: 2,
											}}
										>
											Пожертвование от Константина
										</Text>
										<Text
											style={{
												fontSize: 13,
												color: '#9DA2A5',
												fontWeight: '600',
												textAlign: 'left',
												marginLeft: 5,
											}}
										>
											21.08.2020 23:45
										</Text>
									</View>
									<Text
										style={{
											fontSize: 13,
											color: '#05C53B',
											fontWeight: '600',
											textAlign: 'left',
											marginLeft: 5,
											flex: 1,
										}}
									>
										+ 50.00$
									</Text>
								</View>

								<View
									style={{
										flexDirection: 'row',
										width: '100%',
										alignItems: 'center',
										marginBottom: 15,
									}}
								>
									<Image
										source={require('../assets/icons/avatar3.png')}
										style={{ width: 24, height: 24, borderRadius: 24 }}
									/>
									<View style={{ flexDirection: 'column', flex: 3 }}>
										<Text
											style={{
												fontSize: 13,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'left',
												marginLeft: 5,
												marginBottom: 2,
											}}
										>
											Пожертвование на Натуральносухая куртка от Ву...
										</Text>
										<Text
											style={{
												fontSize: 13,
												color: '#9DA2A5',
												fontWeight: '600',
												textAlign: 'left',
												marginLeft: 5,
											}}
										>
											21.08.2020 23:45
										</Text>
									</View>
									<Text
										style={{
											fontSize: 13,
											color: '#EE3E54',
											fontWeight: '600',
											textAlign: 'left',
											marginLeft: 5,
											flex: 1,
										}}
									>
										- 50.00$
									</Text>
								</View>

								<View
									style={{
										flexDirection: 'row',
										width: '100%',
										alignItems: 'center',
										marginBottom: 15,
									}}
								>
									<Image
										source={require('../assets/icons/mastercard.png')}
										style={{ width: 24, height: 24, borderRadius: 24 }}
									/>
									<View style={{ flexDirection: 'column', flex: 3 }}>
										<Text
											style={{
												fontSize: 13,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'left',
												marginLeft: 5,
												marginBottom: 2,
											}}
										>
											Пополнение с карты **** **** **** **89
										</Text>
										<Text
											style={{
												fontSize: 13,
												color: '#9DA2A5',
												fontWeight: '600',
												textAlign: 'left',
												marginLeft: 5,
											}}
										>
											21.08.2020 23:45
										</Text>
									</View>
									<Text
										style={{
											fontSize: 13,
											color: '#05C53B',
											fontWeight: '600',
											textAlign: 'left',
											marginLeft: 5,
											flex: 1,
										}}
									>
										+ 50.00$
									</Text>
								</View>

								<View
									style={{
										flexDirection: 'row',
										width: '100%',
										alignItems: 'center',
										marginBottom: 15,
									}}
								>
									<Image
										source={require('../assets/icons/avatar2.png')}
										style={{ width: 24, height: 24, borderRadius: 24 }}
									/>
									<View style={{ flexDirection: 'column', flex: 3 }}>
										<Text
											style={{
												fontSize: 13,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'left',
												marginLeft: 5,
												marginBottom: 2,
											}}
										>
											Пожертвование от Константина
										</Text>
										<Text
											style={{
												fontSize: 13,
												color: '#9DA2A5',
												fontWeight: '600',
												textAlign: 'left',
												marginLeft: 5,
											}}
										>
											21.08.2020 23:45
										</Text>
									</View>
									<Text
										style={{
											fontSize: 13,
											color: '#05C53B',
											fontWeight: '600',
											textAlign: 'left',
											marginLeft: 5,
											flex: 1,
										}}
									>
										+ 50.00$
									</Text>
								</View>

								<View
									style={{
										flexDirection: 'row',
										width: '100%',
										alignItems: 'center',
										marginBottom: 15,
									}}
								>
									<Image
										source={require('../assets/icons/avatar3.png')}
										style={{ width: 24, height: 24, borderRadius: 24 }}
									/>
									<View style={{ flexDirection: 'column', flex: 3 }}>
										<Text
											style={{
												fontSize: 13,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'left',
												marginLeft: 5,
												marginBottom: 2,
											}}
										>
											Пожертвование на Натуральносухая куртка от Ву...
										</Text>
										<Text
											style={{
												fontSize: 13,
												color: '#9DA2A5',
												fontWeight: '600',
												textAlign: 'left',
												marginLeft: 5,
											}}
										>
											21.08.2020 23:45
										</Text>
									</View>
									<Text
										style={{
											fontSize: 13,
											color: '#EE3E54',
											fontWeight: '600',
											textAlign: 'left',
											marginLeft: 5,
											flex: 1,
										}}
									>
										- 50.00$
									</Text>
								</View>
							</View>
						</View>
					<View style={{ marginBottom: '25%' }} />
					<Modal
						isVisible={this.state.isModalVisible1}
						style={{
							width: width,
							height: this.state.mon4 ? 346 : 285,
							backgroundColor: '#FFF',
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
							margin: 0,
							flex: 0,
							bottom: 0,
							textAlign: 'left',
							padding: 20,
							justifyContent: 'flex-end',
							position: 'absolute',
						}}
						onBackdropPress={this.toggleModal1}
					>
						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'flex-start',
								marginBottom: 20,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#262626',
									fontWeight: 'bold',
									textAlign: 'left',
									flex: 1,
								}}
							>
								Пополнение баланса
							</Text>
						</View>
						<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
							<View
								style={{
									flexDirection: 'row',
									width: '100%',
									justifyContent: 'flex-start',
								}}
							>
								{this.state.mon1 ? (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#1A2ECD',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon1}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#1A2ECD',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											50$
										</Text>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#9DA2A5',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon1}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#9DA2A5',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											50$
										</Text>
									</TouchableOpacity>
								)}
								{this.state.mon2 ? (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#1A2ECD',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon2}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#1A2ECD',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											100$
										</Text>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#9DA2A5',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon2}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#9DA2A5',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											100$
										</Text>
									</TouchableOpacity>
								)}
								{this.state.mon3 ? (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#1A2ECD',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon3}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#1A2ECD',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											200$
										</Text>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#9DA2A5',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon3}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#9DA2A5',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											200$
										</Text>
									</TouchableOpacity>
								)}
								{this.state.mon4 ? (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#1A2ECD',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon4}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#1A2ECD',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											Своя
										</Text>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#9DA2A5',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon4}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#9DA2A5',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											Своя
										</Text>
									</TouchableOpacity>
								)}
							</View>
						</ScrollView>
						{this.state.mon4 && (
							<View
								style={{
									flexDirection: 'row',
									width: '100%',
									justifyContent: 'flex-start',
									marginBottom: 15,
								}}
							>
								<View
									style={{
										height: 'auto',
										padding: Platform.OS === 'android' ? 10 : 15,
										backgroundColor: '#F1F4FC',
										borderRadius: 10,
										flex: 3,
										alignSelf: 'center',
										marginRight: 10,
										paddingTop: Platform.OS === 'android' ? null : 15,
										fontSize: 16,
									}}
								>
									<TextInput
										placeholderTextColor="#BBC5D0"
										placeholder="Собственная карта"
										keyboardType="number-pad"
										selectionColor="#5238F2"
										textContentType="creditCardNumber"
										maxLength={16}
										style={{ fontSize: 16 }}
									/>
								</View>
							</View>
						)}

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'flex-start',
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#9DA2A5',
									fontWeight: '500',
									textAlign: 'left',
									flex: 1,
								}}
							>
								Способ пополнения
							</Text>
						</View>

						<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
							<View
								style={{
									flexDirection: 'row',
									width: '100%',
									justifyContent: 'flex-start',
								}}
							>
								{this.state.card1 ? (
									<TouchableOpacity
										style={{
											height: 48,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#1A2ECD',
											borderRadius: 10,
											justifyContent: 'center',
											marginRight: 5,
											flexDirection: 'row',
										}}
										onPress={this.toggleCard1}
									>
										<Text
											style={{
												fontSize: 15,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'center',
												alignSelf: 'center',
											}}
										>
											Карта №1
										</Text>
										<Text
											style={{
												fontSize: 16,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'center',
												alignSelf: 'center',
												marginLeft: 10,
											}}
										>
											**** **** **** **48
										</Text>
										<Image
											source={require('../assets/icons/mastercard.png')}
											style={{ width: 25, height: 15, alignSelf: 'center', marginLeft: 10 }}
										/>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										style={{
											height: 48,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#9DA2A5',
											borderRadius: 10,
											justifyContent: 'center',
											marginRight: 5,
											flexDirection: 'row',
										}}
										onPress={this.toggleCard1}
									>
										<Text
											style={{
												fontSize: 15,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'center',
												alignSelf: 'center',
											}}
										>
											Карта №1
										</Text>
										<Text
											style={{
												fontSize: 16,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'center',
												alignSelf: 'center',
												marginLeft: 10,
											}}
										>
											**** **** **** **48
										</Text>
										<Image
											source={require('../assets/icons/mastercard.png')}
											style={{ width: 25, height: 15, alignSelf: 'center', marginLeft: 10 }}
										/>
									</TouchableOpacity>
								)}
								{this.state.card2 ? (
									<TouchableOpacity
										style={{
											height: 48,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#1A2ECD',
											borderRadius: 10,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleCard2}
									>
										<Text
											style={{
												fontSize: 15,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'center',
												alignSelf: 'center',
											}}
										>
											Счёт №1245623
										</Text>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										style={{
											height: 48,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#9DA2A5',
											borderRadius: 10,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleCard2}
									>
										<Text
											style={{
												fontSize: 15,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'center',
												alignSelf: 'center',
											}}
										>
											Счёт №1245623
										</Text>
									</TouchableOpacity>
								)}
							</View>
						</ScrollView>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'flex-start',
								marginBottom: 20,
								marginTop: 20,
							}}
						>
							<TouchableOpacity
								style={{
									width: width - 50,
									alignSelf: 'center',
									height: 50,
									backgroundColor: '#1A2ECD',
									borderRadius: 10,
									justifyContent: 'center',
									alignItems: 'center',
								}}
								onPress={this.toggleModal1}
							>
								<Text
									style={{
										fontSize: 17,
										color: 'white',
										fontWeight: '600',
										textAlign: 'center',
									}}
								>
									Пополнить
								</Text>
							</TouchableOpacity>
						</View>
					</Modal>
					<Modal
						isVisible={this.state.isModalVisible}
						style={{
							width: width,
							height: this.state.mon4 ? 346 : 285,
							backgroundColor: '#FFF',
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
							margin: 0,
							flex: 0,
							bottom: 0,
							textAlign: 'left',
							padding: 20,
							justifyContent: 'flex-end',
							position: 'absolute',
						}}
						onBackdropPress={this.toggleModal}
					>
						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'flex-start',
								marginBottom: 20,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#262626',
									fontWeight: 'bold',
									textAlign: 'left',
									flex: 1,
								}}
							>
								Вывод средств
							</Text>
						</View>
						<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
							<View
								style={{
									flexDirection: 'row',
									width: '100%',
									justifyContent: 'flex-start',
								}}
							>
								{this.state.mon1 ? (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#1A2ECD',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon1}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#1A2ECD',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											50$
										</Text>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#9DA2A5',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon1}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#9DA2A5',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											50$
										</Text>
									</TouchableOpacity>
								)}
								{this.state.mon2 ? (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#1A2ECD',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon2}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#1A2ECD',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											100$
										</Text>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#9DA2A5',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon2}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#9DA2A5',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											100$
										</Text>
									</TouchableOpacity>
								)}
								{this.state.mon3 ? (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#1A2ECD',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon3}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#1A2ECD',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											200$
										</Text>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#9DA2A5',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon3}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#9DA2A5',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											200$
										</Text>
									</TouchableOpacity>
								)}
								{this.state.mon4 ? (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#1A2ECD',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon4}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#1A2ECD',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											Своя
										</Text>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										style={{
											height: 38,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#9DA2A5',
											borderRadius: 20,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleMon4}
									>
										<Text
											style={{
												fontSize: 16,
												color: '#9DA2A5',
												fontWeight: '500',
												textAlign: 'center',
											}}
										>
											Своя
										</Text>
									</TouchableOpacity>
								)}
							</View>
						</ScrollView>
						{this.state.mon4 && (
							<View
								style={{
									flexDirection: 'row',
									width: '100%',
									justifyContent: 'flex-start',
									marginBottom: 15,
								}}
							>
								<View
									style={{
										height: 'auto',
										padding: Platform.OS === 'android' ? 10 : 15,
										backgroundColor: '#F1F4FC',
										borderRadius: 10,
										flex: 3,
										alignSelf: 'center',
										marginRight: 10,
										paddingTop: Platform.OS === 'android' ? null : 15,
										fontSize: 16,
									}}
								>
									<TextInput
										placeholderTextColor="#BBC5D0"
										placeholder="Собственная карта"
										keyboardType="number-pad"
										selectionColor="#5238F2"
										textContentType="creditCardNumber"
										maxLength={16}
										style={{ fontSize: 16 }}
									/>
								</View>
							</View>
						)}

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'flex-start',
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									color: '#9DA2A5',
									fontWeight: '500',
									textAlign: 'left',
									flex: 1,
								}}
							>
								Куда вывести
							</Text>
						</View>

						<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
							<View
								style={{
									flexDirection: 'row',
									width: '100%',
									justifyContent: 'flex-start',
								}}
							>
								{this.state.card1 ? (
									<TouchableOpacity
										style={{
											height: 48,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#1A2ECD',
											borderRadius: 10,
											justifyContent: 'center',
											marginRight: 5,
											flexDirection: 'row',
										}}
										onPress={this.toggleCard1}
									>
										<Text
											style={{
												fontSize: 15,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'center',
												alignSelf: 'center',
											}}
										>
											Карта №1
										</Text>
										<Text
											style={{
												fontSize: 16,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'center',
												alignSelf: 'center',
												marginLeft: 10,
											}}
										>
											**** **** **** **48
										</Text>
										<Image
											source={require('../assets/icons/mastercard.png')}
											style={{ width: 25, height: 15, alignSelf: 'center', marginLeft: 10 }}
										/>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										style={{
											height: 48,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#9DA2A5',
											borderRadius: 10,
											justifyContent: 'center',
											marginRight: 5,
											flexDirection: 'row',
										}}
										onPress={this.toggleCard1}
									>
										<Text
											style={{
												fontSize: 15,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'center',
												alignSelf: 'center',
											}}
										>
											Карта №1
										</Text>
										<Text
											style={{
												fontSize: 16,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'center',
												alignSelf: 'center',
												marginLeft: 10,
											}}
										>
											**** **** **** **48
										</Text>
										<Image
											source={require('../assets/icons/mastercard.png')}
											style={{ width: 25, height: 15, alignSelf: 'center', marginLeft: 10 }}
										/>
									</TouchableOpacity>
								)}
								{this.state.card2 ? (
									<TouchableOpacity
										style={{
											height: 48,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#1A2ECD',
											borderRadius: 10,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleCard2}
									>
										<Text
											style={{
												fontSize: 15,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'center',
												alignSelf: 'center',
											}}
										>
											Счёт №1245623
										</Text>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										style={{
											height: 48,
											width: 'auto',
											paddingHorizontal: 10,
											paddingVertical: 5,
											borderWidth: 1.5,
											borderColor: '#9DA2A5',
											borderRadius: 10,
											justifyContent: 'center',
											marginRight: 5,
										}}
										onPress={this.toggleCard2}
									>
										<Text
											style={{
												fontSize: 15,
												color: '#0C0D0B',
												fontWeight: 'normal',
												textAlign: 'center',
												alignSelf: 'center',
											}}
										>
											Счёт №1245623
										</Text>
									</TouchableOpacity>
								)}
							</View>
						</ScrollView>

						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								flex: 1,
								justifyContent: 'flex-start',
								marginBottom: 20,
								marginTop: 20,
							}}
						>
							<TouchableOpacity
								style={{
									width: width - 50,
									alignSelf: 'center',
									height: 50,
									backgroundColor: '#1A2ECD',
									borderRadius: 10,
									justifyContent: 'center',
									alignItems: 'center',
								}}
								onPress={this.toggleModal}
							>
								<Text
									style={{
										fontSize: 17,
										color: 'white',
										fontWeight: '600',
										textAlign: 'center',
									}}
								>
									Вывести
								</Text>
							</TouchableOpacity>
						</View>
					</Modal>
				</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
