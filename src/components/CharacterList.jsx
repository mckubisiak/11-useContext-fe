import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

const Characterlist = ({ characters, loading }) => {

  if (loading)
    return (
      <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="loading spinner" />
    );

  return (
    <ul aria-label="characters" name="characters">
      {characters.map((character) => (
        <li key={character.image}>
          <Character
            id={character.id}
            name={character.name}
            image={character.image}
          />
        </li>
      ))}
    </ul>
  );
};

Characterlist.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool,
};

export default Characterlist;
