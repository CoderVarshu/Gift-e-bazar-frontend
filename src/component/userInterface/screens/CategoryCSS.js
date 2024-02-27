import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({

midimg: {
    transition: 'transform 2s',
    '&:hover': {
     boxShadow:'0 0 30px rgba(0,0,0.5)',
        transform: 'scale(0.9)'
    }
},
})