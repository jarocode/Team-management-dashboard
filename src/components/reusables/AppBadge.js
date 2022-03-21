import React from "react";
import { Badge } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  customBadge: ({ color, background }) => ({
    color,
    backgroundColor: background,
  }),
});

const AppBadge = ({ color, background, children, ...props }) => {
  const classes = useStyles({ color, background });

  return (
    <Badge classes={{ badge: classes.customBadge }} {...props}>
      {children}
    </Badge>
  );
};

export default AppBadge;
