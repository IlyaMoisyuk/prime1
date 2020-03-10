import React from 'react'
import {render} from 'react-dom'
import  App from './components/app'
import * as firebase from 'firebase'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducer/index';
const store = createStore(reducers);

let Config = {
  apiKey: "AIzaSyBzKrE7E02mbHdFq1G9bB5wgKPw3TCpYYw",
    authDomain: "react-database-84e3f.firebaseapp.com",
    databaseURL: "https://react-database-84e3f.firebaseio.com",
    projectId: "react-database-84e3f",
    storageBucket: "react-database-84e3f.appspot.com",
    messagingSenderId: "262879758239",
    appId: "1:262879758239:web:0655a3352de5b693931faa"
};

firebase.initializeApp(Config)



render( 
<Provider store={store}>
    <App/>
</Provider> , document.getElementById("root"))