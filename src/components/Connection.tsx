import { Box, Typography, createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useContext } from 'react'
import MainContext from '../contexts/mainContext';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        isConnected: {
          color: theme.palette.success.main,
        },
        isDisconnected: {
          color: theme.palette.error.main,
        }
    }),
);

export default function Connection() {
    const { isAPI, setIsAPI } = useContext(MainContext);
    const classes = useStyles();

  return (
    <Box mr={1} className={ isAPI ? classes.isConnected : classes.isDisconnected}>
      <Typography component='h1' variant='subtitle1'>
        <strong>{isAPI ? 'Live':'Disconnected'}</strong>
      </Typography>
    </Box>
  )
}
