import { useEffect, useState } from "react";
import axios from 'axios';
import Beer from "../BeerComp";

const Home = () => {

    const [data, setData] = useState([]);
    const [error, setError]= useState("");
    const [loaded, setLoaded] = useState(false);

    const getData = () => {
        axios.get("http://localhost:5015/beers/readAll")
            .then(response => {
                setLoaded(true);
                setData(response.data);
            })
            .catch(err => {
                console.log(err);
                setLoaded(true);
                setError(err);
            });
    }

    useEffect(getData, []);

    return ( 
        <div>
            <h2>List of beers:</h2>
            {loaded ? data.map((beer, i) => <Beer key={i} data={beer} showButton={true}/>) : "Loading..."}
        </div>
    );
}

export default Home;