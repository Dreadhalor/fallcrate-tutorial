export type FallcrateFile = {
  id: string;
  name: string;
  parent: string | null;
  type: 'folder' | 'file';
  mimeType?: string;
  size?: number;
  uploadedBy?: string;
  createdAt?: string;
};
