'use client'
import React, { useEffect, useRef } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lr-config': any;
      'lr-file-uploader-regular': any;
      'lr-upload-ctx-provider': any;
    }
  }
}
import * as LR from "@uploadcare/file-uploader"
import { useRouter } from 'next/navigation'

type Props = {
  onUpload: (e: string) => any
}



const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null)

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl)
      if (file) {
        router.refresh()
      }
    }
    ctxProviderRef.current?.addEventListener('file-upload-success', handleUpload)
  }, [])

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="a9428ff5ff90ae7a64eb"
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
       
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
    </div>
  )
}

export default UploadCareButton