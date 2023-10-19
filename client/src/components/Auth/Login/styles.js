import LoadingButton from '@mui/lab/LoadingButton';
import {styled,Box, Typography, TextField} from '@mui/material';

export const RootBox = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
    height:"100vh"
}));

export const StyledBox = styled(Box)(({theme}) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "20px",
      background:"#CDD0D5",
      borderRadius:"5px",
      boxShadow: "12px 12px 2px 1px #ACB0BA",
      [theme.breakpoints.up("xs")]:{
        width:"350px"
    },
    [theme.breakpoints.up("sm")]:{
        width:"400px"
    },
    [theme.breakpoints.up("md")]:{
        width:"450px"
    },
}));

export const StyledTitle = styled(Typography)(({theme}) => ({
    [theme.breakpoints.up("xs")]:{
        fontSize:"20px"
    },
    [theme.breakpoints.up("sm")]:{
        fontSize:"25px"
    },
    [theme.breakpoints.up("md")]:{
        fontSize:"35px"
    },
}));

export const StyledTextField = styled(TextField)(({theme}) => ({
    
}));

export const StyledLoadingButton = styled(LoadingButton)(({theme}) => ({
    background:"#6B7280",
    width:"100%",
    padding:"10px",
    marginTop:"15px",
    ":hover":{
        background:"#383C43"
    }
}));

export const StyledAuthTypography = styled(Typography)(({theme}) => ({
    fontSize: "12px",
    marginTop: "20px",
    textTransform: "capitalize",
}));

export const StyledLink = styled(Box)(({theme}) => ({
    fontSize: "12px",
    marginLeft: "3px",
    color:"#0B61EE",
    cursor:"pointer",
    fontWeight:600,
    ":hover":{
        color:"#063583"
    }
}));