import React from 'react';
import { useState, useEffect } from 'react';
import Characterlist from '../components/Characterlist';
import { fetchCharacters } from '../services/fetchApi';

const ApiContainer = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadCharacters = async () => {
      const characters = await fetchCharacters();
      setCharacters(characters);
      setLoading(false);
    };
    loadCharacters();
  }, []);

  if (loading)
    return (
      <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="loading spinner" />
    );
  return <Characterlist characters={characters} />;
};

export default ApiContainer;
