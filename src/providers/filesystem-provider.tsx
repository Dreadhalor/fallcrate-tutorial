'use client';

import { FallcrateFile } from '@/types';
import React, { useEffect } from 'react';
import { useFiles } from '@/hooks/use-files';
import { useParams } from 'next/navigation';

type FileContextValue = {
  files: FallcrateFile[];
  createFolder: (name: string, parent: string | null) => void;
  currentFolder: string | null;
  getFullPathname: (id: string) => string;
};

const FileContext = React.createContext({} as FileContextValue);
export const useFilesystem = () => React.useContext(FileContext);

export const FilesystemProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { files, createFolder, getFullPathname, findFileFromPathname } =
    useFiles();
  const [currentFolder, setCurrentFolder] = React.useState<string | null>(null);
  const { folderName = [] } = useParams();

  useEffect(() => {
    const folderNameArray =
      typeof folderName === 'string' ? [folderName] : folderName;
    const decodedFolderNames = folderNameArray.map((name) =>
      decodeURIComponent(name),
    );
    console.log('decodedFolderNames', decodedFolderNames);
    const fullPathname = `${decodedFolderNames.join('/')}`;
    console.log('fullPathname', fullPathname);
    const file = findFileFromPathname(fullPathname);
    setCurrentFolder(file?.id || null);
  }, [files, folderName, findFileFromPathname]);

  console.log('folderName', folderName);

  return (
    <FileContext.Provider
      value={{ files, createFolder, currentFolder, getFullPathname }}
    >
      {children}
    </FileContext.Provider>
  );
};
