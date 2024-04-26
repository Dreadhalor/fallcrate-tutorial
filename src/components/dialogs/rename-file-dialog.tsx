import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useFilesystem } from '@/providers/filesystem-provider';
import { FallcrateFile } from '@/types';
import { Input } from '@ui/input';
import { Label } from '@ui/label';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  file: FallcrateFile;
};
export const RenameFileDialog = ({ file, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(file.name);
  const { renameFile } = useFilesystem();
  const router = useRouter();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>
            Rename {`${file.type === 'file' ? 'file' : 'folder'}`}
          </DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input
              id='name'
              placeholder={file.name}
              className='col-span-3'
              value={name}
              autoComplete='off'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant='outline'
            type='reset'
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type='submit'
            disabled={!name}
            onClick={() => {
              renameFile(file.id, name);
              setIsOpen(false);
              router.refresh();
            }}
          >
            Rename
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
