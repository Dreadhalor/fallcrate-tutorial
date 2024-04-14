'use client';

import React from 'react';
import {
  Accordion,
  AccordionChevron,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@ui/accordion';
import { SidebarFolder } from './sidebar-folder';
import { useFiles } from '@/providers/file-provider';

type SidebarFileBrowserContextValue = {
  openFiles: string[];
  setOpenFiles: React.Dispatch<React.SetStateAction<string[]>>;
};
const SidebarFileBrowserContext = React.createContext(
  {} as SidebarFileBrowserContextValue,
);
export const useSidebarFileBrowser = () =>
  React.useContext(SidebarFileBrowserContext);

export const SidebarFileBrowser = () => {
  const { files } = useFiles();
  const topLevelFiles = files.filter((file) => !file.parent);
  const [openFiles, setOpenFiles] = React.useState<string[]>([]);

  return (
    <SidebarFileBrowserContext.Provider value={{ openFiles, setOpenFiles }}>
      <div className='flex-1 border-2 border-blue-500'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='all-files' className='border-b'>
            <AccordionTrigger>
              <>
                <AccordionChevron />
                All Files
              </>
            </AccordionTrigger>
            <AccordionContent>
              {topLevelFiles.map((file) => (
                <SidebarFolder key={file.id} file={file} level={1} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </SidebarFileBrowserContext.Provider>
  );
};
