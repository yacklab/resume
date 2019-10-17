import React, { useCallback, useState } from "react";
import { TextField, Container, Button, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Uploader } from "../../../components";
import { useForm } from "../../../hooks";
import { appDB } from "../../../firebase";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useLanguageValue } from "../../../providers/language";

interface FormState {
  email: string;
  company: string;
  message: string;
  fileUrl: string;
}

const ContactSection = React.forwardRef<HTMLElement>((props, ref) => {
  const { t } = useTranslation();
  const [submited, setSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const { languageState } = useLanguageValue();
  const callBack = useCallback((f: FormState) => {
    setLoading(true);
    appDB
      .collection("contacts")
      .add({
        ...f,
        language: languageState.language
      })
      .then(() => {
        setSubmited(true);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const { state, disable, errors, handleOnChange, handleOnSubmit } = useForm<
    FormState
  >(
    {
      email: "",
      company: "",
      message: "",
      fileUrl: ""
    },
    {
      email: {
        required: true,
        //eslint-disable-next-line
        regEx: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      },
      company: {
        required: true
      },
      message: {
        required: false
      },
      fileUrl: {
        required: false
      }
    },
    callBack
  );

  return (
    <Container style={{ height: "100vh" }} ref={ref} maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {t("HOME.CONTACT.TITLE")}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {t("HOME.CONTACT.SUBTITLE")}
      </Typography>
      <form onSubmit={handleOnSubmit}>
        <TextField
          name="email"
          label="Email"
          value={state.email}
          required
          onChange={e => handleOnChange("email", e.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        {errors.email}
        <TextField
          name="company"
          label="Company"
          value={state.company}
          required
          onChange={e => handleOnChange("company", e.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        {errors.company}

        <Uploader
          text={t("HOME.CONTACT.FILE_TEXT")}
          onCompleted={fileUrl => handleOnChange("fileUrl", fileUrl)}
        />
        <TextField
          name="message"
          label="Message"
          value={state.message}
          onChange={e => handleOnChange("message", e.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth
          multiline
          rows="6"
        />
        {errors.message}

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          {!submited && !loading && (
            <Button
              type="submit"
              disabled={disable}
              style={{ display: "block" }}
              variant="contained"
              color="primary"
            >
              {t("WORDS.SEND")}
            </Button>
          )}
          {submited && !loading && <CheckCircleIcon color="secondary" />}
          {!submited && loading && <CircularProgress color="secondary" />}
        </div>
      </form>
    </Container>
  );
});

export default ContactSection;
