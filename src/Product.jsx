import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios'
import QuantitySelector from "./QuantitySelector";
import MyNavbar from "./navbar";
import './Product.css'

function Product() {

    const { id } = useParams();
    const [quantity, setQuantity] = useState(0);
    const [product, setProduct] = useState([]);
    const [selectedImage, setSelecedImage] = useState("");

    useEffect(() => {

        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
                setSelecedImage(response.data.images[0]);
            })
            .catch(error => console.log(error));

    }, [id]);

    if (!product) {
        return <h3>Loading Product...</h3>;
    }

    return (
        <div>
            <MyNavbar />
            <div className="Product-full">
                <div>
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="pdetail">
                    <div className="tags">
                        <div className="tag">
                            <h6>{product.tags?.[0]}</h6>
                        </div>
                        <div className="tag">
                            <h6>{product.tags?.[1]}</h6>
                        </div>
                    </div>
                    <h4>{product.brand}</h4>
                    <h6>⭐ {product.rating}/5</h6>
                    <div className="price">
                        <h6>${product.price}</h6>
                        <div className="discount">
                            <h6>{product.discountPercentage}% discount</h6>
                        </div>
                    </div>
                    <p className="Product-description">{product.description}</p>
                    <div className="detail">
                        <div className="detail-1">
                            <span>✅ Available</span>
                            <span>Instock</span>
                        </div>
                        <div className="detail-1">
                            <span> 🧊Stock Availability</span>
                            <span>{product.stock}</span>
                        </div>
                        <div className="detail-1">
                            <span>🏷️ SKU</span>
                            <span>{product.sku}</span>
                        </div>
                        <div className="detail-1">
                            <span>🚛 Shipping</span>
                            <span>{product.shippingInformation}</span>
                        </div>
                        <div className="detail-1">
                            <span>↩ Return</span>
                            <span>{product.returnPolicy}</span>
                        </div>
                        <div className="detail-1">
                            <span>🛡️ warrenty</span>
                            <span>{product.warrantyInformation}</span>
                        </div>
                    </div>
                    <h5>Quantity</h5>
                    <div className="quan">
                        <QuantitySelector
                            quantity={quantity}
                            setQuantity={setQuantity}
                            min={0}
                            max={product.stock}
                        />

                        <p>Selected Quantity: {quantity}</p>
                    </div>
                    <div className="button">
                        <button className="cart">Add to Cart</button>
                        <button className="buy">Buy</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product