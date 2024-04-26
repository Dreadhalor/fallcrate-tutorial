'use client';

import { BrowseActionBar } from '../browse-action-bar/browse-action-bar';
import { MainBrowserTable } from './main-browser-table/main-browser-table';
import { FileBreadcrumbs } from './file-breadcrumbs';
import { useFilesystem } from '@/providers/filesystem-provider';
import { FileActionsBar } from './file-actions-bar';

export const MainFileBrowser = () => {
  const { currentPath } = useFilesystem();

  return (
    <div className='flex flex-1 flex-col gap-2'>
      <BrowseActionBar />
      {currentPath.length > 0 && <FileBreadcrumbs />}
      <span className='px-8 text-2xl font-medium'>
        {currentPath.at(-1)?.name || 'All Files'}
      </span>
      <FileActionsBar />
      <MainBrowserTable />
    </div>
  );
};
