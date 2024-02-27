import { useNavigate } from "react-router-dom"
import { useStyles } from "./CategoryCSS"


export default function Category() {
    var navigate = useNavigate()
    var classes = useStyles()

    var category = [
        {
            name: "cakes",
            image: "b1.avif"
        },
        {
            name: "Toys",
            image: "b7.jpg"
        },
        {
            name: "Home decore",
            image: "b5.avif"
        },
        {
            name: "Gifts",
            image: "b6.jpg"
        },
    ]

    const handleClick = () => {
        navigate("/addtocart")
    }

    const showcategory = () => {
        return category.map((item) => {
            return (
                <div onClick={() => handleClick()}
                    style={{ display: 'flex', flexDirection: "row" }}>
                    <div style={{ margin: 18 }} >
                        <img src={`assets/${item.image}`} alt="img" style={{
                            width: 300,
                            height: 300,
                            borderRadius: 150,
                        }}
                            className={classes.midimg} />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            {item.name}
                        </div>
                    </div>
                </div>)
        })
    }
    return (
        <div style={{ display: 'flex', flexDirection: "row" }} >
            {showcategory()}
        </div>
    )
}