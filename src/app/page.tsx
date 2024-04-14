import { BrowseActionBar } from "@/components/browse-action-bar";

const Page = () => {
  return (
    <div className="flex h-full border-4 border-blue-600">
      <div className="w-[240px] border-4">SIDEBAR</div>
      <div className="flex-1 flex-col border-4">
        <BrowseActionBar />
        MAIN CONTENT
      </div>
    </div>
  );
};

export default Page;
