import React from "react";
import {
  Link as RRouterLink,
  LinkProps as RouterLinkProps
} from "react-router-dom";

export const RouterLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => <RRouterLink innerRef={ref} {...props} />
);
