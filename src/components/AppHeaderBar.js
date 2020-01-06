import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "positionSticky"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#55B9C4"
  },
  title: {
    flexGrow: 1,
    color: "#55B9C4"
  },
  appBar: {
    background: "#1C1E21"
  }
}));
export default ({click}) => {
  let clicks = click;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Button variant="h6" onClick={()=>clicks(0)} className={classes.title}>
            Dog As a Service
          </Button>
          <Button variant="h6" onClick={()=>clicks(1)} className={classes.title}>
            Post a dog
          </Button>
          <Button variant="h6" onClick={()=>clicks(2)} className={classes.title}>
            Memes
          </Button>
          <Button variant="h6" onClick={()=>clicks(3)} className={classes.title}>
            About
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
