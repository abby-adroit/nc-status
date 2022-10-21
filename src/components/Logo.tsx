import { Grid, Typography } from "@material-ui/core";
import { AirlineSeatIndividualSuite } from "@material-ui/icons";

export default function Logo() {
    return (
        <Grid 
            container
            justifyContent='flex-start' 
            alignItems='center'
        >
            {/* <Grid item> */}
                {/* <AirlineSeatFlatAngled color='secondary' style={{position:'relative', top:'0px', left:'0px',rotate:'30deg'}}/> */}
                {/* <AirlineSeatIndividualSuite color='secondary' style={{position:'relative', top:'3px', left:'-5px'}}/> */}
                
            {/* </Grid> */}
            <Grid item>
                <Typography component='h1' variant='h5'>
                    <strong>{process.env.app_title}</strong>
                </Typography>
            </Grid>
        </Grid>
    )
}