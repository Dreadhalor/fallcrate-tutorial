import { useEffect, useState } from 'react';
import { FallcrateFile } from '@/types';
import { useDB } from './use-db';
import { adapters } from '@/adapters';

export const useFiles = () => {
  const { getFiles, createFolder, renameFile } = useDB(adapters.firestore);

  const [files, setFiles] = useState<FallcrateFile[]>([]);

  const getFullPathname = (id: string | null): string => {
    if (!id) return '';
    const file = files.find((file) => file.id === id);
    if (!file) return '';
    if (!file.parent) return file.name;
    return `${getFullPathname(file.parent)}/${file.name}`;
  };
  const getParentPathname = (id: string): string => {
    const file = files.find((file) => file.id === id);
    if (!file) return '';
    if (!file.parent) return '';
    return getFullPathname(file.parent);
  };
  const findFileFromPathname = (pathname: string): FallcrateFile | null => {
    const pathParts = pathname.split('/');
    const fileName = pathParts.pop();

    if (pathParts.length === 0) {
      // The requested file is in the root directory
      return (
        files.find((file) => file.parent === null && file.name === fileName) ||
        null
      );
    }

    const parentPath = pathParts.join('/');
    const parent = files.find(
      (file) => getFullPathname(file.id) === parentPath,
    );

    if (!parent) return null;

    return (
      files.find(
        (file) => file.parent === parent.id && file.name === fileName,
      ) || null
    );
  };

  useEffect(() => {
    getFiles().then((files) => {
      setFiles(files);
    });
    // I know we don't want to exclude getFiles from the dependencies array, but it re-renders the component infinitely
    // must debug that later
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    files,
    createFolder,
    getFullPathname,
    getParentPathname,
    findFileFromPathname,
    renameFile,
  };
};
