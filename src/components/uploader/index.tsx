import React from "react";
import CloudUpload from "@material-ui/icons/CloudUpload";
import styled from "styled-components";
import { Typography, Box } from "@material-ui/core";

const UploadContainer = styled(Box)`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 16px 0 8px 0;
`;

const Uploader = () => {
  return (
    <UploadContainer
      border={0.5}
      borderColor="borderColor"
      borderRadius="borderRadius"
    >
      <CloudUpload style={{ margin: "0 5px" }} color="inherit" />
      <Typography>Envoyer une fiche de poste</Typography>
    </UploadContainer>
  );
};

export default Uploader;
