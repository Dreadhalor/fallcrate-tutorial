import React from "react";
import { Button } from "@ui/button";
import { cn } from "@/lib/utils";

type Props = {
  primary?: boolean;
  children: React.ReactNode;
};
export const BrowseActionBarButton = ({ primary = false, children }: Props) => {
  return (
    <Button
      className={cn(
        "flex h-[76px] w-[140px] flex-col items-start justify-center gap-3 rounded-none p-[12px] font-semibold",
        primary && "bg-blue-500 hover:bg-blue-600",
        !primary && "border bg-transparent text-white hover:bg-gray-900",
      )}
    >
      {children}
    </Button>
  );
};
