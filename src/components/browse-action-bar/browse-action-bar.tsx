'use client';

import { BrowseActionBarButton } from '@/components/browse-action-bar/browse-action-bar-button';
import { MdUpload } from 'react-icons/md';
import { FiFolderPlus } from 'react-icons/fi';
import {
  MdOutlineDriveFolderUpload,
  MdOutlineUploadFile,
} from 'react-icons/md';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu';
import { CreateNewFolderDialog } from '../dialogs/create-new-folder-dialog';
import { Input } from '@ui/input';
import { useRef } from 'react';
import { useFileUpload } from '@/hooks/use-file-upload';
import { useFilesystem } from '@/providers/filesystem-provider';

export const BrowseActionBar = () => {
  const { uploadFile } = useFileUpload();
  const { currentFolder } = useFilesystem();
  const uploadInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className='flex gap-[20px] p-2'>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <BrowseActionBarButton primary>
            <>
              <MdUpload size={24} />
              Upload
            </>
          </BrowseActionBarButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start'>
          <DropdownMenuItem
            className='cursor-pointer gap-2'
            onClick={() => uploadInputRef.current?.click()}
          >
            <>
              <MdOutlineUploadFile size={20} />
              File
            </>
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer gap-2'>
            <>
              <MdOutlineDriveFolderUpload size={20} />
              Folder
            </>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <CreateNewFolderDialog>
        <BrowseActionBarButton>
          <>
            <FiFolderPlus size={24} />
            Create folder
          </>
        </BrowseActionBarButton>
      </CreateNewFolderDialog>
      <Input
        ref={uploadInputRef}
        className='sr-only h-0 w-0 overflow-hidden'
        type='file'
        onChange={(e) => {
          if (e.target.files) {
            uploadFile(e.target.files[0], currentFolder);
          }
        }}
      />
    </div>
  );
};
