import React, { ChangeEvent } from 'react';
import { useMutation, gql } from '@apollo/client';

const UPLOAD_FILE = gql`
  mutation uploadFIle($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function UploadForm() {
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => console.log({ data }),
    onError: (err) => console.log({ err }),
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    uploadFile({ variables: { file } });
  };

  return (
    <div>
      <h1>Upload File</h1>
      <input type={'file'} onChange={handleFileChange} />
    </div>
  );
}
