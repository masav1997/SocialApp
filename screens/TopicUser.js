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
	height: height+50,
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

export default class TopicUser extends React.Component {
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
								<View style={{ flex: 8, alignSelf: 'center', width: '100%'}}>
									<Text
										style={{
											fontSize: 13,
											color: '#151522',
											fontWeight: 'bold',
											textAlign: 'center',
											alignSelf: 'center',
										}}
									>
										Упоминание пользователя
									</Text>
								</View>
								<View style={{ flex: 1 }}>
								</View>
							</View>
						</View>
						<View
								style={{
									flexDirection: 'row',
									width: width - 40,
									alignSelf: 'center',
									height: 40,
									backgroundColor: '#ECF3F7',
									borderRadius: 10,
									alignItems: 'center',
									paddingHorizontal: 14,
									marginBottom: 15,
								}}
							>
								<View style={{ flex: 1, marginRight: 5 }}>
									<Image
										style={{ width: 21, height: 21 }}
										source={require('../assets/icons/search.png')}
									/>
								</View>
								<View style={{ flex: 11 }}>
									<TextInput
										style={{
											fontSize: 15,
										}}
										placeholderTextColor="#9DA2A5"
										placeholder="Поиск"
										keyboardType="default"
										selectionColor="#1A2ECD"
										onChangeText={this.toggleSearch}
									/>
								</View>
							</View>
						<TouchableOpacity style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
							<Image source={require('../assets/icons/avatar1.png')} style={{width: 24, height: 24, borderRadius: 24, marginRight: 5}}/>
							<Text style={{fontSize: 13, fontWeight: '500', color: '#0C0D0B'}}>Kyle Russell</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{flexDirection: 'row', marginTop: 30, alignItems: 'center'}}>
							<Image source={require('../assets/icons/avatar1.png')} style={{width: 24, height: 24, borderRadius: 24, marginRight: 5}}/>
							<Text style={{fontSize: 13, fontWeight: '500', color: '#0C0D0B'}}>Kyle Russell</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{flexDirection: 'row', marginTop: 30, alignItems: 'center'}}>
							<Image source={require('../assets/icons/avatar1.png')} style={{width: 24, height: 24, borderRadius: 24, marginRight: 5}}/>
							<Text style={{fontSize: 13, fontWeight: '500', color: '#0C0D0B'}}>Kyle Russell</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
