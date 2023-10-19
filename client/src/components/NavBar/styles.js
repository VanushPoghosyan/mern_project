import {styled,Box, Toolbar, Typography, InputBase} from '@mui/material';

export const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

export const LogoTypography = styled(Typography)(({theme}) => ({
    [theme.breakpoints.up("xs")]:{
        fontSize:"12px"
    },
    [theme.breakpoints.up("sm")]:{
        fontSize:"15px"
    },
    [theme.breakpoints.up("md")]:{
        fontSize:"20px"
    },
}))
export const SearchBox = styled(Box)(({theme}) => ({
    display:"flex",
    alignItems:"center",
    background:"white",
    flexDirection:"column",
    [theme.breakpoints.up("xs")]:{
        width:"170px",
        height:"25px"
    },
    [theme.breakpoints.up("sm")]:{
        width:"200px",
        height:"28px"
    },
    [theme.breakpoints.up("md")]:{
        width:"250px",
        height:"30px"
    },
    width:"200px",
    // height:"30px",
    borderRadius:"3px",
}));
export const AuthTypography = styled(Typography)(({theme}) => ({
    color:"white",
    cursor:"pointer",
    [theme.breakpoints.up("xs")]:{
        fontSize:"12px"
    },
    [theme.breakpoints.up("sm")]:{
        fontSize:"15px"
    },
    [theme.breakpoints.up("md")]:{
        fontSize:"18px"
    },
    
}));

export const StyledInputBase = styled(InputBase)(({theme}) => ({
    [theme.breakpoints.up("xs")]:{
        fontSize:"12px"
    },
    [theme.breakpoints.up("sm")]:{
        fontSize:"14px"
    },
    [theme.breakpoints.up("md")]:{
        fontSize:"17px"
    },
    color:"black"
}));

export const StyledBox = styled(Box)(({theme}) => ({
    display:"flex",
    justifyContent:"space-between",
    gap:40,
    
}));

export const SearchListBox = styled(Box)(({theme}) => ({
    display:"flex",
    flexDirection:"column",
    background:"#515761",
    width:"100%",
    borderRadius:"5px",
    paddingBottom:"8px",
    marginTop:"5px"
}));

export const SearchItemBox = styled(Box)(({theme}) => ({
    display:"flex",
    alignItems:"center",
    cursor:"pointer",
    padding:"5px",
    ":hover":{
        background:"#383C43"
    }
}));

export const SearchItemName = styled(Typography)(({theme}) => ({
    fontsize:"20px",
    marginLeft:"15px"
}));
export const StyledAccount = styled(Box)(({theme}) => ({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
}));

export const StyledAccountName = styled(Typography)(({theme}) => ({
    marginLeft:"8px",
    textTransform:"capitalize",
    [theme.breakpoints.up("xs")]:{
        fontSize:"12px"
    },
    [theme.breakpoints.up("sm")]:{
        fontSize:"14px"
    },
    [theme.breakpoints.up("md")]:{
        fontSize:"17px"
    }
}));


