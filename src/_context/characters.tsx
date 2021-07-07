import React, {createContext, useContext, ReactNode} from 'react';
import {useQuery, gql} from '@apollo/client';

import getCharacters from '../api/query/getCharacters';

const CharactersContext = createContext({
  characters: null,
});

interface Props {
  children: ReactNode;
}

function CharactersProvider({children}: Props) {
  const {data, error, loading, refetch} = useQuery(getCharacters);

  return (
    <CharactersContext.Provider
      value={{
        characters: data?.characters?.results,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}

const useCharacters = () => useContext(CharactersContext);

export {CharactersProvider, useCharacters};
