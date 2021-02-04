import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDrX-CSUrbYLaEBwRX0095z-V5lqcUTv48',
  authDomain: 'tinder-react-clone-8ec54.firebaseapp.com',
  projectId: 'tinder-react-clone-8ec54',
  storageBucket: 'tinder-react-clone-8ec54.appspot.com',
  messagingSenderId: '409330978823',
  appId: '1:409330978823:web:34d1f429fde4f0f85a9aa2',
  measurementId: 'G-WGBQN8SG6D',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
