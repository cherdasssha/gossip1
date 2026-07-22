import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyB48JKtSCjTqwz9h1HN1POux8t1UceXuBY",

  authDomain: "gossip-2aba4.firebaseapp.com",

  projectId: "gossip-2aba4",

  storageBucket: "gossip-2aba4.firebasestorage.app",

  messagingSenderId: "949139596425",

  appId: "1:949139596425:web:82c902fefa5de74e6cd258"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);