// 🔥 ВСТАВЬТЕ ВАШ КОНФИГ ИЗ FIREBASE CONSOLE 🔥
const firebaseConfig = {
    apiKey: "ВАШ_API_KEY",
    authDomain: "ВАШ_AUTH_DOMAIN",
    projectId: "ВАШ_PROJECT_ID",
    storageBucket: "ВАШ_STORAGE_BUCKET",
    messagingSenderId: "ВАШ_SENDER_ID",
    appId: "ВАШ_APP_ID"
};

// Инициализация
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Настройка Firestore (для тестового режима)
db.settings({ timestampsInSnapshots: true });
