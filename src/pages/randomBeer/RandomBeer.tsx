import "./RandomBeer.css"
import { fetchRandomBeer } from "../../services/api";
import { Beer } from "../../types/beer";
import { useEffect, useState } from "react";

const RandomBeer: React.FC = () => {
    const [beer, setBeer] = useState<Beer | null>(null);

    useEffect(() => {
        const getBeer = async () => {
            const fetchedBeer = await fetchRandomBeer(); 
            setBeer(fetchedBeer);
        };
        getBeer();
    }, []);

    if (!beer) return <div>Loading...</div>;
    return (
        <div  className="random-beer">
            <h2>Random Beer</h2>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>{beer.description}</p>
            <p>Contrbuted by: {beer.contributed_by}</p>
        </div>
    );
}
 
export default RandomBeer;