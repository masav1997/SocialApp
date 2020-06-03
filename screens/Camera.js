import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default class CameraBlock extends React.Component {
	state = {
		hasPermission: null,
		cameraType: Camera.Constants.Type.back,
	};

	async componentDidMount() {
		this.getPermissionAsync();
	}

	getPermissionAsync = async () => {
		if (Platform.OS === 'ios') {
			const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			if (status !== 'granted') {
				alert('Sorry, we need camera roll permissions to make this work!');
			}
		}
		// Camera Permission
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasPermission: status === 'granted' });
	};

	handleCameraType = () => {
		const { cameraType } = this.state;

		this.setState({
			cameraType:
				cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back,
		});
	};

	takePicture = async () => {
		if (this.camera) {
			let photo = await this.camera.takePictureAsync();
		}
	};

	pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
		});
	};

	render() {
		const { hasPermission } = this.state;
		if (hasPermission === null) {
			return <View />;
		} else if (hasPermission === false) {
			return <Text>No access to camera</Text>;
		} else {
			return (
				<View style={{ flex: 1 }}>
					<Camera
						style={{ flex: 1}}
						type={this.state.cameraType}
						ref={(ref) => {
							this.camera = ref;
						}}
					>
						<View style={{height: '100%'}}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 30}}>
							<TouchableOpacity
								style={{
									alignSelf: 'center',
									alignItems: 'center',
									backgroundColor: 'transparent',
								}}
								onPress={() => this.props.navigation.goBack()}
							>
								<Image
									source={require('../assets/icons/back.png')}
									style={{ width: 32, height: 32, alignSelf: 'center', tintColor: '#FFF' }}
								/>
							</TouchableOpacity>
							<View
								style={{
									alignSelf: 'center',
									alignItems: 'center',
									backgroundColor: 'transparent',
									marginRight: 20,
								}}
							>
								<Text
									style={{
										fontSize: 13,
										color: '#FFF',
										fontWeight: 'bold',
										textAlign: 'center',
										alignSelf: 'center',
									}}
								>
									Паспорт 1-я страница
								</Text>
							</View>
							<View
								style={{
									alignSelf: 'flex-end',
									alignItems: 'center',
									backgroundColor: 'transparent',
								}}
							></View>
						</View>
						<View
							style={{
								width: '80%',
								height: '40%',
								borderColor: '#FFF',
								borderWidth: 5,
								borderRadius: 20,
								alignSelf: 'center',
								alignItems: 'center',
								marginTop: '20%',
							}}
						/>
						<Text
							style={{

								fontSize: 16,
								fontWeight: '500',
								color: '#FFF',
								textAlign: 'center',
								marginTop: 30,
							}}
						>
							Поднесите к камере {"\n"}первую страницу паспорта
						</Text>
						</View>
					</Camera>
				</View>
			);
		}
	}
}
