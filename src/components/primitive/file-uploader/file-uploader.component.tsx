import React from "react";
import { FileUploaderComponentProps } from "./file-uploader.component.props";
import { Text } from "../text/text.component";
import { Box } from "../box/box.component";
import { IconSvg } from "../icon-svg/icon-svg.component";
import { styled } from "themes";

const Container = styled(Box)`
  border: 2px solid ${({ theme: { colors } }) => colors.border};
  border-radius: 0.5rem;
  width: 100% !important;
  padding: 1rem 2rem !important;
`;

const FormField = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:focus {
    outline: none;
  }
`;

const DeleteButton = styled(Text)`
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  margin-left: 1rem;
  background-color: ${({ theme: { colors } }) => colors.error};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: white;
  z-index: 999;

  &:hover {
    cursor: pointer;
  }
`;

const FileUploader: React.FunctionComponent<FileUploaderComponentProps> = (
  props: FileUploaderComponentProps
) => {
  const { file, setFile } = props;

  const handleUpload = (event: any) => {
    const file: File = event.target.files[0];
    setFile(file);
  };

  return (
    <>
      <Text variant="contentHeader" text="Attach Documents (Optional)" />
      <Container vCenter hCenter marginTop="tiny">
        {!file && (
          <>
            <FormField type="file" accept=".txt" onClick={handleUpload} />
            <IconSvg name="upload" />
            <Text text="Select File" />
          </>
        )}
        {file && (
          <Box row>
            <Text text={file.name} />
            <DeleteButton onClick={() => setFile(undefined)}>X</DeleteButton>
          </Box>
        )}
      </Container>
    </>
  );
};

export default FileUploader;
