import type { FC } from 'react';
import type { SwapiPerson } from 'types/swapi';

export const Swapi: FC = async () => {
  const swapiResponse = await fetch('https://swapi.dev/api/people/1');
  const starWarsPerson: SwapiPerson = await swapiResponse.json();

  return (
    <div>
      <h1>SWAPI</h1>
      {starWarsPerson ? (
        <div>
          <h2>{starWarsPerson.name}</h2>
          <p>Height: {starWarsPerson.height}</p>
          <p>Mass: {starWarsPerson.mass}</p>
          <p>Hair Color: {starWarsPerson.hair_color}</p>

          <h2>Films</h2>
          {starWarsPerson.films.map(film => (
            <p key={film}>{film}</p>
          ))}
        </div>
      ) : (
        <p>No people yet ...</p>
      )}
    </div>
  );
};

export default Swapi;
