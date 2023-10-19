import {styled,Box, Grid, Card, Typography, CardMedia} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

export const RootBox = styled(Box)(({theme}) => ({
    width:"100%",
    paddingTop:"20px",
}));

export const RootGrid = styled(Grid)(({theme}) => ({
    padding:"13px"
}));

export const StyledCard = styled(Card)(({theme}) => ({
    flexDirection:"column",
    
}));

export const StyledCardMedia = styled(CardMedia)(({theme}) => ({
    [theme.breakpoints.up("xs")]:{
        height:"100px"
    },
    [theme.breakpoints.up("sm")]:{
        height:"130px"
    },
    [theme.breakpoints.up("md")]:{
        height:"170px"
    },
    width:"100%",
    cursor:"pointer"
}));


export const StyledTypography = styled(Typography)(({theme}) => ({
    flexDirection:"column",
    cursor:"pointer",
    textTransform:"capitalize",
    marginTop:"3px",
    [theme.breakpoints.up("xs")]:{
        fontSize:"10px"
    },
    [theme.breakpoints.up("sm")]:{
        fontSize:"12px"
    },
    [theme.breakpoints.up("md")]:{
        fontSize:"13px"
    },
}));


export const SingleStudentImageBox = styled(Box)(({theme}) => ({
    display:"flex",
    justifyContent:"center",
    [theme.breakpoints.up("xs")]:{
        paddingTop:"5px"
    },
    [theme.breakpoints.up("sm")]:{
        paddingTop:"70px"
    },
    [theme.breakpoints.up("md")]:{
        paddingTop:"25px"
    }
}));

export const SingleStudentImage = styled(Box)(({theme}) => ({
    width:"90%",
    [theme.breakpoints.up("xs")]:{
        // width:"60%",
        height:"250px"
    },
    [theme.breakpoints.up("sm")]:{
        height:"200px",
    },
    [theme.breakpoints.up("md")]:{
        height:"300px"
    }
}));


export const StyledBox = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width:"100%"
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



