import React from "react";
import {
  Accordion,
  AccordionChevron,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ui/accordion";
import { FaFolder } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

type Props = {
  folder: {
    id: string;
    name: string;
    files?: { id: string; name: string }[];
  };
  level?: number;
};
export const SidebarFolder = ({
  folder: { id, name, files = [] },
  level = 0,
}: Props) => {
  const paddingPerLevel = 8;
  const hasFiles = files.length > 0;
  const Caret = hasFiles ? AccordionChevron : BsDot;

  return (
    <Accordion key={id} type="single" collapsible className="w-full">
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
        {files.length > 0 && (
          <AccordionContent>
            {files.map((file) => (
              <SidebarFolder key={file.id} folder={file} level={level + 1} />
            ))}
          </AccordionContent>
        )}
      </AccordionItem>
    </Accordion>
  );
};
