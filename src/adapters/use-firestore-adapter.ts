'use client';

import { app } from '@/config/firebase';
import { FallcrateFile } from '@/types';
import { Database, CreateFileParams } from '@/types/db';
import {
  collection,
  getFirestore,
  getDocs,
  query,
  doc,
  setDoc,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

interface CreateNodeParams extends CreateFileParams {
  type: 'folder' | 'file';
}

export const useFirestoreAdapter = (): Database => {
  const db = app ? getFirestore(app) : null;

  if (!db) {
    return {
      getFiles: async () => [],
      createFolder: async () => {},
      createFile: async () => {},
      renameFile: async () => {},
    };
  }

  const filesCollection = collection(db, 'files');

  const getFiles = async () => {
    const filesQuery = query(filesCollection);
    const snapshot = await getDocs(filesQuery);
    return snapshot.docs.map((doc) => doc.data() as FallcrateFile);
  };

  const createNode = ({
    name,
    parent,
    id = uuidv4(),
    type,
  }: CreateNodeParams) => {
    const authorizedNode = {
      name,
      parent,
      type,
      id,
    } satisfies FallcrateFile;
    const docRef = doc(filesCollection, id);
    return setDoc(docRef, authorizedNode);
  };
  const createFolder = async (args: CreateFileParams) =>
    createNode({ ...args, type: 'folder' });

  const createFile = async (args: CreateFileParams) =>
    createNode({ ...args, type: 'file' });

  const renameFile = async (id: string, name: string) => {
    const docRef = doc(filesCollection, id);
    return setDoc(docRef, { name }, { merge: true });
  };

  return { getFiles, createFolder, createFile, renameFile };
};
