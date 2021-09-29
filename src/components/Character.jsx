import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ id, name, image }) => (
  <>
    <p>{id}</p>
    <p>{name}</p>
    <img src={image} alt={name}/>
  </>
);

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
