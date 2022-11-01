import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import useSWR from 'swr';
import MainContext from '../../contexts/mainContext';
import { Locations } from '../../models/Locations';
import Bed from './Bed';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        roomBackground: {
          backgroundColor: theme.palette.secondary.light,
          borderRadius: 10,
        },
    }),
);

type roomProps={
    groupId: string,
    isPrivate: boolean,
    locationList: Locations[] | undefined
}

export default function Room({groupId, isPrivate, locationList}: roomProps) {
    const classes = useStyles();
    const { isAPI, setIsAPI } = useContext(MainContext);

    return (
        <Box sx={{ m: 1 , p:2}} className={classes.roomBackground}>
            <Grid 
                container 
                justifyContent='space-around'
                alignItems='center'
                spacing={1}
            >
                {locationList?.map((loc) => (
                (groupId == loc.grpId) && (
                    <Grid item key={loc.locationId} xs={isPrivate==true ? 12 : 6}>
                        <Bed bedName={loc.locationName} bedStatus={loc.statusId} bedType={isPrivate==true ? 0:1}/>
                    </Grid>)
                ))}
            </Grid>
        </Box>
    )
}
