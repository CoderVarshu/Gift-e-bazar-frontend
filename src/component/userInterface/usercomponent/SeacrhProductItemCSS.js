import { makeStyles } from "@mui/styles";


export const useStyles=makeStyles({


    //Header Css
   
    toolbarMainDiv:{
        width:'98%',display:'flex',flexDirection:'row',alignItems:'center'
    },
    subDiv1:{
        fontFamily:'poppins',fontSize:24,color:'black',width:'15%'
    },
    headerimglogo:{
        width:'76%',padding:'5px 0'
    },
    subDiv2:{
        marginLeft:'auto',width:'5%',display:'flex',justifyContent:'space-between',marginRight:'3%'
    },


    //CategoryCard Css

    CategoryCard:{
        // background:'linear-gradient(0deg, rgba(26,89,187,1) 20%, rgba(6,81,132,1) 31%);',
        // background:'linear-gradient(to right, #00b09b, #96c93d)'  ,
      
    width:'72%',
    height:150,
    padding:10,
    display:'flex',
    // border:'1px solid lightpink',
    flexDirection:'column',
    margin:'10px 0',
    boxShadow:'2px 2px 2px  grey',
   
    },

    CategoryCardImage:{
       
        transition:'all 0.5s linear',
        "&:hover":{
            // animation:'spin 2s linear infinite'
            transform:'rotate(360deg)',
      }
    },

    CircleScrollImage:{
        transition:'all 0.8s linear',
        "&:hover":{
            transform:'scale(1.2)',
      }
    },
   
    
   


})