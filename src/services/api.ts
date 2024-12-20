import { Beer } from "../types/beer";

const BASE_URL = 'https://ih-beers-api2.herokuapp.com/beers';

export const fetchAllBeers = async(): Promise<Beer[]> => {
    const response = await fetch(BASE_URL);
    return response.json();
};



export const fetchBeerById = async (id: string): Promise<Beer> => {
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
  };

export const fetchRandomBeer = async (): Promise<Beer> => {
    const response = await fetch(`${BASE_URL}/random`);
    return response.json();
};
  