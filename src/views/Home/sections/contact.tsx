import React, { useCallback, useState } from "react";
import { TextField, Container, Button, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Uploader } from "../../../components";
import { useForm } from "../../../hooks";
import { appDB } from "../../../firebase";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CircularProgress from "@material-ui/core/CircularProgress";

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

  const callBack = useCallback((f: FormState) => {
    console.log("submiting");
    setLoading(true);
    appDB
      .collection("contacts")
      .add(f)
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
        required: true,
        //eslint-disable-next-line
        regEx: /^([a-zA-Z0-9_-\u0600-\u065f\u066a-\u06EF\u06fa-\u06ff\ufb8a\u067e\u0686\u06af\u0750-\u077f\ufb50-\ufbc1\ufbd3-\ufd3f\ufd50-\ufd8f\ufd92-\ufdc7\ufe70-\ufefc\uFDF0-\uFDFD]+){2,100}$/
      },
      message: {
        required: false,
        //eslint-disable-next-line
        regEx: /^([a-zA-Z0-9_-\u0600-\u065f\u066a-\u06EF\u06fa-\u06ff\ufb8a\u067e\u0686\u06af\u0750-\u077f\ufb50-\ufbc1\ufbd3-\ufd3f\ufd50-\ufd8f\ufd92-\ufdc7\ufe70-\ufefc\uFDF0-\uFDFD]+){0,500}$/
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
