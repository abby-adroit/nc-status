import { Box, Grid, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import React, { useContext, useEffect, useState } from "react"
import useSWR from "swr";
import { groupList } from "../models/Groups"
import { Locations } from "../models/Locations";
import MainContext from "../contexts/mainContext";
import Bed from "./layout/Bed";
import io from 'Socket.IO-client'
import axios from "axios";

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
  const { data: locationList, mutate: newLocationList } = useSWR<Locations[]>('/locations');
  const [counter, setCounter] = useState<number>(1)
  const { deviceToken, setDeviceToken, isAPI, setIsAPI, isSocket, setIsSocket } = useContext(MainContext);
  let socket;

  useEffect(() => {
    getToken()
    // socketConnect()
  })

  useEffect(() => {
    if(locationList){

    }else{
      if(counter > 3){
        console.log("Failed to connect to API, resetting deviceToken")
        setDeviceToken("")
      }else{
        console.log(`[${counter}]trying to connect...`)
        setCounter(counter + 1)
      }
    }
  }, [counter, locationList, setDeviceToken])

  const getToken = () => {
    console.log("devicetoken useeffect")
    if(deviceToken==""){
      axios.get('/register/Client111/droit4ppY')
      .then( (response) => {
          if(response.status == 200){
              setDeviceToken(response.data.token)
              setIsAPI(true)
          }else{
              console.log("2001: Something went wrong with connection")
              setIsAPI(false)
          }
      })
      .catch( (error) => {
          console.log("2002: Something went wrong with connection")
          setIsAPI(false)
      })
    }else{
      console.log(`Current token: ${deviceToken}`)
      axios.defaults.headers.common = {'Authorization': `bearer ${deviceToken}`}
    }
  }

  const socketConnect = async () => {
    await fetch('http://192.168.2.105:8888');
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })
    socket.on('field', msg => {
      console.log("Incoming field: "+msg);
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
              justifyContent='center'
              alignItems='center'
            >
              {locationList?.map((loc) => (
                (group.id == loc.grpId) && (
                  <Grid item key={loc.locationId} xs={group.isPrivate==true ? 12 : 6}>
                    {/* <Box className={classes.locVacant}>
                      <ChairIcon className={classes.chairIcon}/>
                      <h4 className={classes.locName}>{loc.locationName}</h4>
                    </Box> */}
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

