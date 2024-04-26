import { useFilesystem } from '@/providers/filesystem-provider';
import { FallcrateFile } from '@/types';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaFile, FaFolder } from 'react-icons/fa';

interface Props {
  file: FallcrateFile;
}
export const BrowserItemName = ({ file: { id, type, name } }: Props) => {
  const router = useRouter();
  const { getFullPathname, getParentPathname } = useFilesystem();
  const parentPathname = getParentPathname(id);
  const fullPathname = getFullPathname(id);

  const handleButtonClick = () => {
    if (type === 'folder') router.push(`/home/${fullPathname}`);
    if (type === 'file') router.push(`/home/${parentPathname}?preview=${name}`);
  };

  return (
    <div className='flex items-center gap-2'>
      {type === 'folder' && <FaFolder size={18} />}
      {type === 'file' && <FaFile size={18} />}
      <button onClick={handleButtonClick}>{name}</button>
    </div>
  );
};
