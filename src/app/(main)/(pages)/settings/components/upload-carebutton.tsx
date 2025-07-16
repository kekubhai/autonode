'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import * as LR from '@uploadcare/file-uploader';
import { useRouter } from 'next/navigation';
import '@uploadcare/react-uploader/core.css';

interface Props {
  onUpload?: (fileUrl: string) => void;
}

const UploadCareButton = ({onUpload}:Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);

  // Function to handle upload success
  const handleUpload = useCallback(async (cdnUrl: string) => {
    console.log('File uploaded:', cdnUrl);
    router.refresh();
  }, [router]);

  // Event listener for Uploadcare Blocks uploader
  useEffect(() => {
    const currentRef = ctxProviderRef.current;
    const handleFileUpload = async (e: any) => {
      const fileUrl = e.detail.cdnUrl;
      if (fileUrl) {
        await handleUpload(fileUrl);
      }
    };

    currentRef?.addEventListener('file-upload-success', handleFileUpload);
    return () => {
      currentRef?.removeEventListener('file-upload-success', handleFileUpload);
    };
  }, [handleUpload]);

  return (
    <div className="p-4 space-y-6">
      {/* React Uploader */}
      <div className="border p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Drop your Files here</h2>
        <FileUploaderRegular
          sourceList="local, camera, facebook, gdrive"
          cameraModes="photo, video"
          classNameUploader="uc-light"
          pubkey="15f8fd37636ae1525cdf"
          onFileAdded={(file) => file && file.cdnUrl && handleUpload(file.cdnUrl)}
        />
      </div>

      {/* Uploadcare Blocks Uploader */}
    
    </div>
  );
};

export default UploadCareButton;
