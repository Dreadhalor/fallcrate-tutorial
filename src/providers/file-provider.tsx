"use client";

import { FallcrateFile } from "@/types";
import React, { useState } from "react";

type FileContextValue = {
  files: FallcrateFile[];
};

const FileContext = React.createContext({} as FileContextValue);
export const useFiles = () => React.useContext(FileContext);

export const FileProvider = ({ children }: { children: React.ReactNode }) => {
  const [files] = useState<FallcrateFile[]>([
    {
      id: "1",
      name: "File 1",
      parent: null,
    },
    {
      id: "2",
      name: "File 2",
      parent: null,
    },
    {
      id: "3",
      name: "File 3",
      parent: "1",
    },
    {
      id: "4",
      name: "File 4",
      parent: "1",
    },
    {
      id: "5",
      name: "File 5",
      parent: "2",
    },
    {
      id: "6",
      name: "File 6",
      parent: "2",
    },
    {
      id: "7",
      name: "File 7",
      parent: "3",
    },
  ]);

  return (
    <FileContext.Provider value={{ files }}>{children}</FileContext.Provider>
  );
};
