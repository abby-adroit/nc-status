import { Box, createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { statusTypes } from '../models/Status'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        statusBox: {
            maxHeight: '60px',
            padding: '10px',
            margin: '5px',
            borderRadius: '28px',
            textAlign: 'center'
        },
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
                <Box
                    key={status.statusName}
                    className={classes.statusBox}
                    sx={{
                        color: status.textColor,
                        bgcolor: status.bgColor
                    }}
                >
                    <strong>{status.displayName}</strong>
                </Box>
            ))}
        </Grid>
    )
}
