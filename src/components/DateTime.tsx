import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getCurrentDayDateMonthYear, getCurrentHHourMin } from '../utils/moment-utils'

export default function DateTime() {
    const [currDate, setCurrDate] = useState<string>('');
    const [currTime, setCurrTime] = useState<string>('');

    useEffect(() => {
        setInterval(() => {
            const readableDate = getCurrentDayDateMonthYear();
            const readableTime = getCurrentHHourMin();
    
            setCurrDate(readableDate)
            setCurrTime(readableTime)
        }, 1000)
    }, [])
    

    
  return (
    <Typography component='h1' variant='subtitle1'>
        {currDate} {currTime}
    </Typography>
  )
}
