import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCuW6cmAxR2U25W4RfT67rEykqUof8BsRM",
  authDomain: "whatsapp-d9fe4.firebaseapp.com",
  projectId: "whatsapp-d9fe4",
  storageBucket: "whatsapp-d9fe4.appspot.com",
  messagingSenderId: "586449113742",
  appId: "1:586449113742:web:59e9aefd58457f16fbafdf",
  measurementId: "G-D6LQFQVFHN"
};

const whatsApp = firebase.initializeApp(firebaseConfig);

const db = whatsApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { provider, auth };
