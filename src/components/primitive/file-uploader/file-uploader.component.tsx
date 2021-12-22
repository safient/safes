import React from "react";
import { FileUploaderComponentProps } from "./file-uploader.component.props";

const FileUploader: React.FunctionComponent<FileUploaderComponentProps> = (
  props: FileUploaderComponentProps
) => {
  const [file, setFile] = React.useState<File>();

  const handleUpload = (event: any) => {
    setFile(event?.target?.files[0]);
    alert('name: ' + file?.name)
  };

  return (
    <div>
      <input type="file" accept=".txt" onClick={handleUpload} />
      <div>
        <p>Filename: {file?.name}</p>
        <p>File type: {file?.type}</p>
        <p>File size: {file?.size} bytes</p>
      </div>
    </div>
  );
};

export default FileUploader;
