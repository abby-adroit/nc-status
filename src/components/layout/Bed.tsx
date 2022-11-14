import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import ChairIcon from "@mui/icons-material/Chair";
import BedIcon from "@mui/icons-material/Bed";
import HotelIcon from '@mui/icons-material/Hotel';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import { statusTypes } from "../../models/Status";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bedIcon: {
          position:'relative', 
          fontSize: '40px !important'
        },
        statLbl: {
          margin: 'unset',
          position:'relative', 
          top: -10
            },
        bedLbl: {
          textAlign: 'left',
          margin: 'unset',
          marginLeft: '10px'
        },
        locationBox: {
          borderRadius: '12px',
          textAlign: 'center',
          height: '75px'
        },
    }),
);

type bedProps = {
  bedName: string,
  bedStatus: string,
  bedType: number
}

export default function Bed({bedName, bedStatus, bedType}: bedProps) {
  const classes = useStyles();
  const [bgColor, setBgColor] = useState<string>('')
  const [fontColor, setFontColor] = useState<string>('')
  const [statusDisplay, setStatusDisplay] = useState<string>('')
  const [displayIcon, setDisplayIcon] = useState<string>('BedIcon')

  useEffect(() => {
    statusTypes.map( (status) => {
      if(bedStatus == status.statusName) {
        setBgColor(status.bgColor)
        setFontColor(status.textColor)
        setStatusDisplay(status.displayName)
      }
    })
  }, [bedStatus])
  

  return (
    <Box 
      className={classes.locationBox}
      sx={{
        color: fontColor,
        bgcolor: bgColor
      }}
    >
		<h4 className={classes.bedLbl}>{bedName}</h4>
      {/* {bedType==0 ? <BedIcon className={classes.bedIcon}/> : <ChairIcon className={classes.bedIcon}/>} */}
	  { (bedStatus=="CLEANING.NEEDED"||bedStatus=="CLEANING.IN.PROGRESS") ? <CleaningServicesIcon className={classes.bedIcon}/> : bedStatus=="OCCUPIED" ? <HotelIcon className={classes.bedIcon}/> : <BedIcon className={classes.bedIcon}/>  }
    <h4 className={classes.statLbl}>{statusDisplay}</h4>
    </Box>
  )
}