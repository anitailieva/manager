import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

	componentWillMount() {
	const config = {
    apiKey: 'AIzaSyBFFgX5qX0onF1KiUk2Qcf3WOpzG6ykZiQ',
    authDomain: 'manager-10e2f.firebaseapp.com',
    databaseURL: 'https://manager-10e2f.firebaseio.com',
    projectId: 'manager-10e2f',
    storageBucket: 'manager-10e2f.appspot.com',
    messagingSenderId: '959608893903'
  };
  firebase.initializeApp(config);
}

	render() {
		return (
			<Provider store={createStore(reducers)}>
					<LoginForm />
			</Provider>
		);
	}
}

export default App;
