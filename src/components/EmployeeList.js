import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {

	componentWillMount() {
		this.props.employeesFetch();
	}


	render() {
		return (
			<View>
				<Text>EmployeeList</Text>
			</View>
		);
	}
}

export default connect(null, { employeesFetch })(EmployeeList);
