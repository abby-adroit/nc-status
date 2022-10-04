import { Button, Grid, Typography } from "@material-ui/core";
import { Assessment, ExitToApp, Home, Message, Settings, Sms } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Router from "next/router";
import { lightBlue } from "@material-ui/core/colors";
import MainContext from "../contexts/mainContext";
// import Logo from "./Logo";
import axios from "axios";
import { Locations } from "../models/Locations";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttonVacant: {
            backgroundColor: theme.palette.success.main,
            color: '#FFFFFF'
        },
        buttonCleaning: {
            backgroundColor: theme.palette.warning.main,
            color: '#FFFFFF'
        },
        buttonOccupied: {
            backgroundColor: theme.palette.error.main,
            color: '#FFFFFF'
        }
    }),
);

interface SidebarProps{
    locationList?: Locations[]
}

export default function Sidebar({locationList}:SidebarProps) {
    const classes = useStyles();

    return (
            <Grid
                container
                direction='column'
                justifyContent='flex-start'
                alignItems='center'
            >
                <Grid item>
                    <h2>VACANT</h2>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        spacing={1}
                        direction='column'
                        justifyContent='flex-start'
                    >
                        {locationList?.map((row) => (
                            <Grid item key={row.locationId}>
                                <Button 
                                    variant='contained'
                                    className={classes.buttonVacant}
                                >{row.locationName}</Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                
            </Grid>
    )
}
