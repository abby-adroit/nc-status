import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Copyright from "../components/Copyright";
import theme from "../theme";
import Logo from "../components/Logo";
import DateTime from "../components/DateTime";
import Legend from "../components/Legend";
import Connection from "../components/Connection";


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
    
    return (
        <div className={classes.root}>
            {/* <Container className={classes.header}>  */}
                <Grid 
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    className={classes.header}
                >
                    <Grid item xs={6}>
                        <Logo />
                    </Grid>

                    
                    <Grid item xs={6}>
                        <Grid 
                            container
                            spacing={3}
                            justifyContent="flex-end"
                            alignItems="flex-end"
                        >
                            {/* <Grid item xs={1}> */}
                                <Connection />
                                <DateTime />
                            {/* </Grid> */}
                        </Grid>
                        
                    </Grid>
                </Grid>
            {/* </Container> */}
            {/* <Container maxWidth="lg" className={classes.container}> */}
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
                            {props.children}
                        </Grid>
                    </Grid>
                    <Legend/>
                </Grid>
            {/* </Container> */}
            <Copyright />
        </div>
    )
}
