'use client';

import { FallcrateFile } from '@/types';
import React from 'react';
import { useFiles } from '@/hooks/use-files';

type FileContextValue = {
  files: FallcrateFile[];
  createFolder: (name: string, parent: string | null) => void;
};

const FileContext = React.createContext({} as FileContextValue);
export const useFilesystem = () => React.useContext(FileContext);

export const FilesystemProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { files, createFolder } = useFiles();

  return (
    <FileContext.Provider value={{ files, createFolder }}>
      {children}
    </FileContext.Provider>
  );
};
