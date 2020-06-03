import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, Image, Switch, ScrollView } from 'react-native';

import Button from '../components/Button';
import Title from '../components/Title';
import Input from '../components/Input';
import {} from 'react-native-gesture-handler';
import InputRelative from '../components/InputRelative';
import InputInfo from '../components/InputInfo';

const { width, height } = Dimensions.get('window');

const cardStyle = {
	width: '100%',
	height: height + 45,
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

export default class Settings extends React.Component {
	state = { switchValue: false, switchValue1: false };
	toggleSwitch = (value) => {
		this.setState({ switchValue: value });
	};
	toggleSwitch1 = (value) => {
		this.setState({ switchValue1: value });
	};
	render() {
		return (
			<SafeAreaView>
				<ScrollView style={{ height: '100%', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
					<View style={cardStyle}>
						<View style={{ alignSelf: 'flex-start' }}>
							<Text
								style={{
									fontSize: 18,
									color: '#151522',
									fontWeight: 'bold',
									textAlign: 'left',
									alignSelf: 'flex-start',
								}}
							>
								Уведомления
							</Text>
							<View
								style={{
									flexDirection: 'row',
									width: '100%',
									justifyContent: 'center',
									alignItems: 'center',
									marginTop: 21,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										color: '#000000',
										fontWeight: '500',
										textAlign: 'left',
										flex: 3,
									}}
								>
									Уведомления о новостях
								</Text>
								<View
									style={{
										flex: 1,
										alignItems: 'flex-end',
										justifyContent: 'center',
									}}
								>
									<Switch
										onValueChange={this.toggleSwitch}
										value={this.state.switchValue}
										trackColor={{ false: '#e9e9e9', true: '#1A2ECD' }}
										thumbColor="white"
										ios_backgroundColor={{ false: '#e9e9e9', true: '#1A2ECD' }}
									/>
								</View>
							</View>

							<View
								style={{
									flexDirection: 'row',
									width: '100%',
									justifyContent: 'center',
									alignItems: 'center',
									marginTop: 21,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										color: '#000000',
										fontWeight: '500',
										textAlign: 'left',
										flex: 3,
									}}
								>
									Уведомления напоминания
								</Text>
								<View
									style={{
										flex: 1,
										alignItems: 'flex-end',
										justifyContent: 'center',
									}}
								>
									<Switch
										onValueChange={this.toggleSwitch1}
										value={this.state.switchValue1}
										trackColor={{ false: '#e9e9e9', true: '#1A2ECD' }}
										thumbColor="white"
										ios_backgroundColor={{ false: '#e9e9e9', true: '#1A2ECD' }}
									/>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
