import "./AllBeers.css";
import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { fetchAllBeers } from "../../services/api";
import { Beer } from '../../types/beer';
import BeerCard from "../../components/beerCard/Beercard";


const AllBeers: React.FC = () => {
    const [beers, setBeers] = useState<Beer[]>([]);
  
    useEffect(() => {
      const getBeers = async () => {
        const fetchedBeers = await fetchAllBeers();
        setBeers(fetchedBeers);
      };
      getBeers();
    }, []);
  
    return (
      <div className="all-beers">
        <h2>Alle Biere</h2>
        <div className="beer-list">
          {beers.map((beer) => (
            <Link to={`/beers/${beer._id}`} key={beer._id}>
              <BeerCard beer={beer} />
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default AllBeers;