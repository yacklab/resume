import React from "react";
import { Typography } from "@material-ui/core";
import startCase from "lodash/startCase";
import toLower from "lodash/toLower";

export type TechName =
  | "angular"
  | "aws"
  | "digital-ocean"
  | "docker"
  | "express"
  | "firebase"
  | "flutter"
  | "git"
  | "github"
  | "ionic"
  | "lodash"
  | "nodejs"
  | "puppeteer"
  | "react"
  | "reactivex"
  | "sass"
  | "sourcetree"
  | "typescript";

interface TechIconProps {
  techName: TechName;
  height?: number;
  showName?: boolean;
  direction?: "row" | "column";
  dark?: boolean;
}

const darkVersions: { [key in TechName]?: string } = {
  express: "express_dark.svg"
};

const TechIcon: React.FunctionComponent<TechIconProps> = ({
  techName,
  height = 16,
  showName = false,
  direction = "column",
  dark = false
}) => {
  const assetName = dark
    ? darkVersions[techName]
      ? darkVersions[techName]
      : `${techName}.svg`
    : `${techName}.svg`;
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: direction,
          alignItems: "center"
        }}
      >
        <img
          height={height}
          style={{ margin: "5px 10px" }}
          src={`./stack/${assetName}`}
          alt={techName}
        />
        {showName && (
          <Typography display="block">
            {startCase(toLower(techName))}
          </Typography>
        )}
      </div>
    </React.Fragment>
  );
};

export default TechIcon;
