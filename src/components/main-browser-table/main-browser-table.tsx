'use client';

import React from 'react';
import { DataTable } from './data-table';
import { columns } from './columns';
import { useFilesystem } from '@/providers/filesystem-provider';

export const MainBrowserTable = () => {
  const { files } = useFilesystem();
  return <DataTable columns={columns} data={files} />;
};
