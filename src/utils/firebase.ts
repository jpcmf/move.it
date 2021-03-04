import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com/`,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: '773676585289',
  appId: '1:773676585289:web:e9e9f3818ecc0151490a98',
  measurementId: 'G-RCL724V7X5',
};

export function loadFirebase() {
  function initFirebase() {
    if (!firebase.default.apps.length) {
      firebase.default.initializeApp(config);
    }
  }
  initFirebase();
  return firebase.default.database();
}
