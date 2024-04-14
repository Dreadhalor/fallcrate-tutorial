import { BrowseActionBar } from "@/components/browse-action-bar/browse-action-bar";
import { SidebarFileBrowser } from "@/components/sidebar-file-browser/sidebar-file-browser";

const Page = () => {
  return (
    <div className="flex h-full border-4 border-blue-600">
      <div className="flex w-[240px] flex-col border-4">
        SIDEBAR
        <SidebarFileBrowser />
      </div>
      <div className="flex-1 flex-col border-4">
        <BrowseActionBar />
        MAIN CONTENT
      </div>
    </div>
  );
};

export default Page;
