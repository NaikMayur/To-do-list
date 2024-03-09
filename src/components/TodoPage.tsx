import { Card, CardContent, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles((theme: any) => ({
  mainContainer: {
    alignItems: "center",
    backgroundColor: "red",
    display: "flex",
    height: "100vh",
  },
}));

const TodoPage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      className={classes.mainContainer}
      justifyContent="center"
    >
      <Grid item>
        <Card>
          <CardContent draggable>card 1</CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardContent draggable>card 1</CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardContent draggable>card 1</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TodoPage;
