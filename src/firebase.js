import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBoG33dURutzxMookJ3bzrDWkwxvnlPr3Y',
	authDomain: 're4ct-sl4ck.firebaseapp.com',
	projectId: 're4ct-sl4ck',
	storageBucket: 're4ct-sl4ck.appspot.com',
	messagingSenderId: '351043500800',
	appId: '1:351043500800:web:a6e8427562d569635a11e5',
	measurementId: 'G-XDN1G4YLJP'
};
firebase.initializeApp(firebaseConfig);

export default firebase;
