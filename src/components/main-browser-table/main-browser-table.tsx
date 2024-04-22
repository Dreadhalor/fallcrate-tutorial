'use client';

import React from 'react';
import { DataTable } from './data-table';
import { columns } from './columns';
import { useFilesystem } from '@/providers/filesystem-provider';

export const MainBrowserTable = () => {
  const { currentFolder, files } = useFilesystem();
  const fileId = currentFolder;
  const filesInFolder = files.filter((_file) => _file.parent === fileId);

  return <DataTable columns={columns} data={filesInFolder} />;
};
