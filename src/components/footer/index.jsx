import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid item xs={12} container className={classes.footer} justify="space-evenly" direction="row">
        <Typography variant="body2" className={classes.title}>
          © Copyright
          {' '}
          {new Date().getFullYear()}
          . Todos los derechos reservados / Verónica Pavana Lara
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;