
import { useLocation, useNavigate } from "react-router-dom";

import { useEffect,useState } from "react";

import { Grid } from "@mui/material";


import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Header from "../usercomponent/Header"
import Spacer from "../../Spacer";
import SearchProductItem from "../usercomponent/SearchProductItem";
import { postData } from "../../services/ServerServices";
export default function Searchproduct(){

    const location=useLocation()
    const navigate=useNavigate()
    const[searchProductList,setSearchProductList]=useState([])
//select *from productlist where productlistname like '%amul moti%'
    const fetchProductsFromSearchBar=async()=>{
        var result=await postData('userinterface/fetch_products_from_search_bar',{keyword:location.state.search})
        setSearchProductList(result.data)
    }

    

    useEffect(function(){
        fetchProductsFromSearchBar()
    },[location.state.search])

    
    const listOfProducts=()=>{
        return searchProductList.map((item)=>{
            return(
                <Grid item xs={2}>
                    {/* <SingleProductCard items={item} url="/productpage" /> */}
                    <SearchProductItem items={item} url="/allproduct" />
                </Grid>
                
            )
        })
    }

    return(
<div>
    <Header/>
    <Spacer />
            <Spacer />
            <Spacer />
        <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
        <Grid container spacing={2} style={{width:'90%'}}>
           <Grid item xs={12}>
           <div style={{ fontFamily: 'poppins', fontSize:20, fontWeight: 'bold',display:'flex',alignItems:'center'}}> <span onClick={()=>  navigate(-1)} style={{ alignItems:'center',display:'flex',marginRight:50,cursor:'pointer'}}><NavigateBeforeIcon />Back</span> Search Result ({searchProductList.length} Items)</div>
           </Grid>
         
                
          {/*<div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}> */}
          { listOfProducts()}
          {/* </div> */}
            </Grid>
       
        </div>
</div>
    )
}