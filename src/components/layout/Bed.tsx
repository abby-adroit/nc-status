import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Box } from "@material-ui/core";
import React from "react"
import ChairIcon from "@mui/icons-material/Chair";
import BedIcon from "@mui/icons-material/Bed";

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
        locVacant: {
          backgroundColor: theme.palette.success.main,
          color: '#FFFFFF',
          width: '100px',
          margin: '5px',
          borderRadius: '28px',
          textAlign: 'center'
        },
        locCleaning: {
          backgroundColor: theme.palette.warning.main,
          color: '#FFFFFF',
          width: '100px',
          margin: '5px',
          borderRadius: '28px',
          textAlign: 'center'
        },
        locOccupied: {
          backgroundColor: theme.palette.error.main,
          color: '#FFFFFF',
          width: '100px',
          margin: '5px',
          borderRadius: '28px',
          textAlign: 'center'
        }
    }),
);

type bedProps = {
  bedName: string,
  bedStatus: string,
  bedType: number
}

export default function Bed({bedName, bedStatus, bedType}: bedProps) {
  const classes = useStyles();

  return (
    <Box className={
      bedStatus=='VACANT' ? classes.locVacant : bedStatus=='OCCUPIED' ? classes.locOccupied : classes.locCleaning
    }>
    {bedType==0 ? <BedIcon className={classes.bedIcon}/> : <ChairIcon className={classes.bedIcon}/>}
    <h4 className={classes.locName}>{bedName}</h4>
  </Box>
  )
}