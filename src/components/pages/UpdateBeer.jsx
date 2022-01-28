import { useEffect, useState } from "react";
import axios from 'axios'; 
import { useParams } from "react-router-dom";

const UpdateBeer = () => {

    const beerId = useParams().id;
    const [data, setData] = useState([]);
    const [error, setError]= useState("");
    const [loaded, setLoaded] = useState(false);
    const [submit, setSubmit] = useState(false);

    const {name, description, image_url, abv, typeOfBeer} = data.data;

    const updateBeer = (e) => {


        e.preventDefault();
        
        let alcoholContents = document.querySelector("#BeerAbv").value;
        let alcFree = null;

        if (alcoholContents === 0) {
            alcFree = true;
        } else {
            alcFree = false;
        }
        
        const data = {
            name: document.querySelector("#BeerName").value,
            description: document.querySelector("#BeerDesc").value,
            image_url: document.querySelector("#BeerUrl").value, 
            abv: parseFloat(document.querySelector("#BeerAbv").value), 
            alcohol_free: alcFree,
            typeOfBeer: document.querySelector("#BeerType").value
        }

        console.log(data);
    
        document.querySelector("#createForm").reset();

        axios.put(`http://18.134.207.254:5015/beers/update/${beerId}`, data)
            .then(response => console.log(response))
            .catch(err => console.log(err))
            
    };
    
    const getDataID = () => {
        axios.get(`http://18.134.207.254:5015/beers/read/${beerId}`)
            .then(response => {
                setData(response);
                setLoaded(true);
                console.log(response);
            })
            .catch(err => {
                console.log(err)
                setLoaded(true);
                setError(err);
            });
    }

    useEffect(getDataID, []);

    console.log(data.data.name);


    return ( 
        <div>
            <form id="updateForm" onSubmit={updateBeer}>
                <label>Name of Beer:</label>
                <input type="text" id="BeerName" name="beerName" value={name}/>
                <br/>
                <label>Description:</label>
                <input type="text" id="BeerDesc" name="beerDesc" value={description}/>
                <br/>
                <label>Image URL:</label>
                <input type="text" id="BeerUrl" name="beerUrl" value={image_url}/>
                <br/>
                <label>Alcohol content (%):</label>
                <input type="number" id="BeerAbv" name="beerAbv" value={abv}/>
                <br/>
                <label>Beer Type:</label>
                <input type="text" id="BeerType" name="beerType" value={typeOfBeer}/>
                <br/>
                <button type="Submit" className="button button1">Submit</button>
            </form>
        </div>
    );
}

export default UpdateBeer;