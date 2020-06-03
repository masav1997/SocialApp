import * as React from 'react';
import { Text} from 'react-native';

const titleStyle = {
	fontSize: 18,
	color: '#151522',
	fontWeight: 'bold',
	textAlign: 'left',
};

export default class Title extends React.Component {
	render() {
		const { Title } = this.props;
		return (
			<Text style={titleStyle}>{Title}</Text>
		);
	}
}
