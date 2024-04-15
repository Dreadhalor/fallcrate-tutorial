'use client';

import { FallcrateFile } from '@/types';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@ui/button';
import { FaFile, FaFolder } from 'react-icons/fa';
import { Checkbox } from '@ui/checkbox';

export const columns: ColumnDef<FallcrateFile>[] = [
  {
    id: 'select',
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='h-5 w-5'
      />
    ),
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
    cell: ({
      row: {
        original: { name, type },
      },
    }) => {
      return (
        <div className='flex items-center gap-2'>
          {type === 'folder' && <FaFolder size={18} />}
          {type === 'file' && <FaFile size={18} />}
          {name}
        </div>
      );
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
