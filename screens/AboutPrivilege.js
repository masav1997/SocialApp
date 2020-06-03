import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import Button from '../components/Button';
import Header from '../components/AboutPrivilegeComponents/Header';
import Card from '../components/AboutPrivilegeComponents/Card';

const { width, height } = Dimensions.get('window');

const cardStyle = {
	marginTop: 15,
	width: '100%',
	height: '100%',
	backgroundColor: '#FFF',
	borderTopLeftRadius: 30,
	borderTopRightRadius: 30,
	paddingHorizontal: 20,
	paddingVertical: 30,
	marginBottom: 130,
};

const downViewStyle = {
	width: width,
	paddingHorizontal: 20,
	marginLeft: -20,
	bottom: 10,
};

export default class AboutPrivilege extends React.Component {
	state = {
		onDrop1: false,
		onDrop2: false,
		onDrop3: false,
		onDrop4: false,
		onDrop5: false,
	};
	render() {
		return (
			<SafeAreaView>
				<Header onPress={() => this.props.navigation.goBack()} />
				<View style={{ paddingHorizontal: 20, marginTop: -10 }}>
					<Card
						data="до 18 мая 2024"
						statusImg={require('../assets/icons/approval.png')}
						status="Подтвержден"
						statusColor="#16A085"
						title="Льгота на проезд в общественном транспорте"
						image={require('../assets/icons//bus.png')}
					/>
					<TouchableOpacity
						style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 5, height: 21 }}
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
				</View>
				<ScrollView style={{ height: '100%', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
					<View style={cardStyle}>
						<TouchableOpacity
							style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 55 }}
							onPress={() => this.setState({ onDrop1: !this.state.onDrop1 })}
						>
							<View style={{ flex: 4 }}>
								<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#151522' }}>
									Данные документа
								</Text>
							</View>
							<View style={{ flex: 1, alignSelf: 'flex-end' }}>
								<Image
									source={
										this.state.onDrop1
											? require('../assets/icons/up.png')
											: require('../assets/icons/down.png')
									}
									style={{ height: 32, width: 32, alignSelf: 'flex-end' }}
								/>
							</View>
						</TouchableOpacity>
						{this.state.onDrop1 && (
							<View style={{ marginTop: -50, marginBottom: 55 }}>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Срок выполнения услуги:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									30 календ. дн.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Срок, в течение которого заявление о предоставлении услуги должно быть
									зарегистрировано:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									15 мин.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Максимальный срок ожидания в очереди при подаче заявления о предоставлении услуги
									лично:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									15 мин.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Порядок регистрации запроса:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									Должностным лицом, ответственным за выполнение административной процедуры, является
									работник МФЦ города Москвы, который осуществляет прием запроса и документов,
									необходимых для предоставления государственной услуги, в соответствии с Едиными
									требованиями и проверяет комплектность документов.
								</Text>
							</View>
						)}

