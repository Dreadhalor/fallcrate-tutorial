'use client';

import { FallcrateFile } from '@/types';
import React, { useEffect } from 'react';
import { useFiles } from '@/hooks/use-files';
import { useParams } from 'next/navigation';
import { CreateFileParams } from '@/types/db';

type FileContextValue = {
  files: FallcrateFile[];
  createFolder: (args: CreateFileParams) => void;
  currentFolder: string | null;
  currentPath: FallcrateFile[];
  getFullPathname: (id: string | null) => string;
  getParentPathname: (id: string) => string;
  renameFile: (id: string, name: string) => void;
  selectedFiles: string[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<string[]>>;
};

const FileContext = React.createContext({} as FileContextValue);
export const useFilesystem = () => React.useContext(FileContext);

export const FilesystemProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    files,
    createFolder,
    getFullPathname,
    getParentPathname,
    findFileFromPathname,
    renameFile,
  } = useFiles();
  const [currentFolder, setCurrentFolder] = React.useState<string | null>(null);
  const [currentPath, setCurrentPath] = React.useState<FallcrateFile[]>([]);
  const [selectedFiles, setSelectedFiles] = React.useState<string[]>([]);
  const { folderName = [] } = useParams();

  useEffect(() => {
    const folderNameArray =
      typeof folderName === 'string' ? [folderName] : folderName;
    const decodedFolderNames = folderNameArray.map((name) =>
      decodeURIComponent(name),
    );
    const fullPathname = `${decodedFolderNames.join('/')}`;
    const file = findFileFromPathname(fullPathname);
    setCurrentFolder(file?.id || null);
  }, [files, folderName, findFileFromPathname]);

  useEffect(() => {
    if (!currentFolder) {
      setCurrentPath([]);
      return;
    }

    const file = files.find((file) => file.id === currentFolder) || null;
    const path: FallcrateFile[] = [];
    if (file) {
      path.push(file);
    } else {
      setCurrentPath([]);
      return;
    }
    let nextParentId = file?.parent;
    while (nextParentId) {
      const parent = files.find((file) => file.id === nextParentId);
      if (parent) {
        path.unshift(parent);
      }
      nextParentId = parent?.parent || null;
    }
    setCurrentPath(path);
  }, [currentFolder, files]);

  useEffect(() => {
    setSelectedFiles([]);
  }, [currentFolder]);

  return (
    <FileContext.Provider
      value={{
        files,
        createFolder,
        currentFolder,
        currentPath,
        getFullPathname,
        getParentPathname,
        renameFile,
        selectedFiles,
        setSelectedFiles,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};
