import { getApp, getApps, initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const getFirebaseApp = () => {
  if (typeof window !== 'undefined') {
    if (getApps().length === 0) {
      return initializeApp(firebaseConfig);
    } else {
      return getApp();
    }
  }
  return null;
};

// initialize firebase
export const app = getFirebaseApp();
