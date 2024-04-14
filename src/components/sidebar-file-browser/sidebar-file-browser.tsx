import React from "react";
import { Button } from "@ui/button";
import {
  Accordion,
  AccordionChevron,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ui/accordion";
import { SidebarFolder } from "./sidebar-folder";

export const SidebarFileBrowser = () => {
  const folders = [
    {
      id: "0",
      name: "Folder 1",
      files: [
        {
          id: "3",
          name: "Folder 3",
          files: [
            {
              id: "7",
              name: "Folder 7",
            },
          ],
        },
        {
          id: "4",
          name: "Folder 4",
        },
      ],
    },
    {
      id: "1",
      name: "Folder 2",
      files: [
        {
          id: "5",
          name: "Folder 5",
        },
        {
          id: "6",
          name: "Folder 6",
        },
      ],
    },
  ];

  return (
    <div className="flex-1 border-2 border-blue-500">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="all-files" className="border-b">
          <AccordionTrigger>
            <>
              <AccordionChevron />
              All Files
            </>
          </AccordionTrigger>
          <AccordionContent>
            {folders.map((folder) => (
              <SidebarFolder key={folder.id} folder={folder} level={1} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
