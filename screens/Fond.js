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
import Header from '../components/ProfileComponents/Header';
import TitleCard from '../components/ProfileComponents/TitleCard';
import Card from '../components/ProfileComponents/Card';
import CardWithoutBg from '../components/ProfileComponents/CardWithoutBg';
import FondCard from '../components/FondProfileComponents/FondCard';
import Table from '../components/FondProfileComponents/Table';
import HistoryCard from '../components/FondProfileComponents/HistoryCard';

const { width, height } = Dimensions.get('window');

const cardStyle = {
	marginTop: 15,
	width: '100%',
	height: 'auto',
	backgroundColor: '#FFF',
	borderTopLeftRadius: 30,
	borderTopRightRadius: 30,
	paddingHorizontal: 20,
	paddingTop: 30,
	paddingBottom: 200,
	marginBottom: 50,
};

const scrollViewVerticalStyle = {
	height: '100%',
	borderTopLeftRadius: 30,
	borderTopRightRadius: 30,
};

const titleTextStyle = {
	fontSize: 18,
	fontWeight: 'bold',
	color: '#151522',
	marginTop: 15,
};

export default class Fond extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<Header
					avatar={require('../assets/icons/avatar1.png')}
					onEditPress={() => this.props.navigation.navigate('EditProfile')}
					name="Камчатская А.П"
					title1="Дата рождения"
					title2="Место рождения"
					data="18 декабря, 1986"
					city="Санкт-Петербург"
				/>
				<ScrollView style={scrollViewVerticalStyle}>
					<View style={cardStyle}>
						<TitleCard
							title="Документы"
							onPress={() => this.props.navigation.navigate('ChooseTypeDoc')}
							buttonText="Добавить"
						/>
						<ScrollView
							style={{ flexDirection: 'row', paddingVertical: 15 }}
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							style={{ paddingVertical: 15 }}
						>
							<Card
								title="Паспорт РФ"
								onPress={() => this.props.navigation.navigate('AboutDoc')}
								statusImg={require('../assets/icons/approval.png')}
								statusColor="#16A085"
								statusTitle="Подтвержден"
								numDoc="40 13 168601"
								numDocColor="#E55D87"
								description1="Выдан 21 12 2015 ТП №73 отдела УФМС по Санкт.Петербургу и Лен.области во
										Фрунзенском"
								description="Выдан 21 12 2015 ТП №73 отдела УФМС"
							/>
							<CardWithoutBg
								title="СНИЛС"
								onPress={() => this.props.navigation.navigate('AboutDoc')}
								statusImg={require('../assets/icons/time.png')}
								statusColor="#F4D03F"
								statusTitle="На проверке"
								numDoc="116-983-621 89"
								numDocColor="#16A085"
								description="Выдан 21 12 2015 ТП №73 отдела"
							/>
						</ScrollView>

						<View style={{ marginTop: 20 }} />
						<TitleCard
							title="Мои фонды"
							onPress={() => this.props.navigation.navigate('EditArticle')}
							buttonText="Добавить"
						/>
						<ScrollView
							style={{ flexDirection: 'row', paddingVertical: 15 }}
							showsHorizontalScrollIndicator={false}
							horizontal={true}
						>
							<FondCard title="Название фонда" titleColor="#5FC3E4" mark="5.0 из 5.0" />
							<FondCard title="Название фонда" titleColor="#5FC3E4" mark="5.0 из 5.0" />
						</ScrollView>
						<Text style={titleTextStyle}>Интеграции</Text>
						<Table title="Uknow" statusColor="#9DA2A5" status="Синхронихирован" />
						<Table title="Rating" statusColor="#1A2ECD" status="Подключить интеграцию" />
						<View style={{ flexDirection: 'row', marginTop: 50 }}>
							<View style={{ flex: 3 }}>
								<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#151522' }}>
									История средств
								</Text>
							</View>
							<TouchableOpacity
								style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}
								onPress={() => this.props.navigation.navigate('Balance')}
							>
								<Text
									style={{ fontSize: 13, fontWeight: '500', color: '#1A2ECD', alignSelf: 'flex-end' }}
								>
									Все
								</Text>
							</TouchableOpacity>
						</View>
						<HistoryCard
							avatar={require('../assets/icons/avatar2.png')}
							title="Пожертвование от Константина"
							data="21.08.2020 23:45"
							summa="+ 50.00$"
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
