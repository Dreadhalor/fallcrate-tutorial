export const useFirebaseStorageAdapter = () => {
  return {
    onUploadBegin: () => {
      alert('upload has begun');
    },

    onUploadProgress: (progress: number) => {
      console.log('progress', progress);
    },

    onUploadComplete: () => {
      alert('uploaded successfully!');
    },

    onUploadError: () => {
      alert('error occurred while uploading');
    },
  };
};
