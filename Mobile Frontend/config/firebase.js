import { initalizeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from '@firebase/auth';
import Constant from 'expo-constants';

const firebaseConfig = {
  apiKey: Constant.expoConfig.extra.apiKey,
  authDomain: Constant.expoConfig.extra.authDomain,
  projectId: Constant.expoConfig.extra.projectId,
  storageBucket: Constant.expoConfig.extra.storageBucket,
  messagingSenderId: Constant.expoConfig.extra.messagingSenderId,
  appId: Constant.expoConfig.extra.appId,
  databaseURL: Constant.expoConfig.extra.databaseURL,
};

initalizeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
