import React, { useState } from "react";
import { TextField, Container, Button, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Uploader } from "../../../components";
interface FormState {
  email: string;
  company: string;
  message: string;
}

const ContactSection = React.forwardRef<HTMLElement>((props, ref) => {
  const { t } = useTranslation();
  const [values, setValues] = useState<FormState>({
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (fieldName: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [fieldName]: e.target.value
      });
    };
  };

  return (
    <Container style={{ height: "100vh" }} ref={ref} maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {t("HOME.CONTACT.TITLE")}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {t("HOME.CONTACT.SUBTITLE")}
      </Typography>
      <form>
        <TextField
          label="Email"
          value={values.email}
          required
          onChange={handleChange("email")}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Company"
          value={values.company}
          required
          onChange={handleChange("company")}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Uploader />
        <TextField
          label="Message"
          value={values.message}
          onChange={handleChange("message")}
          margin="normal"
          variant="outlined"
          fullWidth
          multiline
          rows="6"
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <Button
            style={{ display: "block" }}
            variant="contained"
            color="primary"
          >
            {t("WORDS.SEND")}
          </Button>
        </div>
      </form>
    </Container>
  );
});

export default ContactSection;
