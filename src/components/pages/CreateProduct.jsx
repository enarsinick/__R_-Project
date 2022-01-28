import axios from "axios";

const CreateProduct = () => {

    const handleSubmit = (e) => {

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

        axios.post("http://18.134.207.254:5015/beers/create", data)
            .then(response => console.log(response))
            .catch(err => console.log(err))
            
    };

    return ( 
        <div>
            <form id="createForm" onSubmit={handleSubmit}>
                <label>Name of Beer:</label>
                <input type="text" id="BeerName" name="beerName"/>
                <br/>
                <label>Description:</label>
                <input type="text" id="BeerDesc" name="beerDesc"/>
                <br/>
                <label>Image URL:</label>
                <input type="text" id="BeerUrl" name="beerUrl"/>
                <br/>
                <label>Alcohol content (%):</label>
                <input type="number" id="BeerAbv" name="beerAbv"/>
                <br/>
                <label>Beer Type:</label>
                <input type="text" id="BeerType" name="beerType"/>
                <br/>
                <button type="Submit" className="button button1">Submit</button>
            </form>
        </div>
    );
}

export default CreateProduct;