import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDNnm7mcsnxPtwcEiT-Z49hrAhs2DXLtsA',
  authDomain: 'react-clone-d026a.firebaseapp.com',
  projectId: 'react-clone-d026a',
  storageBucket: 'react-clone-d026a.appspot.com',
  messagingSenderId: '1020009963173',
  appId: '1:1020009963173:web:8aa6fdff5125e4f120774c',
  measurementId: 'G-6CCMH14YDP',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