						<TouchableOpacity
							style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 55 }}
							onPress={() => this.setState({ onDrop2: !this.state.onDrop2 })}
						>
							<View style={{ flex: 4 }}>
								<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#151522' }}>
									Категории получателей
								</Text>
							</View>
							<View style={{ flex: 1, alignSelf: 'flex-end' }}>
								<Image
									source={
										this.state.onDrop2
											? require('../assets/icons/up.png')
											: require('../assets/icons/down.png')
									}
									style={{ height: 32, width: 32, alignSelf: 'flex-end' }}
								/>
							</View>
						</TouchableOpacity>
						{this.state.onDrop2 && (
							<View style={{ marginTop: -50, marginBottom: 55 }}>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Срок выполнения услуги:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									30 календ. дн.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Срок, в течение которого заявление о предоставлении услуги должно быть
									зарегистрировано:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									15 мин.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Максимальный срок ожидания в очереди при подаче заявления о предоставлении услуги
									лично:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									15 мин.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Порядок регистрации запроса:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									Должностным лицом, ответственным за выполнение административной процедуры, является
									работник МФЦ города Москвы, который осуществляет прием запроса и документов,
									необходимых для предоставления государственной услуги, в соответствии с Едиными
									требованиями и проверяет комплектность документов.
								</Text>
							</View>
						)}

						<TouchableOpacity
							style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 55 }}
							onPress={() => this.setState({ onDrop3: !this.state.onDrop3 })}
						>
							<View style={{ flex: 4 }}>
								<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#151522' }}>
									Основания для оказания услуги, основания для отказа
								</Text>
							</View>
							<View style={{ flex: 1, alignSelf: 'flex-end' }}>
								<Image
									source={
										this.state.onDrop3
											? require('../assets/icons/up.png')
											: require('../assets/icons/down.png')
									}
									style={{ height: 32, width: 32, alignSelf: 'flex-end' }}
								/>
							</View>
						</TouchableOpacity>
						{this.state.onDrop3 && (
							<View style={{ marginTop: -50, marginBottom: 55 }}>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Срок выполнения услуги:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									30 календ. дн.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Срок, в течение которого заявление о предоставлении услуги должно быть
									зарегистрировано:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									15 мин.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Максимальный срок ожидания в очереди при подаче заявления о предоставлении услуги
									лично:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									15 мин.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Порядок регистрации запроса:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									Должностным лицом, ответственным за выполнение административной процедуры, является
									работник МФЦ города Москвы, который осуществляет прием запроса и документов,
									необходимых для предоставления государственной услуги, в соответствии с Едиными
									требованиями и проверяет комплектность документов.
								</Text>
							</View>
						)}

						<TouchableOpacity
							style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 55 }}
							onPress={() => this.setState({ onDrop4: !this.state.onDrop4 })}
						>
							<View style={{ flex: 4 }}>
								<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#151522' }}>
									Результат оказания услуги
								</Text>
							</View>
							<View style={{ flex: 1, alignSelf: 'flex-end' }}>
								<Image
									source={
										this.state.onDrop4
											? require('../assets/icons/up.png')
											: require('../assets/icons/down.png')
									}
									style={{ height: 32, width: 32, alignSelf: 'flex-end' }}
								/>
							</View>
						</TouchableOpacity>
						{this.state.onDrop4 && (
							<View style={{ marginTop: -50, marginBottom: 55 }}>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Срок выполнения услуги:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									30 календ. дн.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Срок, в течение которого заявление о предоставлении услуги должно быть
									зарегистрировано:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									15 мин.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Максимальный срок ожидания в очереди при подаче заявления о предоставлении услуги
									лично:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									15 мин.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Порядок регистрации запроса:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									Должностным лицом, ответственным за выполнение административной процедуры, является
									работник МФЦ города Москвы, который осуществляет прием запроса и документов,
									необходимых для предоставления государственной услуги, в соответствии с Едиными
									требованиями и проверяет комплектность документов.
								</Text>
							</View>
						)}

						<TouchableOpacity
							style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 55 }}
							onPress={() => this.setState({ onDrop5: !this.state.onDrop5 })}
						>
							<View style={{ flex: 4 }}>
								<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#151522' }}>Контакты</Text>
							</View>
							<View style={{ flex: 1, alignSelf: 'flex-end' }}>
								<Image
									source={
										this.state.onDrop5
											? require('../assets/icons/up.png')
											: require('../assets/icons/down.png')
									}
									style={{ height: 32, width: 32, alignSelf: 'flex-end' }}
								/>
							</View>
						</TouchableOpacity>
						{this.state.onDrop5 && (
							<View style={{ marginTop: -50, marginBottom: 55 }}>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Срок выполнения услуги:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									30 календ. дн.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Срок, в течение которого заявление о предоставлении услуги должно быть
									зарегистрировано:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									15 мин.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Максимальный срок ожидания в очереди при подаче заявления о предоставлении услуги
									лично:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									15 мин.
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '600',
										color: '#9DA2A5',
										textAlign: 'left',
										marginTop: 15,
									}}
								>
									Порядок регистрации запроса:
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										color: '#000000',
										textAlign: 'left',
									}}
								>
									Должностным лицом, ответственным за выполнение административной процедуры, является
									работник МФЦ города Москвы, который осуществляет прием запроса и документов,
									необходимых для предоставления государственной услуги, в соответствии с Едиными
									требованиями и проверяет комплектность документов.
								</Text>
							</View>
						)}
						<View style={downViewStyle}>
							<Button Title="Получить льготу" onPress={() => this.props.navigation.goBack()} />
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
