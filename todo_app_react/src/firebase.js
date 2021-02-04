import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC2fNHZbYTgKbLcmYaDrBHfG3I-0mpH8Rk',
  authDomain: 'todo-app-react-d3109.firebaseapp.com',
  projectId: 'todo-app-react-d3109',
  storageBucket: 'todo-app-react-d3109.appspot.com',
  messagingSenderId: '738608867175',
  appId: '1:738608867175:web:1e3d24fe5ce4a2d31ff1c2',
  measurementId: 'G-5RRQ3KL965',
});
const db = firebaseApp.firestore();
export default db;
