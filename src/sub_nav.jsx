import axios from 'axios'
import { useEffect, useState } from "react"
import './Sub_nav.css'
import {useNavigate} from 'react-router-dom'


function Sub_Nav() {

    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://dummyjson.com/products/category-list")
            .then(Response => {
                console.log(Response.data)
                setList(Response.data);
            })
            .catch(error => console.log(error));
    },
        []);

    return (
        <div className='Category'>
            <h6>All Category</h6>
            <div className='category-product'>
                {list?.map((item, index) => (
                    <p key={index} onClick={()=>navigate(`/category/${item}`)}>
                        {item.toUpperCase()}
                    </p>
                ))}
            </div>
        </div>
    )
}
export default Sub_Nav