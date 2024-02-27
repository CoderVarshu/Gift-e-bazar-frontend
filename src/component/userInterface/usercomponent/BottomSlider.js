import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { createRef } from "react";
import Slider from "react-slick";
import { ServerURL } from "../../services/ServerServices";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { useStyles } from "./BottomSliderCSS";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



export default function BottomSlider() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    var slider = createRef()
    var classes = useStyles()

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow:sm?2: matches ? 3 : 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay:true,

    };

    function handleLeftClick() {
        slider.current.slickNext()
    }
    function handleRightClick() {
        slider.current.slickPrev()
    }

    var images = [{
        id: 1,
        img: 'p1.webp',
        name: 'Ottawa Gift Shop'
    },
    {
        id: 2,
        img: 'p2.jpg',
        name: 'Toranto Gift Shop'
    },
    {
        id: 3,
        img: 'p4.webp',
        name: 'Calgalry Gift Shop'
    },
    {
        id: 4,
        img: 'p5.webp',
        name: 'Edmonton Gift Shop'
    },
    {
        id: 5,
        img: 'p6.avif',
        name: 'Winnipeg Gift shop'
    },
    {
        id: 6,
        img: 'p7.jpg',
        name: 'Missisuga Gift Shop'
    },
    {
        id: 7,
        img: 'p8.jpg',
        name: 'Brampton gift shop'
    },
    {
        id: 8,
        img: 'p9.jpg',
        name: 'Vancouver Gift Shop'
    }
    ]
    function playImages() {
        return images.map((item) => {
            return (
                <div style={{ display: 'flex' }}>
                    <div className={classes.pictures}
                        style={{
                            width:sm?220:matches?220: 300,
                            height:sm?220:matches?220: 300,
                            borderRadius:sm?120:matches?180: 185,
                        }}
                    >
                        <img src={`${ServerURL}/images/${item.img}`}
                            style={{
                                width: '100%',
                                height: 400,
                            

                            }}
                            className={classes.grow}
                        />

                    </div>
                    {/* <div
                    
                    style={{ fontSize:sm?16: 18,
                        fontWeight:sm?450: 500,
                         
                          marginRight:sm?0:0,
                         marginLeft:sm?35:matches? 50:70,
                        width:'100%',
                         justifyContent:'center',
                        marginTop: sm?24:24,
                        margin:sm?'0%': '2%'}}
                    >
                        {item.name}
                    </div> */}
                </div>

            )
        })
    }

    return (
        <div>
            {!matches ? <>
                {/* <KeyboardArrowLeftOutlinedIcon onClick={handleLeftClick} style={{ position: 'absolute', left: '3%', top:'40%', zIndex: 1, fontSize: 50, color:'darkslategrey' }} /> */}
            </> : <></>}

            <Slider ref={slider} {...settings}>
                {playImages()}
            </Slider>
            {!matches ? <>
                {/* <KeyboardArrowRightOutlinedIcon onClick={handleRightClick} style={{ fontSize: 50, position: 'absolute', right: '3%', top: '450%', zIndex: 1,color:'darkslategrey' }} /> */}
            </> : <></>}
        </div>

    )
}