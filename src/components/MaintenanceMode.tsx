import { Card, CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import maintenancepic from '../images/maintenance.png'
import Image from 'next/image'

export default function MaintenanceMode() {
    return (
        <div>
            <Grid 
                container 
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={3}>
                    <Image 
                        src={maintenancepic}
                        alt="Maintenance Picture"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h3'>
                        We'll be back soon!
                    </Typography>
                    <Typography variant='subtitle1'>
                        <strong>We are currently performing scheduled maintenance. We will be back shortly. Thank you for your patience.</strong>
                    </Typography>
                </Grid>
            </Grid>
            
            
        </div>
    )
}
