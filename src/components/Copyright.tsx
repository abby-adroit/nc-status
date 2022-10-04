import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        {/* <MuiLink color="inherit" href="http://adroiti.com.sg/" target="_blank"> */}
            Adroit Instrumentation Pte Ltd
        {/* </MuiLink>{' '} */}
        {' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    )
}
