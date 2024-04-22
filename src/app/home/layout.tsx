import { BrowseActionBar } from '@/components/browse-action-bar/browse-action-bar';
import { MainBrowserTable } from '@/components/main-browser-table/main-browser-table';
import { SidebarFileBrowser } from '@/components/sidebar-file-browser/sidebar-file-browser';

export default function Layout() {
  return (
    <div className='flex h-full'>
      <div className='flex w-[240px] flex-col bg-[#121211]'>
        <SidebarFileBrowser />
      </div>
      <div className='flex flex-1 flex-col'>
        <BrowseActionBar />
        <MainBrowserTable />
      </div>
    </div>
  );
}
