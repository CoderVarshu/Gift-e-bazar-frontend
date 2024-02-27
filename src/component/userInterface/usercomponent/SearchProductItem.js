import { Paper } from "@mui/material";
import React from "react";
import { useStyles } from "./SeacrhProductItemCSS";
import { useNavigate } from "react-router-dom";
import { ServerURL } from "../../services/ServerServices";

export default function SearchProductItem(props) {
  const classes = useStyles()
  const navigate = useNavigate()

  var item = props.items



  return (

    <div>
      <Paper onClick={() =>
        navigate(props.url, { state: { productid: item.productid } })
      } elevation={4} style={{ cursor: 'pointer', borderRadius: '10px' }} className={classes.CategoryCard}>
        <div style={{ width: "100%", height: 100, display: 'flex', justifyContent: 'center' }}>
          <img src={`${ServerURL}/images/${item.picture}`} alt="img" width='50%' height='80%' className={classes.CategoryCardImage} style={{ display: 'flex', alignSelf: 'center' }} />
        </div>
        <div style={{
          fontFamily: 'poppins', alignSelf: 'center', marginTop: 10,
          fontSize: 14, fontWeight: 'bold', height: 55, color: 'black'
        }}>
          {item.productname.substring(0, 35) + "..."}
        </div>
      </Paper>
    </div>
  )

}