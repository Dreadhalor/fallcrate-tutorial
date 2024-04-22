import React from 'react';
import { BrowseActionBar } from '../browse-action-bar/browse-action-bar';
import { MainBrowserTable } from './main-browser-table/main-browser-table';
import { FileBreadcrumbs } from './file-breadcrumbs';

export const MainFileBrowser = () => {
  return (
    <div className='flex flex-1 flex-col'>
      <BrowseActionBar />
      <FileBreadcrumbs />
      <MainBrowserTable />
    </div>
  );
};
