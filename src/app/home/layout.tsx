import { Sidebar } from '@/components/sidebar';
import { MainFileBrowser } from '@/components/main-file-browser/main-file-browser';

export default function Layout() {
  return (
    <div className='flex h-full'>
      <Sidebar />
      <MainFileBrowser />
    </div>
  );
}
