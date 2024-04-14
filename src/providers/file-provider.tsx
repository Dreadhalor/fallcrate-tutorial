'use client';

import { FallcrateFile } from '@/types';
import React, { useState } from 'react';

type FileContextValue = {
  files: FallcrateFile[];
};

const FileContext = React.createContext({} as FileContextValue);
export const useFiles = () => React.useContext(FileContext);

export const FileProvider = ({ children }: { children: React.ReactNode }) => {
  const [files] = useState<FallcrateFile[]>([
    {
      id: '1',
      name: 'Folder 1',
      parent: null,
      type: 'folder',
    },
    {
      id: '2',
      name: 'Folder 2',
      parent: null,
      type: 'folder',
    },
    {
      id: '3',
      name: 'Folder 3',
      parent: '1',
      type: 'folder',
    },
    {
      id: '4',
      name: 'Folder 4',
      parent: '1',
      type: 'folder',
    },
    {
      id: '5',
      name: 'Folder 5',
      parent: '2',
      type: 'folder',
    },
    {
      id: '6',
      name: 'Folder 6',
      parent: '2',
      type: 'folder',
    },
    {
      id: '7',
      name: 'Folder 7',
      parent: '3',
      type: 'folder',
    },
    {
      id: '8',
      name: 'File 1',
      parent: '3',
      type: 'file',
    },
    {
      id: '9',
      name: 'File 2',
      parent: '3',
      type: 'file',
    },
    {
      id: '10',
      name: 'File 3',
      parent: '4',
      type: 'file',
    },
    {
      id: '11',
      name: 'File 4',
      parent: '4',
      type: 'file',
    },
    {
      id: '12',
      name: 'File 5',
      parent: '5',
      type: 'file',
    },
    {
      id: '13',
      name: 'File 6',
      parent: '5',
      type: 'file',
    },
    {
      id: '14',
      name: 'File 7',
      parent: '6',
      type: 'file',
    },
    {
      id: '15',
      name: 'File 8',
      parent: '6',
      type: 'file',
    },
  ]);

  return (
    <FileContext.Provider value={{ files }}>{children}</FileContext.Provider>
  );
};
