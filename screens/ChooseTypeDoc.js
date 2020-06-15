import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, Image, ImageBackground } from 'react-native';

import Button from '../components/Button';
import Title from '../components/Title';
import Input from '../components/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const cardStyle = {
	width: '100%',
	height: '100%',
	backgroundColor: '#FFF',
	borderTopLeftRadius: 30,
	borderTopRightRadius: 30,
	paddingHorizontal: 20,
	paddingTop: 19,
};

const titleStyle = {
	fontSize: 18,
	color: '#151522',
	fontWeight: 'bold',
	textAlign: 'left',
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
	alignSelf: 'flex-end',
	position: 'absolute',
	width: width,
	paddingHorizontal: 20,
};

const buttonStyle = {
	width: width,
	height: 60,
	alignSelf: 'center',
	marginTop: 40,
	backgroundColor: '#1A2ECD',
	padding: 19,
};

const buttonTextStyle = {
	fontSize: 18,
	color: '#FFFFFF',
	fontWeight: '600',
	textAlign: 'center',
};

export default class ChooseTypeDoc extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<View style={cardStyle}>
					<View style={{ flexDirection: 'row', height: 32, marginBottom: 10 }}>
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
								Выберите тип документы
							</Text>
						</View>
						<View style={{ flex: 1 }} />
					</View>
					<TouchableOpacity
						style={{
							width: width - 40,
							height: 'auto',
							borderRadius: 10,
							marginTop: 15,
							backgroundColor: '#ECF3F7',
							padding: 15,
							flexDirection: 'row',
							alignItems: "center"
						}}
						onPress={() => this.props.navigation.navigate('AboutDoc')}
					>
						<View style={{flex: 1}}>
						<Text
							style={{
								fontSize: 22,
								color: '#E55D87',
								fontWeight: 'bold',
								textAlign: 'left',
								alignSelf: 'flex-start',
							}}
						>
							Паспорт РФ
						</Text>
						</View>
						<Image source={require('../assets/icons/passport.png')} style={{width: 40, height: 40, alignSelf: 'flex-end',}}/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: width - 40,
							height: 'auto',
							borderRadius: 10,
							marginTop: 15,
							backgroundColor: '#ECF3F7',
							padding: 15,
							flexDirection: 'row',
							alignItems: "center"
						}}
						onPress={() => this.props.navigation.navigate('AboutDoc')}
					>
						<View style={{flex: 1}}>
						<Text
							style={{
								fontSize: 22,
								color: '#16A085',
								fontWeight: 'bold',
								textAlign: 'left',
								alignSelf: 'flex-start',
							}}
						>
							Загран паспорт
						</Text>
						</View>
						<Image source={require('../assets/icons/passport.png')} style={{width: 40, height: 40, alignSelf: 'flex-end',}}/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: width - 40,
							height: 'auto',
							borderRadius: 10,
							marginTop: 15,
							backgroundColor: '#ECF3F7',
							padding: 15,
							flexDirection: 'row',
							alignItems: "center"
						}}
						onPress={() => this.props.navigation.navigate('AboutDoc')}
					>
						<View style={{flex: 1}}>
						<Text
							style={{
								fontSize: 22,
								color: '#CC95C0',
								fontWeight: 'bold',
								textAlign: 'left',
								alignSelf: 'flex-start',
							}}
						>
							Документ №1
						</Text>
						</View>
						<Image source={require('../assets/icons/passport.png')} style={{width: 40, height: 40, alignSelf: 'flex-end',}}/>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
}
