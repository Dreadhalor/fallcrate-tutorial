'use client';

import { Sidebar } from '@/components/sidebar';
import { MainFileBrowser } from '@/components/main-file-browser/main-file-browser';
import { useSearchParams } from 'next/navigation';
import { useFilesystem } from '@/providers/filesystem-provider';
import { useFiles } from '@/hooks/use-files';
import { ImagePreview } from '@/components/preview-pane/image-preview';

export default function Layout() {
  const { findFileFromPathname, getFullPathname } = useFiles();
  const { currentFolder } = useFilesystem();
  const currentPathname = getFullPathname(currentFolder);
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get('preview');
  const prefix = currentPathname ? `${currentPathname}/` : '';

  const previewFile = findFileFromPathname(`${prefix}${imageUrl}`);

  return (
    <div className='flex h-full'>
      {!previewFile && (
        <>
          <Sidebar />
          <MainFileBrowser />
        </>
      )}
      {previewFile && <ImagePreview file={previewFile} />}
    </div>
  );
}
