import { useEffect, useState } from "react";
import axios from 'axios'; 
import { useParams } from "react-router-dom";
import BeerComp from "../BeerComp";

const SingleProduct = () => {

    const beerId = useParams().id;
    // console.log(id);
    const [data, setData] = useState([]);
    // const [error, setError]= useState("");
    // const [loaded, setLoaded] = useState(false);

    const getDataID = () => {
        axios.get(`http://localhost:5015/beers/read/${beerId}`)
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                console.log(err)
            });
    }

    useEffect(getDataID, []);

    return ( 
        <div>
            <BeerComp data={data} showButton={false}/>
        </div> 
    );
}

export default SingleProduct;