import React from 'react';
import {
  Accordion,
  AccordionChevron,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@ui/accordion';
import { FaFolder } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import { FallcrateFile } from '@/types';
import { useFilesystem } from '@/providers/filesystem-provider';
import { useSidebarFileBrowser } from './sidebar-file-browser';

type Props = {
  file: FallcrateFile;
  level?: number;
};
export const SidebarFolder = ({ file: { id, name }, level = 0 }: Props) => {
  const { files } = useFilesystem();
  const { openFiles, setOpenFiles } = useSidebarFileBrowser();

  const paddingPerLevel = 8;
  const childrenFolders = files.filter(
    (file) => file.type === 'folder' && file.parent === id,
  );
  const hasChildren = childrenFolders.length > 0;
  const Caret = hasChildren ? AccordionChevron : BsDot;

  return (
    <Accordion
      key={id}
      type='single'
      collapsible
      className='w-full'
      value={openFiles.includes(id) ? id : ''}
      onValueChange={(value) => {
        if (value) {
          setOpenFiles((prev) => [...prev, value]);
        } else {
          setOpenFiles((prev) => prev.filter((_id) => _id !== id));
        }
      }}
    >
      <AccordionItem value={id}>
        <AccordionTrigger>
          <>
            <Caret
              style={{
                marginLeft: `${paddingPerLevel * level}px`,
              }}
            />
            <FaFolder />
            {name}
          </>
        </AccordionTrigger>
        {hasChildren && (
          <AccordionContent>
            {childrenFolders.map((file) => (
              <SidebarFolder key={file.id} file={file} level={level + 1} />
            ))}
          </AccordionContent>
        )}
      </AccordionItem>
    </Accordion>
  );
};
