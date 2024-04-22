import { Database } from '@/types/db';

export const useDB = (adapter: () => Database): Database => {
  const { getFiles, createFolder } = adapter();
  return { getFiles, createFolder };
};
