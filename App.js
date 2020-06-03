import * as React from 'react';
import { StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import Authorization from './screens/Authorization';
import AuthorizationCode from './screens/AuthorizationCode';
import Profile from './screens/Profile';
import ChooseTypeDoc from './screens/ChooseTypeDoc';
import AboutDoc from './screens/AboutDoc';
import EditProfile from './screens/EditProfile';
import AddRelative from './screens/AddRelative';
import MyPrivileges from './screens/MyPrivileges';
import AboutPrivilege from './screens/AboutPrivilege';
import Notifications from './screens/Notifications';
import Settings from './screens/Settings';
import AllPrivileges from './screens/AllPrivileges';
import EditFond from './screens/EditFond';
import Fond from './screens/Fond';
import Balance from './screens/Balance';
import EditArticle from './screens/EditArticle';
import Comments from './screens/Comments';
import CreateTopic from './screens/CreateTopic';
import Topic from './screens/Topic';
import TopicUser from './screens/TopicUser';
import CameraBlock from './screens/Camera';

const images = [
	require('./assets/icons/add.png'),
	require('./assets/icons/approval.png'),
	require('./assets/icons/attach.png'),
	require('./assets/icons/avatar1.png'),
	require('./assets/icons/avatar2.png'),
	require('./assets/icons/avatar3.png'),
	require('./assets/icons/avatar4.png'),
	require('./assets/icons/back.png'),
	require('./assets/icons/backButton.png'),
	require('./assets/icons/bus.png'),
	require('./assets/icons/cardPassport.png'),
	require('./assets/icons/comment.png'),
	require('./assets/icons/docs.png'),
	require('./assets/icons/docs_active.png'),
	require('./assets/icons/dots.png'),
	require('./assets/icons/down.png'),
	require('./assets/icons/edit.png'),
	require('./assets/icons/email.png'),
	require('./assets/icons/family.png'),
	require('./assets/icons/familyCard.png'),
	require('./assets/icons/invalidCard.png'),
	require('./assets/icons/mastercard.png'),
	require('./assets/icons/message.png'),
	require('./assets/icons/money.png'),
	require('./assets/icons/notification.png'),
	require('./assets/icons/notification_active.png'),
	require('./assets/icons/passport.png'),
	require('./assets/icons/pic.png'),
	require('./assets/icons/pram.png'),
	require('./assets/icons/privilegeCard.png'),
	require('./assets/icons/profile.png'),
	require('./assets/icons/profile_active.png'),
	require('./assets/icons/quiz.png'),
	require('./assets/icons/search.png'),
	require('./assets/icons/search_active.png'),
	require('./assets/icons/settings.png'),
	require('./assets/icons/settings_active.png'),
	require('./assets/icons/tap.png'),
	require('./assets/icons/time.png'),
	require('./assets/icons/transportCard.png'),
	require('./assets/icons/typeCard.png'),
	require('./assets/icons/up.png'),
	require('./assets/icons/utilityCard.png'),
];

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	};

	handleResourcesAsync = async () => {
		const cacheImages = images.map((image) => {
			return Asset.fromModule(image).downloadAsync();
		});

		return Promise.all(cacheImages);
	};

	render() {
		if (!this.state.isLoadingComplete) {
			return (
				<AppLoading
					startAsync={this.handleResourcesAsync}
					onError={(error) => console.warn(error)}
					onFinish={() => this.setState({ isLoadingComplete: true })}
				/>
			);
		}
		return (
			<NavigationContainer style={{ backgroundColor: '#E5E5E5' }}>
				<StatusBar barStyle="dark-content" backgroundColor="#F1F1F1" />
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="Authorization" component={Authorization} />
					<Stack.Screen name="AuthorizationCode" component={AuthorizationCode} />
					<Stack.Screen name="Profile">
						{() => (
							<Tab.Navigator
								screenOptions={({ route }) => ({
									tabBarIcon: ({ focused }) => {
										let iconName;
										let style;

										if (route.name === 'Профиль') {
											iconName = focused
												? require('./assets/icons/profile_active.png')
												: require('./assets/icons/profile.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'Все льготы') {
											iconName = focused
												? require('./assets/icons/search_active.png')
												: require('./assets/icons/search.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'Мои льготы') {
											iconName = focused
												? require('./assets/icons/docs_active.png')
												: require('./assets/icons/docs.png');
											style = { width: 17, height: 23 };
										} else if (route.name === 'Уведомления') {
											iconName = focused
												? require('./assets/icons/notification_active.png')
												: require('./assets/icons/notification.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'Настройки') {
											iconName = focused
												? require('./assets/icons/settings_active.png')
												: require('./assets/icons/settings.png');
											style = { width: 25, height: 25 };
										}

										return <Image source={iconName} style={style} />;
									},
								})}
								tabBarOptions={{
									style: {
										backgroundColor: '#FFFFFF',
										position: 'absolute',
										bottom: -1,
										padding: 5,
										height: Platform.OS === 'android' ? '7.5%' : '9.5%',
										zIndex: 8,
										borderTopColor: '#BBC5D0',
										borderTopWidth: 1,
									},
									activeTintColor: '#5238F2',
									inactiveTintColor: '#FFF',
									labelStyle: {
										fontSize: 9,
										bottom: '10%',
									},
								}}
							>
								<Tab.Screen name="Профиль" component={Profile} />
								<Tab.Screen name="Все льготы" component={AllPrivileges} />
								<Tab.Screen name="Мои льготы" component={MyPrivileges} />
								<Tab.Screen name="Уведомления" component={Notifications} />
								<Tab.Screen name="Настройки" component={Settings} />
							</Tab.Navigator>
						)}
					</Stack.Screen>
					<Stack.Screen name="ChooseTypeDoc" component={ChooseTypeDoc} />
					<Stack.Screen name="AboutDoc" component={AboutDoc} />
					<Stack.Screen name="EditProfile" component={EditProfile} />
					<Stack.Screen name="AddRelative" component={AddRelative} />

					<Stack.Screen name="AboutPrivilege" component={AboutPrivilege} />
					<Stack.Screen name="Camera" component={CameraBlock} />
					<Stack.Screen name="EditFond" component={EditFond} />
					<Stack.Screen name="Fond">
						{() => (
							<Tab.Navigator
								screenOptions={({ route }) => ({
									tabBarIcon: ({ focused }) => {
										let iconName;
										let style;

										if (route.name === 'Профиль') {
											iconName = focused
												? require('./assets/icons/profile_active.png')
												: require('./assets/icons/profile.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'Все льготы') {
											iconName = focused
												? require('./assets/icons/search_active.png')
												: require('./assets/icons/search.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'Мои льготы') {
											iconName = focused
												? require('./assets/icons/docs_active.png')
												: require('./assets/icons/docs.png');
											style = { width: 17, height: 23 };
										} else if (route.name === 'Уведомления') {
											iconName = focused
												? require('./assets/icons/notification_active.png')
												: require('./assets/icons/notification.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'Настройки') {
											iconName = focused
												? require('./assets/icons/settings_active.png')
												: require('./assets/icons/settings.png');
											style = { width: 25, height: 25 };
										}

										return <Image source={iconName} style={style} />;
									},
								})}
								tabBarOptions={{
									style: {
										backgroundColor: '#FFFFFF',
										position: 'absolute',
										bottom: -1,
										padding: 5,
										height: Platform.OS === 'android' ? '7.5%' : '9.5%',
										zIndex: 8,
										borderTopColor: '#BBC5D0',
										borderTopWidth: 1,
									},
									activeTintColor: '#5238F2',
									inactiveTintColor: '#FFF',
									labelStyle: {
										fontSize: 9,
										bottom: '10%',
									},
								}}
							>
								<Tab.Screen name="Профиль" component={Fond} />
								<Tab.Screen name="Все льготы" component={AllPrivileges} />
								<Tab.Screen name="Мои льготы" component={MyPrivileges} />
								<Tab.Screen name="Уведомления" component={Notifications} />
								<Tab.Screen name="Настройки" component={Settings} />
							</Tab.Navigator>
						)}
					</Stack.Screen>
					<Stack.Screen name="Balance" component={Balance} />
					<Stack.Screen name="EditArticle" component={EditArticle} />
					<Stack.Screen name="Comments" component={Comments} />
					<Stack.Screen name="CreateTopic" component={CreateTopic} />
					<Stack.Screen name="Topic" component={Topic} />
					<Stack.Screen name="TopicUser" component={TopicUser} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
