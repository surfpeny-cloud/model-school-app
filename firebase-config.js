// 🔥 КОНФИГ ИЗ FIREBASE CONSOLE
const firebaseConfig = {
    apiKey: "ВАШ_API_KEY",
    authDomain: "ВАШ_AUTH_DOMAIN",
    projectId: "ВАШ_PROJECT_ID",
    storageBucket: "ВАШ_STORAGE_BUCKET",
    messagingSenderId: "ВАШ_SENDER_ID",
    appId: "ВАШ_APP_ID"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);

// Глобальные переменные
const auth = firebase.auth();
const db = firebase.firestore();

console.log("Firebase initialized");
