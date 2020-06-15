import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';

import Button from '../components/Button';
import Title from '../components/Title';
import Input from '../components/Input';
import { TextInput } from 'react-native-gesture-handler';
import InputRelative from '../components/InputRelative';
import InputInfo from '../components/InputInfo';
import InputComment from '../components/InputComment';
import AnswerCard from '../components/AnswerCard';

const { width, height } = Dimensions.get('window');

const cardStyle = {
	width: '100%',
	height: 'auto',
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

export default class CreateTopic extends React.Component {
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
								<View style={{ flex: 8, alignSelf: 'center', width: '100%', marginRight: 20 }}>
									<Text
										style={{
											fontSize: 13,
											color: '#151522',
											fontWeight: 'bold',
											textAlign: 'center',
											alignSelf: 'center',
										}}
									>
										Комментарии к теме
									</Text>
								</View>
								<TouchableOpacity style={{ flex: 1, alignSelf: 'center', marginRight: -20 }} onPress={() => this.props.navigation.navigate('Comments')}>
									<Image
										source={require('../assets/icons/message.png')}
										style={{ width: 20, height: 20, right: 20 }}
									/>
								</TouchableOpacity>
							</View>
						</View>
						<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 30 }}>
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
									12.02.2020 23:45
								</Text>
							</View>
							<TouchableOpacity style={{ flex: 1, height: '100%', marginRight: -15 }}>
								<Image
									source={require('../assets/icons/dots.png')}
									style={{ width: 20, height: 20, alignSelf: 'flex-end', marginRight: 15 }}
								/>
							</TouchableOpacity>
						</View>
						<Text style={{ fontSize: 22, fontWeight: 'bold', color: '#E55D87', textAlign: 'left' }}>
							Организационные вопросы
						</Text>
						<Text
							style={{
								fontSize: 13,
								fontWeight: '500',
								color: '#151522',
								textAlign: 'left',
								marginTop: 5,
							}}
						>
							Здесь обсуждают проблемы, возникающие в результате работы нашей организации.
						</Text>
					</View>
					<View style={{ width: '100%', height: 'auto', backgroundColor: '#fff', marginTop: 5, padding: 20 }}>
						<View style={{ flexDirection: 'row' }}>
							<TouchableOpacity
								style={{
									width: 'auto',
									height: 'auto',
									padding: 11,
									backgroundColor: '#ECF3F7',
									borderRadius: 10,
									marginRight: 5,
								}}
							>
								<Text style={{ fontSize: 16, color: '#9DA2A5', fontWeight: '600' }}>
									Все комментарии
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									width: 'auto',
									height: 'auto',
									padding: 11,
									backgroundColor: '#ECF3F7',
									borderRadius: 10,
									marginRight: 5,
								}}
							>
								<Text style={{ fontSize: 16, color: '#9DA2A5', fontWeight: '600' }}>Автора</Text>
							</TouchableOpacity>
						</View>
						<AnswerCard tabLabel={'Все комментарии'}  onPress={() => this.props.navigation.navigate('TopicUser')}/>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
