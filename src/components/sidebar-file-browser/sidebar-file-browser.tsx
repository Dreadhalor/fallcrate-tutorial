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
import { useFilesystem } from '@/providers/filesystem-provider';

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
  const { files } = useFilesystem();
  const topLevelFolders = files.filter(
    (file) => file.type === 'folder' && !file.parent,
  );
  const [openFiles, setOpenFiles] = React.useState<string[]>([]);

  return (
    <SidebarFileBrowserContext.Provider value={{ openFiles, setOpenFiles }}>
      <div className='flex-1'>
        <Accordion
          type='single'
          defaultValue='all-files'
          collapsible
          className='w-full'
        >
          <AccordionItem value='all-files' className='border-b'>
            <AccordionTrigger>
              <>
                <AccordionChevron />
                All Files
              </>
            </AccordionTrigger>
            <AccordionContent>
              {topLevelFolders.map((file) => (
                <SidebarFolder key={file.id} file={file} level={1} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </SidebarFileBrowserContext.Provider>
  );
};
