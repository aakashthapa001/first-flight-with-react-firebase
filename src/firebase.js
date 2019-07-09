import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJLaVKxyOI68YsT9RpLCFRVkBTccoshFw',
  authDomain: 'first-fight-with-family.firebaseapp.com',
  databaseURL: 'https://first-fight-with-family.firebaseio.com',
  projectId: 'first-fight-with-family',
  storageBucket: '',
  messagingSenderId: '58506646099',
  appId: '1:58506646099:web:fd63086e07f8f7c7'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase

export const database = firebase.database()
