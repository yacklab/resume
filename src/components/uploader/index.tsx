import React, { useRef, useState, useCallback } from "react";
import CloudUpload from "@material-ui/icons/CloudUpload";
import styled from "styled-components";
import { Typography, Box, LinearProgress } from "@material-ui/core";
import { appStorage } from "../../firebase";
import { v4 } from "uuid";
import { useTranslation } from "react-i18next";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useStyle } from "../../hooks";
import { useThemeValue, THEME_NAMES } from "../../providers/theme";

const UploadContainer = styled(Box)`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 16px 0 8px 0;
  border-radius: 4px;
`;

const Label = styled.label`
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

const acceptedTypes = ["application/pdf"];

interface UploaderProps {
  onCompleted: (url: string) => void;
  text: string;
}

const Uploader: React.FunctionComponent<UploaderProps> = ({
  onCompleted,
  text
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<{ error: boolean; message: string }>({
    error: false,
    message: ""
  });
  const [uploadState, setUploading] = useState({
    uploading: false,
    completed: false,
    progress: 0
  });
  const storeRef = appStorage.ref();
  const { t } = useTranslation();
  const classes = useStyle();
  const { themeState } = useThemeValue();

  const handleFileSubmit = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (inputRef.current && inputRef.current.files) {
        const { files } = inputRef.current;
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (!acceptedTypes.includes(file.type)) {
            setError({
              error: true,
              message: `${t("ERRORS.FILE_TYPE")} : ${file.type}`
            });
            continue;
          }
          setError({
            error: false,
            message: ""
          });

          const child = storeRef.child(`/uploads/${file.name}_${v4()}`);
          const upload = child.put(file);

          upload.on("state_changed", (snapshot: any) => {
            var progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setUploading({
              uploading: true,
              progress,
              completed: false
            });
          });

          upload.then(snapshot => {
            const url = snapshot.metadata.fullPath;
            if (url) {
              onCompleted(url);
              setUploading({
                uploading: false,
                completed: true,
                progress: 0
              });
            } else {
              setError({
                error: true,
                message: t("ERRORS.UNKNOWN")
              });
            }
          });
        }
      }
    },
    [storeRef, onCompleted, t]
  );
  return (
    <React.Fragment>
      <UploadContainer
        border={0.5}
        style={{
          borderColor: error.error
            ? "red"
            : themeState.themeName === THEME_NAMES.DARK
            ? "rgb(245, 248, 250, 0.3)"
            : "rgb(48, 64, 77, 0.3)"
        }}
      >
        {!uploadState.uploading && !uploadState.completed && (
          <React.Fragment>
            <Label htmlFor="fileinput">
              <CloudUpload style={{ margin: "0 5px" }} color="inherit" />
              <Typography align="center">{text}</Typography>
            </Label>
            <input
              id="fileinput"
              name="fileinput"
              className={classes.fileInput}
              ref={inputRef}
              type="file"
              onChange={handleFileSubmit}
            />
          </React.Fragment>
        )}
        {uploadState.uploading && !uploadState.completed && (
          <div style={{ flexGrow: 1, margin: "0 10px" }}>
            <LinearProgress
              color="secondary"
              variant="determinate"
              value={uploadState.progress}
            />
          </div>
        )}
        {uploadState.completed && !uploadState.uploading && (
          <div>
            <CheckCircleIcon color="secondary" />
          </div>
        )}
      </UploadContainer>
      {error.message}
    </React.Fragment>
  );
};

export default Uploader;
