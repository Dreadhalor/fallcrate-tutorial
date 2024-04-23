import { useUploadThing } from '@/lib/utils/uploadthing';
import { useEffect, useState } from 'react';

export const useFileUpload = () => {
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);

  useEffect(() => {
    console.log('filesToUpload', filesToUpload);
  }, [filesToUpload]);

  const { startUpload } = useUploadThing('imageUploader', {
    onClientUploadComplete: () => {
      alert('uploaded successfully!');
    },
    onUploadError: () => {
      alert('error occurred while uploading');
    },
    onUploadBegin: () => {
      alert('upload has begun');
    },
    onUploadProgress: (progress) => {
      console.log('progress', progress);
    },
  });

  return { startUpload, filesToUpload, setFilesToUpload };
};
