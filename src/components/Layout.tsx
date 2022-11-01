import { Box, Grid, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import axios from "axios";
import React, { useContext, useEffect } from "react"
import useSWR from "swr";
import MainContext from "../contexts/mainContext";
import { groupList } from "../models/Groups"
import { Locations } from "../models/Locations";
import Room from "./layout/Room";
import nursepic from '../images/nurse.png'
import Image from 'next/image'
import ComputerIcon from "@mui/icons-material/Computer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        roomBackground: {
          backgroundColor: theme.palette.primary.light,
          borderRadius: 10,
          textAlign: 'center',
        },
        stationIcon: {
          color: theme.palette.primary.main,
          position:'relative', 
          top: 10, 
          fontSize: '80px !important'
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
        console.log("Error: Server Connection "+locationListError.response.status)
        setIsAPI(false)
      }
    }else{
      if(!isAPI){
        setIsAPI(true)
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
      alignItems="flex-start" 
    >
      {groupList.map((group) => (
        <Grid item xs={group.isPrivate==true ? 2 : 3} key={group.id}>
          <Room groupId={group.id} isPrivate={group.isPrivate} locationList={locationList}/>
          <Typography variant='h6' component='h6' align='center'>
            {group.groupName}
          </Typography>
        </Grid>
      ))}
      {/* nurse station */}
      <Grid item xs={2}>
        <Box sx={{ m: 1 , p:2}} className={classes.roomBackground}>
          {/* <div style={{borderRadius: '90px', overflow: 'hidden'}}>
          <Image  
              src={nursepic}
              alt="Nurse Picture"
          />
          </div> */}
          <ComputerIcon className={classes.stationIcon}/>
          <Typography variant='subtitle1' align='center'>
            Nurse Station
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

