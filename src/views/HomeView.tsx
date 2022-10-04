import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Copyright from "../components/Copyright";
import theme from "../theme";
import Logo from "../components/Logo";
import { statusTypes } from "../models/Status";
import { groupList } from "../models/Groups";


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
        height: '690px'
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
    // const { data: locationList } = useSWR<Locations[]>('/locations');
    // console.log(locationList);
    console.log(statusTypes);
    console.log(groupList);
    
    return (
        <div className={classes.root}>
            <Container className={classes.header}> 
                <Logo />
            </Container>
            <Container maxWidth="lg" className={classes.container}>
                <Grid
                    container
                    spacing={7}
                >
                    {/* <Grid item xs={2}>
                        <Sidebar locationList={locationList}/>
                    </Grid> */}
                    {/* <Grid item xs={12} className={classes.sideBorder}> */}
                    <Grid item xs={12}>
                        {props.children}
                    </Grid>
                </Grid>
            </Container>
            
            <Copyright />
        </div>
    )
}
