'use client';

import { app } from '@/config/firebase';
import { FallcrateFile } from '@/types';
import { Database } from '@/types/db';
import {
  collection,
  getFirestore,
  getDocs,
  query,
  doc,
  setDoc,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export const useFirebaseAdapter = (): Database => {
  const db = app ? getFirestore(app) : null;

  if (!db) {
    return {
      getFiles: async () => [],
      createFolder: async () => {},
    };
  }
  const filesCollection = collection(db!, 'files');

  const getFiles = async () => {
    const filesQuery = query(filesCollection);
    const snapshot = await getDocs(filesQuery);
    return snapshot.docs.map((doc) => doc.data() as FallcrateFile);
  };

  const createFolder = async (name: string, parent: string | null) => {
    const id = uuidv4();
    const authorizedFolder = {
      name,
      parent,
      type: 'folder',
      id,
    } satisfies FallcrateFile;
    const docRef = doc(filesCollection, id);
    await setDoc(docRef, authorizedFolder);
  };

  return { getFiles, createFolder };
};
