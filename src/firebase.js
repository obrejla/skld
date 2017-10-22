import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDCwGKIAKlwmdpe6Tp2nIL8CWqC8pQipko',
    authDomain: 'skld-dc516.firebaseapp.com',
    databaseURL: 'https://skld-dc516.firebaseio.com',
    projectId: 'skld-dc516',
    storageBucket: 'skld-dc516.appspot.com',
    messagingSenderId: '914467054484',
};

export default firebase.initializeApp(config);
