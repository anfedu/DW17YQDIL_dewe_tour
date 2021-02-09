import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import TableAdmin from "./TableAdmin";
import { QueryContext } from "../../src/Query";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#E5E5E5",
    padding: "50px 13vh 100px 13vh",
    minHeight: "81.7vh",
    [theme.breakpoints.down("md")]: {
      minHeight: "82.99vh",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "87.1vh",
    },
  },
  button: {
    height: 48,
    width: 150,
    backgroundColor: "#ffaf00",
    color: "white",
    textTransform: "none",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontFamily: "Nunito",
    fontSize: 36,
    fontWeight: 900,
    marginBottom: 17,
  },
}));

export default function Admin() {
  const classes = useStyles();
  const query = React.useContext(QueryContext);
  const { state, loading, getTransaction } = query;
  React.useEffect(() => {
    getTransaction();
  }, []);
  return (
    <Box variant="div" className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Incoming Transaction
      </Typography>
      <TableAdmin rows={state.transaction} />
    </Box>
  );
}
