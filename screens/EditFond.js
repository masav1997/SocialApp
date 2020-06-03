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
	height: height,
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

export default class EditFond extends React.Component {
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
						<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#151522' }}>Данные фонда </Text>
						<Text
							style={{
								fontSize: 13,
								fontWeight: '600',
								color: '#9DA2A5',
								textAlign: 'left',
								marginTop: 15,
							}}
						>
							Логотип фонда
						</Text>
						<TouchableOpacity style={{ marginTop: 5 }}>
							<Image
								source={require('../assets/icons/avatar4.png')}
								style={{ width: 55, height: 55, borderRadius: 55 }}
							/>
						</TouchableOpacity>
						<InputInfo label="Адрес" placeholder="ул.Мира" keyboardType="default" />
						<InputInfo label="Вконтакте" placeholder="vc.com/profile " keyboardType="default" />
						<InputInfo label="Facebook" placeholder="fb.com/profile" keyboardType="default" />
						<InputInfo label="Twitter" placeholder="twitter.com/profile" keyboardType="default" />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
