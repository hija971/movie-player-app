import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCuCmqR1s50xt3mNKgvnDRygLpJGk21SZ0",
    authDomain: "netflix-de604.firebaseapp.com",
    projectId: "netflix-de604",
    storageBucket: "netflix-de604.appspot.com",
    messagingSenderId: "328654452413",
    appId: "1:328654452413:web:b6ca726bc3a310d77aa9d4",
    measurementId: "G-9G5KPVYKSY"
  };

initializeApp(firebaseConfig)
const storage = getStorage()
export default storage