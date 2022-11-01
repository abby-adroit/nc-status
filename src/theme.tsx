import { createTheme } from '@material-ui/core/styles';
import 'typeface-quicksand';
import { amber, orange,lightGreen,yellow } from '@material-ui/core/colors';
// import Quicksand from './fonts/';
// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#F0F0F0',
    },
    primary: { 
      light: '#DDE5FA',
      main: '#001856'
    },
    secondary: {
      light: '#F5F5F5',
      main: '#D3D3D3'
    },
    error: {
      main: '#822727'
    },
    success: {
      light: lightGreen[100],
      main: '#22A447',
      dark: lightGreen[900]
    },
    warning: {
      light: yellow[100],
      main: yellow[500],
      dark: orange[500],
      contrastText: '#000'
    },
    info: {
        main: '#D15842',
        contrastText: '#FFF'
    }
  },
  typography: {
    fontFamily: [
      'Quicksand',
      'sans-serif'
    ].join(','),
    
  },
  shape: {
    borderRadius: 14
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: amber[500],
        '&:hover': {
          backgroundColor: amber[500],
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: amber[500],
          },
        },
      }
    },
    MuiCard: {
      root: {
        boxShadow: '0px 16px 24px rgba(0,0,0,0.06), 0px 2px 6px rgba(0,0,0,0.04), 0px 0px 1px rgba(0,0,0,0.04)',
        padding: '15px',
        marginTop: '10px',
        height: '100%',
        // minHeight: '500px'
      }
    },
    MuiTypography: {
      subtitle1: {
        fontWeight: 'bold'
      }
    },
    MuiDialogTitle:{
      root: {
        padding: '10px 24px',
        borderBottom: '1px solid gainsboro'
      }
    },
    MuiListItemText: {
      primary: {
        fontSize: '13px'
      }
    },
    MuiList:{
      padding:{
        paddingTop: '0px',
        paddingBottom: '0px'
      }
    }
  },
  props: {
    MuiButton: {
      // disableRipple: true,
      variant: 'contained',
    },
    MuiTextField: {
      variant: 'outlined',
      InputLabelProps: {
        shrink: true,
      }
    }
  }
});

export default theme;
