import firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
const firebaseApp = firebase.initializeApp(firebaseConfig);
/*db = firebaseApp.firestore();
export default {
    db
}*/
export const db = firebaseApp.firestore();