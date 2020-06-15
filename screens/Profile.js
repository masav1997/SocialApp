import * as React from 'react';
import { View, Dimensions, Text, SafeAreaView, ScrollView } from 'react-native';

import Header from '../components/ProfileComponents/Header';
import TitleCard from '../components/ProfileComponents/TitleCard';
import Card from '../components/ProfileComponents/Card';
import CardWithoutBg from '../components/ProfileComponents/CardWithoutBg';
import PrivilegeCard from '../components/ProfileComponents/PrivilegeCard';
import CardRelative from '../components/ProfileComponents/CardRelative';

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

export default class Profile extends React.Component {
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
						<Text style={titleTextStyle}>Льготы</Text>
						<PrivilegeCard
							onPress={() => this.props.navigation.navigate('Fond')}
							img={require('../assets/icons/quiz.png')}
							textButton="Пройти тест >"
							title="Пройдите тест на определение подходящей льготы и субсидии"
						/>
						<View style={{ marginTop: 20 }} />
						<TitleCard
							title="Родственники"
							onPress={() => this.props.navigation.navigate('AddRelative')}
							buttonText="Добавить"
						/>
						<ScrollView
							style={{ flexDirection: 'row' }}
							showsHorizontalScrollIndicator={false}
							horizontal={true}
						>
							<CardRelative
								img={require('../assets/icons/avatar2.png')}
								label="Брат"
								name="Камчатский Р.П"
							/>
							<CardRelative
								img={require('../assets/icons/avatar3.png')}
								label="Мать"
								name="Камчатская. П.С"
							/>
						</ScrollView>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
