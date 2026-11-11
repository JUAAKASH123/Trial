import { useEffect, useState } from "react"
import Nav2 from "./nav2";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import Sub_Nav from "./sub_nav";
import './Product_list.css'
import MyNavbar from "./navbar";

function Product_list() {

    const navigate=useNavigate();

    const {categoryName} = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categoryName}`)
            .then(Response => {
                setProduct(Response.data.products);
            })
            .catch(error => console.log(error));
    }, [categoryName])
    return (
        <div className="Productlist">
            <MyNavbar/>
            <Sub_Nav/>
            <h5>{categoryName.toUpperCase()}</h5>
            <div className="products">
                {product.map((item) => (
                    <div key={item.id} className="product" onClick={() => navigate(`/product/${item.id}`)}>
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            width="150"/>
                            <h5>{item.title}</h5>
                            <p>Rating: {item.rating}</p>
                            <p>${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product_list