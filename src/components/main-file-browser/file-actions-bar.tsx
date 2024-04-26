import React from 'react';
import { Button } from '@ui/button';
import { useFilesystem } from '@/providers/filesystem-provider';
import { RenameFileDialog } from '../dialogs/rename-file-dialog';

export const FileActionsBar = () => {
  const { selectedFiles, files } = useFilesystem();
  const firstFileId = selectedFiles[0];
  const firstFile = files.find((file) => file.id === firstFileId) || null;

  return (
    <div className='flex h-[65px] items-center px-8'>
      {selectedFiles.length === 1 && firstFile && (
        <RenameFileDialog file={firstFile}>
          <Button className='h-[32px] rounded-none bg-white/10 px-[12px] py-0 text-white hover:bg-white/20'>
            Rename
          </Button>
        </RenameFileDialog>
      )}
    </div>
  );
};
