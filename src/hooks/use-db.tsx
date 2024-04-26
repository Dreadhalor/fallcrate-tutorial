import { Database } from '@/types/db';

export const useDB = (adapter: () => Database): Database => {
  return adapter();
};
