'use client';

import React from 'react';
import { DataTable } from './data-table';
import { columns } from './columns';
import { useFiles } from '@/providers/file-provider';

export const MainBrowserTable = () => {
  const { files } = useFiles();
  return <DataTable columns={columns} data={files} />;
};
