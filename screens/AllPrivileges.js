import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Card from '../components/AllPrivilegesComponents/Card';

const { width } = Dimensions.get('window');

const cardStyle = {
	width: '100%',
	height: 'auto',
	backgroundColor: '#FFF',
	borderTopLeftRadius: 30,
	borderTopRightRadius: 30,
	paddingHorizontal: 20,
	paddingVertical: 30,
	marginBottom: 50,
};

export default class AllPrivileges extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<ScrollView style={{ height: '100%', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
					<View style={cardStyle}>
						<View style={{ alignSelf: 'flex-start' }}>
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
							<Card
								onPress={() => this.props.navigation.navigate('AboutPrivilege')}
								statusImg={require('../assets/icons/time.png')}
								status="На проверке"
								statusColor="#F4D03F"
								title="Льгота на проезд в общественном транспорте"
								typeImg={require('../assets/icons/bus.png')}
							/>
							<Card
								onPress={() => this.props.navigation.navigate('AboutPrivilege')}
								statusImg={require('../assets/icons/time.png')}
								status="На проверке"
								statusColor="#F4D03F"
								title="Получение социальной помощи инвалидом"
								typeImg={require('../assets/icons/pram.png')}
							/>
							<Card
								onPress={() => this.props.navigation.navigate('AboutPrivilege')}
								statusImg={require('../assets/icons/time.png')}
								status="На проверке"
								statusColor="#F4D03F"
								title="Льгота по уплате гос.пошлины"
								typeImg={require('../assets/icons/money.png')}
								description="Паспорт Рф, СНИЛС, ИНН и ещё 3"
							/>
							<Card
								onPress={() => this.props.navigation.navigate('AboutPrivilege')}
								statusImg={require('../assets/icons/time.png')}
								status="На проверке"
								statusColor="#F4D03F"
								title="Льгота по оплате коммунальных услуг"
								typeImg={require('../assets/icons/tap.png')}
								description="Паспорт Рф, СНИЛС, ИНН и ещё 3"
							/>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
