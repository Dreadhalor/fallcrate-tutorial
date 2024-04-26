import { Database } from '@/types/db';

export const useDB = (adapter: () => Database): Database => {
  const { getFiles, createFolder, createFile } = adapter();
  return { getFiles, createFolder, createFile };
};
