import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';

import Button from '../components/Button';
import Title from '../components/Title';
import Input from '../components/Input';
import { TextInput } from 'react-native-gesture-handler';
import InputRelative from '../components/InputRelative';
import InputInfo from '../components/InputInfo';
import InputComment from '../components/InputComment';

const { width, height } = Dimensions.get('window');

const cardStyle = {
	width: '100%',
	height: height + 100,
	backgroundColor: '#FFF',
	borderTopLeftRadius: 30,
	borderTopRightRadius: 30,
	paddingHorizontal: 20,
	paddingVertical: 30,
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

export default class Topic extends React.Component {
	state = { switchValue: false, switchValue1: false, switchValue2: false, switchValue3: false, bool: false };

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

	toggleAttach = () => {
		this.setState({ bool: !this.state.bool });
	};
	render() {
		return (
			<SafeAreaView>
				<ScrollView style={{ height: '100%', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
					<View style={cardStyle}>
						<View style={{ alignSelf: 'flex-start' }}>
							<View style={{ flexDirection: 'row', height: 32, marginBottom: 10, width: '100%' }}>
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
										Создание темы
									</Text>
								</View>
								<View style={{ flex: 1 }} />
							</View>
						</View>
						<InputComment label="Название темы" keyboardType="default" />
						<InputComment placeholder="Текст сообщения" keyboardType="default" />
						{this.state.bool ? (
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									width: '100%',
									justifyContent: 'flex-start',
									alignItems: 'center',
									marginTop: 10
								}}
								onPress={this.toggleAttach}
							>
								<Image
									source={require('../assets/icons/pic.png')}
									style={{ width: 40, height: 40, marginRight: 5, borderRadius: 5 }}
								/>
								<Text
									style={{
										fontSize: 13,
										color: '#EE3E54',
										fontWeight: '500',
										textAlign: 'center',
									}}
								>
									Удалить фото
								</Text>
							</TouchableOpacity>
						) : (
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									width: '100%',
									justifyContent: 'flex-start',
									alignItems: 'center',
									marginTop: 20,
								}}
								onPress={this.toggleAttach}
							>
								<Image
									source={require('../assets/icons/attach.png')}
									style={{ width: 20, height: 20, marginRight: 5 }}
								/>
								<Text
									style={{
										fontSize: 13,
										color: '#1A2ECD',
										fontWeight: '500',
										textAlign: 'center',
									}}
								>
									Прикрепить фото
								</Text>
							</TouchableOpacity>
						)}
						<View style={{marginTop: 55}}>
						<Button Title="Создать тему" onPress={() => this.props.navigation.goBack()}/>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
