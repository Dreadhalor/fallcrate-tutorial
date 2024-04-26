import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FallcrateFile } from '@/types';
import { useBlobStorage } from '@/hooks/use-blob-storage';
import { useParams, useRouter } from 'next/navigation';
import { useFilesystem } from '@/providers/filesystem-provider';
import { FaXmark } from 'react-icons/fa6';

interface Props {
  file: FallcrateFile;
}
export const ImagePreview = ({ file }: Props) => {
  const { getFileURL } = useBlobStorage();
  const { currentFolder, getFullPathname } = useFilesystem();
  const router = useRouter();
  // get route without the params
  const path = getFullPathname(currentFolder);

  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    getFileURL(file.id).then((url) => setUrl(url || ''));
  }, [file.id, getFileURL]);

  return url ? (
    <div className='flex h-full w-full flex-col'>
      <div className='flex h-16 w-full items-center justify-center bg-gray-800 text-white'>
        <button
          className='ml-4 mr-auto text-lg font-bold'
          onClick={() => router.push(`/home/${path}`)}
        >
          <FaXmark />
        </button>
        <span className='ml-2 mr-auto'>{file.name}</span>
      </div>
      <div className='relative w-full flex-1'>
        <Image
          src={url}
          alt={file.name}
          fill
          priority
          className='object-contain'
        />
      </div>
    </div>
  ) : null;
};
