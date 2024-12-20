import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return ( 
        <div className="home">
            <h1>Welcome to Beer-App</h1>
            <nav>
                <Link to="/beers" className="home-link">All Beers</Link>
                <Link to="/random-beer" className="home-link">Random Beer</Link>
            </nav>
        </div>
     );
}
 
export default Home;