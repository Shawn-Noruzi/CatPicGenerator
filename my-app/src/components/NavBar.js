import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#43b8e8",
    color: "#fff"
  },
});

export const NavBar = () => {
  const classes = useStyles();

  //   const [active, setActive] = useState({isActive: true});

  return (
    <div className={classes.root}>
      <Typography variant="h6" component="h6">
        Cat Picture Generator
      </Typography>
    </div>
  );
}
