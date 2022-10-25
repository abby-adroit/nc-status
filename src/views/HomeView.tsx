import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Copyright from "../components/Copyright";
import theme from "../theme";
import Logo from "../components/Logo";
import DateTime from "../components/DateTime";
import Legend from "../components/Legend";
import Connection from "../components/Connection";
import ConfirmMaintenance from "../components/ConfirmMaintenance";
import MaintenanceMode from "../components/MaintenanceMode";


const useStyles = makeStyles(() =>
  createStyles({
    root: {
        margin: '30px'
    },
    header: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '60px 60px 0px 0px',
        padding: '10px 40px',
        height: '50px',
        color: '#FFF'
    },
    container: {
        backgroundColor: '#FFF',
        padding: '30px',
        borderRadius: '0px 0px 60px 60px',
        marginBottom: '5px',
        height: '720px'
    },
    sideBorder: {
        borderLeft: '2px #EBEBEB solid',
        // borderLeft: '2px #000000 solid',
    },
    lessPadding: {
        padding: '-20px',
    }
  }),
);

export default function HomeView(props:any) {
    const classes = useStyles();
    const [openConfirm, setOpenConfirm] = useState<boolean>(false);
    const [maintenanceMode, setMaintenanceMode] = useState<boolean>(false);
    
    const handleClick = (e: { detail: any; }) => {
        if (e.detail == 3){
            console.log("triple click");
            setOpenConfirm(true);
        }
    }
    
    
    return (
        <div className={classes.root}>
            <Grid 
                container
                justifyContent="space-between"
                alignItems="center"
                className={classes.header}
            >
                <Grid item xs={6} onClick={handleClick}>
                    <Logo/>
                </Grid>

                
                <Grid item xs={6}>
                    <Grid 
                        container
                        spacing={3}
                        justifyContent="flex-end"
                        alignItems="flex-end"
                    >
                        <Connection />
                        <DateTime />
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                className={classes.container}
            >
                <Grid
                    container
                    spacing={7}
                >
                    <Grid item xs={12}>
                        {maintenanceMode ? <MaintenanceMode /> : props.children}
                    </Grid>
                </Grid>
                {!maintenanceMode && <Legend/>}
            </Grid>
            <ConfirmMaintenance onOpenConfirm={setOpenConfirm} openConfirm={openConfirm} onMaintenanceMode={setMaintenanceMode} maintenanceMode={maintenanceMode}/>
            <Copyright />
        </div>
    )
}
