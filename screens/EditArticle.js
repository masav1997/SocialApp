import * as React from 'react';
import {
	View,
	Dimensions,
	Text,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
	Image,
	ImageBackground,
} from 'react-native';
import styled from 'styled-components';
import Button from '../components/Button';
import InputInfo from '../components/InputInfo';
import InputRelative from '../components/InputRelative';
import InputTopic from '../components/InputTopic';

const { width, height } = Dimensions.get('window');

const cardStyle = {
	marginTop: 15,
	width: '100%',
	height: height,
	backgroundColor: '#FFF',
	borderTopLeftRadius: 30,
	borderTopRightRadius: 30,
	paddingHorizontal: 20,
	paddingVertical: 30,
	marginBottom: 130,
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
	width: width,
	paddingHorizontal: 20,
	marginLeft: -20,
	bottom: 10,
};

export default class EditArticle extends React.Component {
	state = {
		onDrop1: false,
		onDrop2: false,
		onDrop3: false,
		onDrop4: false,
		onDrop5: false,
		addTopic: false,
		addTopic1: false,
		saveTopic: false,
	};
	render() {
		return (
			<SafeAreaView>
				<View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingTop: 10 }}>
					<TouchableOpacity style={{ flex: 1, height: 32, marginLeft: -10 }} onPress={() => this.props.navigation.goBack()}>
						<Image source={require('../assets/icons/back.png')} style={{ width: 32, height: 32 }} />
					</TouchableOpacity>
					<View style={{ flex: 1, alignSelf: 'center', height: 35, justifyContent: 'center' }} />
				</View>
				<View style={{ paddingHorizontal: 20, marginTop: -10 }}>
					<View style={{ flexDirection: 'row', marginTop: 10 }}>
						<View style={{ flex: 3, alignSelf: 'flex-end' }}>
							<View style={{ flexDirection: 'row' }}>
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
							<Text style={{ fontSize: 22, color: '#151522', fontWeight: 'bold', marginTop: 5 }}>
								Льгота на проезд в общественном транспорте
							</Text>
						</View>
						<View style={{ flex: 1 }}>
							<Image
								source={require('../assets/icons//bus.png')}
								style={{ width: 66, height: 66, alignSelf: 'flex-end' }}
							/>
						</View>
					</View>
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
						{this.state.addTopic ? (
							<View>
								<InputTopic placeholder="Название раздела" keyboardType="default" button="Отмена" />
								{this.state.addTopic1 && (
									<View style={{ marginTop: 15 }}>
										<InputTopic
											placeholder="Название нового пункта"
											keyboardType="default"
											button="Отмена"
										/>
									</View>
								)}
								<View style={downViewStyle}>
									<Button
										Title={this.state.saveTopic ? 'Добавить новый пункт' : 'Сохранить раздел'}
										onPress={
											this.state.saveTopic
												? () => this.setState({ addTopic1: true, saveTopic: false })
												: () => this.setState({ saveTopic: true })
										}
									/>
								</View>
							</View>
						) : (
							<TouchableOpacity onPress={() => this.setState({ addTopic: true })}>
								<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1A2ECD' }}>
									+ Добавить раздел
								</Text>
							</TouchableOpacity>
						)}
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
