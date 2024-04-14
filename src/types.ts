export type FallcrateFile = {
  id: string;
  name: string;
  parent: string | null;
  type: 'folder' | 'file';
};
