import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import { statusTypes } from "../../models/Status";
import Icon from "../../utils/icon";

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
  const [displayIcon, setDisplayIcon] = useState<string>('KingBed')


  useEffect(() => {
    statusTypes.map( (status) => {
      if(bedStatus == status.statusName) {
        setBgColor(status.bgColor)
        setFontColor(status.textColor)
        setStatusDisplay(status.displayName)
        setDisplayIcon(status.icon)
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
    <Icon name={displayIcon} />
    <h4 className={classes.statLbl}>{statusDisplay}</h4>
    </Box>
  )
}