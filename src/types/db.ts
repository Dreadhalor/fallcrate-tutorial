import { FallcrateFile } from '@/types';

export type Database = {
  getFiles: () => Promise<FallcrateFile[]>;
  createFolder: (name: string, parent: string | null) => void;
};
