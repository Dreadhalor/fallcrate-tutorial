import { app } from '@/config/firebase';
import { v4 as uuidv4 } from 'uuid';
import {
  UploadTaskSnapshot,
  StorageError,
  ref,
  uploadBytesResumable,
  getStorage,
  getDownloadURL,
} from 'firebase/storage';

export const useBlobStorage = () => {
  const storage = app ? getStorage(app) : null;

  if (!storage) {
    return {
      uploadFileBlob: async () => {},
      getFileURL: async () => {},
    };
  }

  interface UploadBlobParams {
    file: File;
    onProgress?: (snapshot: UploadTaskSnapshot) => void;
    onError?: (error: StorageError) => void;
    onComplete?: (id: string) => void;
  }
  const uploadFileBlob = async ({
    file,
    onProgress,
    onError,
    onComplete,
  }: UploadBlobParams): Promise<void> => {
    const id = uuidv4();
    const storageRef = ref(storage, id);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        onProgress,
        (error) => {
          if (onError) {
            onError(error);
          }
          reject(error);
        },
        async () => {
          if (onComplete) {
            onComplete(id);
          }
          resolve();
        },
      );
    });
  };

  const getFileURL = async (id: string) => {
    const storageRef = ref(storage, id);
    return await getDownloadURL(storageRef);
  };

  return {
    uploadFileBlob,
    getFileURL,
  };
};
