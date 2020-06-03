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
	marginBottom: 60,
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

export default class EditProfile extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingTop: 10 }}>
					<TouchableOpacity style={{ flex: 1, alignSelf: 'flex-start', height: 32 }} onPress={() => this.props.navigation.goBack()}>
						<Image source={require('../assets/icons/back.png')} style={{ width: 32, height: 32 }} />
					</TouchableOpacity>
					<View style={{ flex: 1, alignSelf: 'center', height: 35, justifyContent: 'center' }} />
				</View>
				<ScrollView style={{ height: 'auto', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
					<View style={cardStyle}>
						<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#151522' }}>Данные профиля</Text>
						<Text
							style={{
								fontSize: 13,
								fontWeight: '600',
								color: '#9DA2A5',
								textAlign: 'left',
								marginTop: 15,
							}}
						>
							Фото профиля
						</Text>
						<TouchableOpacity style={{ marginTop: 5 }}>
							<Image
								source={require('../assets/icons/avatar1.png')}
								style={{ width: 55, height: 55, borderRadius: 55 }}
							/>
						</TouchableOpacity>
						<InputInfo label="Фамилия" placeholder="Камчатская" keyboardType="default" />
						<InputInfo label="Имя" placeholder="Альбина" keyboardType="default" />
						<InputInfo label="Отечество" placeholder="Поликарповна" keyboardType="default" />
						<InputInfo label="Имя" placeholder="Альбина" keyboardType="default" />
						<InputInfo label="Дата рождения" placeholder="18 декабря, 1986" keyboardType="default" />
						<InputInfo label="Место рождения" placeholder="Cанкт-Петербург" keyboardType="default" />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
