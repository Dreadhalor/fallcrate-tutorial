import { useEffect, useState } from 'react';
import { FallcrateFile } from '@/types';
import { useDB } from './use-db';
import { adapters } from '@/adapters';

export const useFiles = () => {
  const { getFiles, createFolder } = useDB(adapters.firebase);

  const [files, setFiles] = useState<FallcrateFile[]>([]);

  useEffect(() => {
    getFiles().then((files) => {
      setFiles(files);
    });
  }, [getFiles]);

  return {
    files,
    createFolder,
  };
};
