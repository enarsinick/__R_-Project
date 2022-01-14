import { Link } from "react-router-dom";

const BeerComp = ({data, showButton}) => {

    const handleDelete = () => {
        
    }
    

    return ( 
        <div>
            <p> Name: {data.name}</p>
            <p>{data.description}</p>
            <img src={data.image_url} alt="beer" height="300px" />
            <p> Abv: {data.abv}</p>
            <p> Type of beer: {data.typeOfBeer}</p>
            <br/>
            { showButton ? 
                <Link to={`/product/${data._id}`}>
                    <button type="button">
                        View Beer
                    </button>
                </Link> 
                :
                <div>
                    <Link to={`/update/${data._id}`}>
                    <button type="button">
                        Update Beer
                    </button>
                    </Link>
                    <button onClick={handleDelete} type="button">
                        Delete Beer
                    </button>
                </div> 
            }
            
        </div>
    );
}

export default BeerComp; 