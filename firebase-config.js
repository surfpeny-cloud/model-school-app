// 🔥 КОНФИГ ИЗ FIREBASE CONSOLE (вставьте свои данные)
const firebaseConfig = {
    apiKey: "ВАШ_API_KEY",
    authDomain: "ВАШ_AUTH_DOMAIN",
    projectId: "ВАШ_PROJECT_ID",
    storageBucket: "ВАШ_STORAGE_BUCKET",  // можно оставить, не используется
    messagingSenderId: "ВАШ_SENDER_ID",
    appId: "ВАШ_APP_ID"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Storage НЕ ИСПОЛЬЗУЕТСЯ, но объект можно не создавать
// const storage = firebase.storage(); // закомментировано или удалено

// Настройка Firestore
db.settings({ timestampsInSnapshots: true });
