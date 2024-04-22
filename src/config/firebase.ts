import { getApp, getApps, initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
// Contrary to usual practice, these are not *strictly* secret so it's safe to expose them
const firebaseConfig = {
  apiKey: 'AIzaSyCQcQ_nru5koXSKsk7KCcbmtDKWuyzBIBE',
  authDomain: 'fallcrate-tutorial.firebaseapp.com',
  projectId: 'fallcrate-tutorial',
  storageBucket: 'fallcrate-tutorial.appspot.com',
  messagingSenderId: '297180377502',
  appId: '1:297180377502:web:f49f3174e46fbde338268f',
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
