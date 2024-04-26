import { adapters } from '@/adapters';
import { useBlobStorage } from './use-blob-storage';
import { useDB } from './use-db';

export const useFileUpload = () => {
  const { uploadFileBlob } = useBlobStorage();
  const { createFile } = useDB(adapters.firestore);

  const uploadFile = (file: File, parent: string | null) => {
    uploadFileBlob({
      file,
      onProgress: (snapshot) => {
        console.log('progress', snapshot);
      },
      onError: (error) => {
        console.error('error', error);
      },
      onComplete: (id) => {
        createFile({
          id,
          name: file.name,
          parent,
        });
      },
    });
  };

  return { uploadFile };
};
