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
import { Input } from '@ui/input';
import { Label } from '@ui/label';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};
export const CreateNewFolderDialog = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const { createFolder, currentFolder } = useFilesystem();
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) {
      setName('');
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create new folder</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input
              id='name'
              placeholder='Folder name'
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
              createFolder(name, currentFolder);
              setIsOpen(false);
              router.refresh();
            }}
          >
            Create!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
