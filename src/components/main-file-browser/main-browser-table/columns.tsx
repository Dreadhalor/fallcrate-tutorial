'use client';

import { FallcrateFile } from '@/types';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@ui/button';
import { BrowserItemName } from './browser-item-name';
import { BrowserItemCheckbox } from './browser-item-checkbox';

export const columns: ColumnDef<FallcrateFile>[] = [
  {
    id: 'select',
    cell: ({ row }) => <BrowserItemCheckbox row={row} />,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='h-full w-[80px] justify-start rounded-none px-2'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          {column.getIsSorted() && (
            <ChevronDownIcon
              className='-mr-1 ml-1 transition-transform'
              style={{
                transform:
                  column.getIsSorted() === 'asc' ? 'rotate(180deg)' : '',
              }}
            />
          )}
        </Button>
      );
    },
    cell: ({ row: { original: file } }) => {
      return <BrowserItemName file={file} />;
    },
  },
  {
    accessorKey: 'type',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='h-full w-[70px] justify-start rounded-none px-2'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Type
          {column.getIsSorted() && (
            <ChevronDownIcon
              className='-mr-1 ml-1 transition-transform'
              style={{
                transform:
                  column.getIsSorted() === 'asc' ? 'rotate(180deg)' : '',
              }}
            />
          )}
        </Button>
      );
    },
    cell: ({ row }) => row.original.type,
  },
];
