import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import ChairIcon from "@mui/icons-material/Chair";
import BedIcon from "@mui/icons-material/Bed";
import { statusTypes } from "../../models/Status";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bedIcon: {
          position:'relative', 
          top: 10, 
          fontSize: '40px !important'
        },
        locName: {
          marginTop: 'unset'
        },
        locationBox: {
          borderRadius: '28px',
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

  useEffect(() => {
    statusTypes.map( (status) => {
      if(bedStatus == status.statusName) {
        setBgColor(status.bgColor)
        setFontColor(status.textColor)
      }
    })
  }, [bedStatus,bgColor])
  

  return (
    <Box 
      className={classes.locationBox}
      sx={{
        color: fontColor,
        bgcolor: bgColor
      }}
    >
      {bedType==0 ? <BedIcon className={classes.bedIcon}/> : <ChairIcon className={classes.bedIcon}/>}
      <h4 className={classes.locName}>{bedName}</h4>
    </Box>
  )
}