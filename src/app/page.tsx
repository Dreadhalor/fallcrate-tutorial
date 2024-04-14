import { BrowseActionBarButton } from "@/components/browse-action-bar-button";
import { MdUpload } from "react-icons/md";
import { FiFolderPlus } from "react-icons/fi";
import {
  MdOutlineDriveFolderUpload,
  MdOutlineUploadFile,
} from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ui/dropdown-menu";

const Page = () => {
  return (
    <div className="flex h-full border-4 border-blue-600">
      <div className="w-[240px] border-4">SIDEBAR</div>
      <div className="flex-1 flex-col border-4">
        <div className="flex gap-[20px] border border-blue-500 p-2">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <BrowseActionBarButton primary>
                <>
                  <MdUpload size={24} />
                  Upload
                </>
              </BrowseActionBarButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem className="cursor-pointer gap-2">
                <>
                  <MdOutlineUploadFile size={16} />
                  File
                </>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer gap-2">
                <>
                  <MdOutlineDriveFolderUpload size={16} />
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
        MAIN CONTENT
      </div>
    </div>
  );
};

export default Page;
