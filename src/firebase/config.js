import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDTVmB4uH1u6OczlEF3QcjtHKOjshHIKGo",
  authDomain: "danyi-db.firebaseapp.com",
  projectId: "danyi-db",
  storageBucket: "danyi-db.firebasestorage.app",
  messagingSenderId: "825090695620",
  appId: "1:825090695620:web:94ee442e68322c8ac60491",
  measurementId: "G-LH1497GNM9"
};

export const app = initializeApp(firebaseConfig)