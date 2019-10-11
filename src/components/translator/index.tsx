import React from "react";
import { useTranslation } from "react-i18next";

interface TranslatorProps extends React.HTMLAttributes<HTMLDivElement> {
  k: string;
}

const Translator: React.FunctionComponent<TranslatorProps> = ({
  k,
  ...restProps
}) => {
  const { t } = useTranslation();
  return <div {...restProps} dangerouslySetInnerHTML={{ __html: t(k) }} />;
};

export default Translator;
