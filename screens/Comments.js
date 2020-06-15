import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';

import Button from '../components/Button';
import Title from '../components/Title';
import Input from '../components/Input';
import { TextInput } from 'react-native-gesture-handler';
import InputRelative from '../components/InputRelative';
import InputInfo from '../components/InputInfo';

const { width, height } = Dimensions.get('window');

const cardStyle = {
	width: '100%',
	height: height+100,
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

export default class Comments extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<ScrollView style={{ height: '100%', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
					<View style={cardStyle}>
						<View style={{ alignSelf: 'flex-start' }}>
							<View style={{ flexDirection: 'row', height: 32, marginBottom: 10 }}>
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
										Комментарии
									</Text>
								</View>
								<TouchableOpacity
									style={{ flex: 1, alignSelf: 'center', height: 24, marginRight: -20 }}
									onPress={() => this.props.navigation.navigate('Topic')}
								>
									<Image
										source={require('../assets/icons/add.png')}
										style={{ width: 23, height: 23, alignSelf: 'flex-end', marginRight: 20 }}
									/>
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
								onPress={() => this.props.navigation.navigate('CreateTopic')}
							>
								<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
									<View style={{ flex: 2, flexDirection: 'row' }}>
										<Text
											style={{
												fontSize: 13,
												fontWeight: '600',
												color: '#9DA2A5',
												alignSelf: 'center',
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
								<Text
									style={{
										fontSize: 22,
										color: '#E55D87',
										fontWeight: 'bold',
										textAlign: 'left',
										marginTop: 5,
									}}
								>
									Организационные вопросы
								</Text>
								<Text
									style={{
										fontSize: 13,
										color: '#151522',
										fontWeight: '500',
										textAlign: 'left',
									}}
								>
									Если Вас что-то интересует, Вы можете задать вопрос в этом чате и его обязательно примуть во внимание.
								</Text>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										width: '100%',
										alignItems: 'center',
										marginTop: 10,
										height: 21,
									}}
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
								onPress={() => this.props.navigation.navigate('AboutPrivilege')}
							>
								<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
									<View style={{ flex: 2, flexDirection: 'row' }}>
										<Text
											style={{
												fontSize: 13,
												fontWeight: '600',
												color: '#9DA2A5',
												alignSelf: 'center',
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
								<Text
									style={{
										fontSize: 22,
										color: '#E55D87',
										fontWeight: 'bold',
										textAlign: 'left',
										marginTop: 5,
									}}
								>
									Технические проблемы и уточнения по изобретению
								</Text>
								<Text
									style={{
										fontSize: 13,
										color: '#151522',
										fontWeight: '500',
										textAlign: 'left',
									}}
								>
									Здесь обсуждают проблемы, возникающие в результате работы нашей организации.
								</Text>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										width: '100%',
										alignItems: 'center',
										marginTop: 10,
										height: 21,
									}}
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
