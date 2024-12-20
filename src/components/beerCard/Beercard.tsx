import React from 'react';
import { Beer } from '../../types/beer';
import "./Beercard.css"

interface BeerCardProps {
  beer: Beer;
}

const BeerCard: React.FC<BeerCardProps> = ({ beer }) => {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} className="beer-image" />
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      <p>Produziert von: {beer.contributed_by}</p>
    </div>
  );
};

export default BeerCard;