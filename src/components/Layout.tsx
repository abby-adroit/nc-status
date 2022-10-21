import { Box, Grid, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import axios from "axios";
import React, { useContext, useEffect, useState } from "react"
import useSWR from "swr";
import MainContext from "../contexts/mainContext";
import { groupList } from "../models/Groups"
import { Locations } from "../models/Locations";
import Bed from "./layout/Bed";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        roomBackground: {
          backgroundColor: theme.palette.secondary.main,
          borderRadius: 10,
        },
    }),
);


export default function Layout() {
  const classes = useStyles();
  const { data: locationList, error: locationListError } = useSWR<Locations[]>('/locations');
  const { isAPI, setIsAPI } = useContext(MainContext);
  

  useEffect(() => {
    getToken()
  }, [])
  
  useEffect(() => {
    if(locationListError){
      if(locationListError.response.status==401){
        console.log("Error: Unauthorised Server Access")
        getToken()
      }else{
        console.log("Error: Server Connection")
        setIsAPI(false)
      }
    }
  }, [locationListError])
  
  const getToken = () => {
    console.log("triggered token update.")
    axios.post('/devices/loginDevice')
    .then( (response) => {
      if(response.status == 200){
        console.log("Success: token received")
        setIsAPI(true)
      }else{
        console.log("Error: token not received -101")
        setIsAPI(false)
      }
    }).catch( () => {
      console.log("Error: token not received -102")
      setIsAPI(false)
    })
  }


  return (
    <Grid 
      container 
      spacing={3}
      justifyContent="flex-start"
      alignItems="center" 
    >
      {groupList.map((group) => (
        <Grid item xs={group.isPrivate==true ? 2 : 3} key={group.id}>
          <Box sx={{ m: 1 , p:2}} className={classes.roomBackground}>
            <Grid 
              container 
              justifyContent='space-around'
              alignItems='center'
              spacing={1}
            >
              {locationList?.map((loc) => (
                (group.id == loc.grpId) && (
                  <Grid item key={loc.locationId} xs={group.isPrivate==true ? 12 : 6}>
                    <Bed bedName={loc.locationName} bedStatus={loc.statusId} bedType={group.isPrivate==true ? 0:1}/>
                  </Grid>)
              ))}
            </Grid>
          </Box>
          <Typography variant='h6' component='h6' align='center'>
            {group.groupName}
          </Typography>
              
        </Grid>
      ))}
    </Grid>
  )
}

