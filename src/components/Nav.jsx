import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav>
            <h2>Nav bar</h2>
            <Link to='/'>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/000/627/703/small/illust58-6618-01.jpg' alt='Home' width={35} height={35}/>
            </Link>
            <Link to='/about'>
                <h4>About</h4>
            </Link>
            <Link to='/product/'>
                <button type="button"> Shop with Params </button>
            </Link>
            <Link to='/contact'>
                <h4>Click to contact us</h4>
            </Link>
            <Link to='/create'>
                <h4>Click to create new Beer</h4>
            </Link>
        </nav>
     );
}
 
export default Nav;