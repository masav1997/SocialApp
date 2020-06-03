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
import Input from '../components/Input';
import InputInfo from '../components/InputInfo';
import Header from '../components/AboutDocComponents/Header';
import Card from '../components/AboutDocComponents/Card';

const { width, height } = Dimensions.get('window');

const cardStyle = {
	marginTop: 15,
	width: '100%',
	height: 'auto',
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
	alignSelf: 'flex-end',
	position: 'absolute',
	width: width,
	paddingHorizontal: 20,
};

export default class AboutDoc extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<Header onPress={() => this.props.navigation.goBack()} />
				<Card
					title="Паспорт РФ"
					statusImg={require('../assets/icons/approval.png')}
					status="Подтвержден"
					statusColor="#16A085"
					number="40 13 168601"
					typeImg={require('../assets/icons/passport.png')}
				/>
				<ScrollView style={{ height: '100%', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
					<View style={cardStyle}>
						<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#151522' }}>Данные документа</Text>
						<InputInfo label="Номер паспорта" placeholder="40 13 168601" keyboardType="number-pad" />
						<InputInfo
							label="Кем выдан"
							placeholder="Выдан 21 12 2015 ТП №73 отдела УФМС по Санкт.Петербургу и Лен.области во Фрунзенском"
							keyboardType="default"
						/>
						<InputInfo label="Еще данные" placeholder="Еще данные" keyboardType="default" />
						<Text
							style={{
								fontSize: 13,
								fontWeight: '600',
								color: '#9DA2A5',
								textAlign: 'left',
								marginTop: 15,
							}}
						>
							Страница 1
						</Text>
						<TouchableOpacity
							style={{ marginTop: 5 }}
							onPress={() => this.props.navigation.navigate('Camera')}
						>
							<Image
								source={require('../assets/icons/pic.png')}
								style={{ width: 55, height: 55, borderRadius: 10 }}
							/>
						</TouchableOpacity>
						<Text
							style={{
								fontSize: 13,
								fontWeight: '600',
								color: '#9DA2A5',
								textAlign: 'left',
								marginTop: 15,
							}}
						>
							Страница 2
						</Text>
						<TouchableOpacity style={{ marginTop: 5 }}>
							<Image
								source={require('../assets/icons/pic.png')}
								style={{ width: 55, height: 55, borderRadius: 10 }}
							/>
						</TouchableOpacity>
						<View
							style={{
								alignSelf: 'flex-end',
								paddingHorizontal: 20,
								marginTop: 140,
								height: 'auto',
								justifyContent: 'flex-end',
							}}
						>
							<Text style={{ fontSize: 13, fontWeight: '500', color: '#9DA2A5', textAlign: 'center' }}>
								Чтобы изменить данные вручную, нажмите на нужно вам поле и введите свои данные
							</Text>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
