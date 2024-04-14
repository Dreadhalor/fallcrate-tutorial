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

export const BrowseActionBar = () => {
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
          <DropdownMenuItem className='cursor-pointer gap-2'>
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
      <BrowseActionBarButton>
        <>
          <FiFolderPlus size={24} />
          Create folder
        </>
      </BrowseActionBarButton>
    </div>
  );
};
