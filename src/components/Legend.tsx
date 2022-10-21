import { Box, createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { statusTypes } from '../models/Status'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        statVacant: {
          backgroundColor: theme.palette.success.main,
          color: '#FFFFFF',
          width: '100px',
          margin: '5px',
          borderRadius: '28px',
          textAlign: 'center'
        },
        statCleaning: {
          backgroundColor: theme.palette.warning.main,
          color: '#FFFFFF',
          width: '100px',
          margin: '5px',
          borderRadius: '28px',
          textAlign: 'center'
        },
        statOccupied: {
          backgroundColor: theme.palette.error.main,
          color: '#FFFFFF',
          width: '100px',
          margin: '5px',
          borderRadius: '28px',
          textAlign: 'center'
        }
    }),
);

export default function Legend() {
    const classes = useStyles();

    return (
        <Grid 
            container 
            spacing={1}
            justifyContent='center'
            alignItems='center'
        >
            {statusTypes?.map((status) => (
            
                <Grid item key={status.statusName} xs={1}>
                    <Box
                        className={
                            status.statusName=='VACANT' ? classes.statVacant : status.statusName=='OCCUPIED' ? classes.statOccupied : classes.statCleaning
                        }
                    >
                        <strong>{status.displayName}</strong>
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}
