import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginFrom from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyBqPMFTLGbUkOpAqzEpKu1iJbYL72TKWtI',
      authDomain: 'manager-abfcd.firebaseapp.com',
      databaseURL: 'https://manager-abfcd.firebaseio.com',
      projectId: 'manager-abfcd',
      storageBucket: '',
      messagingSenderId: '834597105765'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginFrom />
      </Provider>
    );
  }
}

export default App;
