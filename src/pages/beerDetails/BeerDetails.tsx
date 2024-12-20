import "./BeerDetails.css";
import { useParams } from "react-router-dom";
import { fetchBeerById } from "../../services/api";
import { Beer } from "../../types/beer";
import { useEffect, useState } from "react";

const BeerDetails: React.FC = () => {
    const [beer, setBeer] = useState<Beer | null>(null);
    const { beerId } = useParams<{ beerId: string }>(); 

    useEffect(() => {
        const getBeer = async () => {
            if (beerId) {
                const fetchedBeer = await fetchBeerById(beerId);
                setBeer (fetchedBeer);
            }
        };
        getBeer();
    }, [beerId]);

    if (!beer) return <div>Loading...</div>

    return (
        <div className="beer-details">
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>Attenuation Level: {beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>Contributed by: {beer.contributed_by}</p>
        </div>
    );
}

export default BeerDetails;