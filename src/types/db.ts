import { FallcrateFile } from '@/types';

export interface CreateFileParams {
  name: string;
  parent: string | null;
  id?: string;
}
export type Database = {
  getFiles: () => Promise<FallcrateFile[]>;
  createFolder: (args: CreateFileParams) => void;
  createFile: (args: CreateFileParams) => void;
  renameFile: (id: string, name: string) => void;
};
