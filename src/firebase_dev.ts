import { initializeApp } from "firebase/app";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLVqaI2VAQwIjUL-2QiNqKxK3RfMiK7Vk",
  authDomain: "dev-crayonsmp.firebaseapp.com",
  projectId: "dev-crayonsmp",
  storageBucket: "dev-crayonsmp.firebasestorage.app",
  messagingSenderId: "541054010082",
  appId: "1:541054010082:web:946ef97ecbbe45efb414bb",
};

const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

export const auth = getAuth(app);
