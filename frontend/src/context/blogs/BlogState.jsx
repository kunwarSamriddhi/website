import { useState } from "react";
import { useReducer } from "react";
import blogContext from "./BlogContext";
import cartReducer from "./Reducer";
import axios from 'axios'
import tea from "../../assets/tea.jpg"
import coffee from "../../assets/coffee.jpg"

const BlogState = (props) => {
    const products = [
        {
            "id": '127as',
            "title": "coffee",
            "description": "himalayan coffee from nepal",
            "price": 200,
            "instock": 5,
            "img": coffee
        },
        {
            "id": '128as',
            "title": "tea",
            "description": "himalayan tea from nepal",
            "price": 150,
            "instock": 4,
            "img": tea
        }
    ]

    const [product, setProduct] = useState(["mango", "orange"])
    console.log("this is our product from backend", product);

    const [state, dispatch] = useReducer(cartReducer,
        {
            products: products,
            cart: []
        }
    )

    const allProduct = async () => {
        const response = await fetch(`http://localhost:5000/api/product/getallproduct`, {
            method: "GET",
            headers: {
                "content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })
        let parseData = await response.json()
        console.log(parseData);
        setProduct(parseData)
    }

    return (
        <blogContext.Provider value={{ state, dispatch, allProduct }}>
            {props.children}
        </blogContext.Provider>
    )
}
export default BlogState