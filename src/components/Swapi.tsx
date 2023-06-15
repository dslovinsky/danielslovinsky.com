import type { FC } from 'react';
import type { SwapiPerson } from 'types/swapi';

export const Swapi: FC = async () => {
  const swapiResponse = await fetch('https://swapi.dev/api/people/1');
  const starWarsPeople: SwapiPerson = await swapiResponse.json();

  return (
    <div>
      <h1>SWAPI</h1>
      {starWarsPeople ? (
        <div>
          <h2>{starWarsPeople.name}</h2>
          <p>Height: {starWarsPeople.height}</p>
          <p>Mass: {starWarsPeople.mass}</p>
          <p>Hair Color: {starWarsPeople.hair_color}</p>

          <h2>Films</h2>
          {starWarsPeople.films.map(film => (
            <p key={film}>{film}</p>
          ))}
        </div>
      ) : (
        <p>No starWarsPeople yet ...</p>
      )}
    </div>
  );
};

export default Swapi;
